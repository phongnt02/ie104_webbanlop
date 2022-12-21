// Love for product

export const favouriteItem = {
    favouriteProduct :[],
    isLove: [],
    renderListFavourite : function (keyItem) {
        const _this = this;
        let data = JSON.parse(localStorage.getItem(keyItem))
        if(data !== null) {
            let productList = document.querySelectorAll('.product-item')
            productList.forEach((item,index) =>{
                let nameItem = item.querySelector('.product-item__heading').innerText
                data.map((value) => {
                    if(value.name === nameItem) {
                        _this.isLove[index] = true;
                        _this.pushDataIn_favouriteProduct(item.querySelector('.product-item__img'))
                        item.querySelector('.product-item__favourite i').classList.remove('fa-regular')
                        item.querySelector('.product-item__favourite i').classList.add('fa-solid')
                    }
                })
            })
        }
    },
    sendDataToLocalStore:function(keyItem){
        let data = JSON.stringify(this.favouriteProduct)
        localStorage.setItem(keyItem, data)
    },
    handleBtnLove: function (keyItem) {
        const _this = this
        var favourite = document.querySelectorAll('.product-item__favourite')
        favourite.forEach((item, index) => {
            item.onclick = function () {
                if (_this.isLove[index]) {
                    item.querySelector('i').classList.remove('fa-solid')
                    item.querySelector('i').classList.add('fa-regular')
                    _this.isLove[index] = false;
                    _this.spliceDataOut_favouriteProduct(item)
                   _this.sendDataToLocalStore(keyItem);
                }
                else {
                    item.querySelector('i').classList.remove('fa-regular')
                    item.querySelector('i').classList.add('fa-solid')
                    _this.isLove[index] = true;
                    _this.pushDataIn_favouriteProduct(item)
                   _this.sendDataToLocalStore(keyItem);
                }
            }
        })
    },
    getparentElement : function (element,selector) {
        while(element.parentElement) {
            if(element.parentElement.matches(selector)){
                return element.parentElement;
            }
            element = element.parentElement;
        }
    },
    spliceDataOut_favouriteProduct : function (element) {
        let parentElement = this.getparentElement(element, '.product-item-link')
        let temp = null;
        this.favouriteProduct.forEach((item,index) => {
            if(item.name === parentElement.querySelector('.product-item__heading').innerText){
                temp = index
            }
        })
        this.favouriteProduct.splice(temp,1)
    },
    pushDataIn_favouriteProduct: function (element) {
        let parentElement = this.getparentElement(element, '.product-item-link')
        let url = parentElement.querySelector('.product-item__img img').getAttribute("src")
        let name = parentElement.querySelector('.product-item__heading').innerText
        let attribute = parentElement.querySelector('.product-item__attribute').innerText
        let price = parentElement.querySelector('.product-item__price').innerText
        let product = {
            name: name,
            pathImgUrl: url,
            attribute: attribute,
            price: parseInt(price),
        }
        this.favouriteProduct.push(product)
    },
    start: function (keyItem) {
        this.renderListFavourite(keyItem)
        this.handleBtnLove(keyItem);
    }
}
// favouriteItem.start();



export const wishList = {
    renderList : function (keyItem) {
        let data = JSON.parse(localStorage.getItem(keyItem))
        let favouriteList = document.querySelector('.'+keyItem)
        let html = ``
        if(data !== null) {
            data.map(item => {
                html += `
                <li class="product-item">
                            <div class="product-item-delete ${keyItem}">
                                <i class="fa-solid fa-xmark"></i>Gỡ
                            </div>
                            <a href="#" class="product-item-link">
                                <div class="product-item__img">
                                    <img src="${item.pathImgUrl}" alt="mamxe">
                                    <div class="product-item__add-cart">
                                        <p class="product-item__add-cart-text">Thêm vào giỏ hàng</p>
                                        <div class="product-item__add-cart-icon">
                                            <i class="fa-solid fa-cart-shopping"></i>
                                        </div>
                                    </div>
                                    <div class="product-item__favourite-search">
                                        <div class="product-item__search">
                                            <span class="product-item__search-detail">Xem nhanh</span>
                                            <i class="fa-solid fa-magnifying-glass"></i>
                                        </div>
                                    </div>
                                </div>
                                <h3 class="product-item__heading">${item.name}</h3>
                                <p class="product-item__attribute">${item.attribute}</p>
                                <span class="product-item__price-label">Giá : <span class="product-item__price">${item.price}</span></span>
                            </a>        
                        </li>
                `
            })
            favouriteList.innerHTML = html;
        }
    },
    deleteItem : function (keyItem) {
        const _this = this;
        let data = JSON.parse(localStorage.getItem(keyItem))
        let deleteItemBtn = document.querySelectorAll('.product-item-delete.'+keyItem)
        deleteItemBtn.forEach(item=>{
            item.onclick = function () {
                let parentElement = _this.getparentElement(item,'.product-item')
                let nameItem = parentElement.querySelector('.product-item__heading').innerText
                data.map((value,index) => {
                    if(value.name === nameItem) {
                        // update data 
                        data.splice(index,1)
                        localStorage.setItem(keyItem,JSON.stringify(data))
                        // remove DOM
                        parentElement.remove();
                    }
                })
            }
        })
    },
    getparentElement : function (element,selector) {
        while(element.parentElement) {
            if(element.parentElement.matches(selector)){
                return element.parentElement;
            }
            element = element.parentElement;
        }
    },
    start : function (keyItem) {
        this.renderList(keyItem);
        this.deleteItem(keyItem);
    }
}
// wishList.start()



