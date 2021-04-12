let products = [
   {id: 1 , title: "ELLERY X M'O CAPSULE " , price : 521, img: 'img/product-photo1.png', info: '1Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.'},
   {id: 2 , title: "ELLERY X M'O CAPSULE1" , price : 512, img: 'img/product-photo2.png', info: '4Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.'},
   {id: 3 , title: "ELLERY X M'O CAPSULE2" , price : 252, img: 'img/product-photo3.png', info: '1Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.'},
   {id: 4 , title: "ELLERY X M'O CAPSULE3" , price : 524, img: 'img/product-photo3.png', info: '2Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.'},
   {id: 5 , title: "ELLERY X M'O CAPSULE4" , price : 152, img: 'img/product-photo1.png', info: '6Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.'},
   {id: 6 , title: "ELLERY X M'O CAPSULE5" , price : 542, img: 'img/product-photo2.png', info: '5Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.'},
   {id: 7 , title: "ELLERY X M'O CAPSULE6" , price : 552, img: 'img/product-photo2.png', info: '6Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.'},
   {id: 8 , title: "ELLERY X M'O CAPSULE7" , price : 522, img: 'img/product-photo1.png', info: '7Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.'},
   {id: 9 , title: "ELLERY X M'O CAPSULE8" , price : 562, img: 'img/product-photo3.png', info: '5Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.'}
]

const renderProduct = (productObj) => {return `
   <div class="featuredCol">
   <div class="featuredImage">
       <a href="#">
           <img src=${productObj.img} alt="product">
           <div class="featuredToCart">
               <button class="featuredAddToCart buy-btn">
                   <i class="fab fa-opencart featuredCartIcon"></i>
                  Add to Cart
               </button>
           </div>
       </a>
   </div>
   <div class="featuredGridText">
       <h3 class="featuredItemName">${productObj.title}</h3>
       <p class="featuredItemInfo">${productObj.info}</p>
       <p class="featuredItemPrice">${productObj.price}</p>
   </div>
</div>
`
}

const productPage = list => {
   const productsList = list.map(item => renderProduct(item))
   document.querySelector('.featuredGrid').innerHTML = productsList;
}
productPage(products);
