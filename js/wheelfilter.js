import {cart} from './giohang.js'
import {favouriteItem} from './wishlist.js';

export const fliter ={
    arr : null,
    data: null,
 
    getAPI : function () {
        const _this = this;
        fetch('http://www.phongnt20521745.tk/API/getMamxe.php')
        .then((data) =>{
            return data.json().
            then((completedata)=>{
                _this.data=completedata
                _this.data.map((values) => {
                this.show(values)
            })
            cart.start()
            favouriteItem.start('listFavouriteMamXe')
            })
        })
    },
    show : function(values){
        let list = document.querySelector('.product-list')
        list.innerHTML+=`
        <li class="product-item">
        <a href="#" class="product-item-link">
            <div class="product-item__img">
                <img src="${values.pathImgUrl}" alt="lopxe">
                <div class="product-item__add-cart">
                    <p class="product-item__add-cart-text">Thêm vào giỏ hàng</p>
                    <div class="product-item__add-cart-icon">
                        <i class="fa-solid fa-cart-shopping"></i>
                    </div>
                </div>
                <div class="product-item__favourite-search">
                    <div class="product-item__favourite">
                        <span class="product-item__favourite-detail">Yêu thích</span>
                        <i class="fa-regular fa-heart"></i>
                    </div>
                    <div class="product-item__search">
                        <span class="product-item__search-detail">Xem nhanh</span>
                        <i class="fa-solid fa-magnifying-glass"></i>
                    </div>
                </div>
            </div>
            <h3 class="product-item__heading">${values.ProductName}</h3>
            <p class="product-item__attribute">Brand: ${values.BRAND_XE}</p>
            <span class="product-item__price-label">Giá : <span class="product-item__price"> ${values.Price}</span></span>
        </a>        
        </li>`
    },
    Test:  function(){
        var i;
        var j=0;
        let brand = document.querySelectorAll('#brand');
        var result = []
            // Lặp qua từng checkbox để lấy giá trị
            for (var i = 0; i < brand.length; i++){
                if (brand[i].checked === true){
                result[j] =  brand[i].value ;
                j++;
                }
        } 
        this.arr=result
    },
    
    getArr: function(){
        const _this=this
        let brand = document.querySelectorAll('#brand');
        brand.forEach(item => {
            item.onclick =  function(){
                _this.Test()
                _this.out(_this.arr)}
        })
       
    }, 
    start: function(){
        this.getAPI()
        this.getArr()
        this.getVal()
        
    },
    getVal: function(){
        const _this=this
        let size  = document.querySelectorAll('#size')
        size.forEach(item =>{
            item.onclick = function(){
                _this.Test()
                _this.out(_this.arr,item.value)
            }
        })
    },
    out: function(arr,val){
        let list = document.querySelector('.product-list')
        console.log(typeof(val))
            list.innerHTML='';
           this.data.map((values)=>{
            if(arr.includes(values.BRAND_XE) && val==values.Size)
                this.show(values)
            if(arr.includes(values.BRAND_XE) && typeof (val) == "undefined")
                this.show(values)
            if(arr.length==0 && typeof (val) == "undefined")
                this.show(values)
            if(arr.length==0 && val==values.Size)
                this.show(values)
             
            })
         }

    }   
// setInterval(() => {
//     fliter.start();
// }, 2000);

// fliter.start();
 