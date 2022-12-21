import {cart} from './giohang.js'
import {favouriteItem} from './wishlist.js';

export const filter ={
    arr : [],
    data: null,
 
    getAPI : async function () {
        let respon = await fetch('http://www.phongnt20521745.tk/API/getLopxe.php')
        let data = await respon.json()

        this.data = data
        let html = ``
        this.data.map((values) => {
            html += `<li class="product-item">
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
                        <p class="product-item__attribute">${values.Size}</p>
                        <span class="product-item__price-label">Giá : <span class="product-item__price"> ${values.Price}</span></span>
                    </a>        
                </li>`
        })
        let list = document.querySelector('.product-list')
        list.innerHTML = html
        cart.start();
        favouriteItem.start('listFavouriteLopXe')

    },
    Test:  function(){
        let temp=[],i=0,j=0
        let GT = document.getElementById("width")
        let width = GT.options[GT.selectedIndex].value;
        GT = document.getElementById("height")
        let height = GT.options[GT.selectedIndex].value;
        GT = document.getElementById("size")
        let size = GT.options[GT.selectedIndex].value;
        GT= document.getElementById("trademarkcar")
        let trademarkcar = GT.options[GT.selectedIndex].value.toUpperCase();
        GT = document.getElementById("trademarktire")
        let trademarktire =  GT.options[GT.selectedIndex].value.toUpperCase();
        temp.push(width,height,size,trademarkcar,trademarktire);
        for(i=0;i<temp.length;i++)
            {
                while(temp[i]==0)
                {
                    for(j=i; j<temp.length; j++)
                    {
                        temp[j]=temp[j+1];
                    }
                    
                    temp.length--;
                }
            }
        this.arr=temp
        this.out(this.arr)
    },
    
    getArr: function(){
        const _this=this
        let form = document.querySelectorAll('.form-control');
        form.forEach(item =>{
            item.onchange = function(){
                _this.Test()
            }
        })
       
    }, 
    start: function(){
        this.getAPI()
        this.getArr()  
    },
    KTMangCon: function (A,B,nA,nB){
        var i,j,check=0;
        for(i=0;i<nA;i++)
        {
            check=0;
            for(j=0;j<nB;j++)
            {
                if(B[j]==A[i])
                {
                    check=1;
                }
            }
            if(check == 0){
                return check;
            }
        }
        return check;
    },
    out: function(arr){
        console.log(arr.length)
        let list = document.querySelector('.product-list')
           list.innerHTML='';
           this.data.map((values)=>{
            if (arr.length==0) {
                list.innerHTML +=`
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
                                    <p class="product-item__attribute">${values.Size}</p>
                                    <span class="product-item__price-label">Giá : <span class="product-item__price"> ${values.Price}</span></span>
                                </a>        
                            </li>`
            }
                else {
                        var arr1=[];
                        arr1.push(values.width,values.height,values.brand.toUpperCase(),values.Size)
                        if(this.KTMangCon(arr,arr1,arr.length,arr1.length)==1){
                            list.innerHTML +=`
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
                                    <p class="product-item__attribute">${values.Size}</p>
                                    <span class="product-item__price-label">Giá : <span class="product-item__price"> ${values.Price}</span></span>
                                </a>        
                            </li>`
                        }
                    }
            })
         }

    }   
