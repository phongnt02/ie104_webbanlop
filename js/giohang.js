// handle cart
export const cart = {
    products:[],
    sendDataToLocalStore : function () {
        let cartPayBtn = document.querySelector('.cart-btn__pay')
        const _this = this
        cartPayBtn.onclick = function () {
            // chuyển sang kiểu string trước khi lưu vào localStore, vì localStore lưu dữ liệu JSON
            let data = JSON.stringify(_this.products)
            localStorage.setItem('products',data)
        }
    },
    addProduct : function () {
        const _this = this;
        let addProductBtn = document.querySelectorAll('.product-item__add-cart')
        addProductBtn.forEach(item => {
            item.onclick = function () {
                var addInCart = new Promise(function(resolve){
                    var productElement = getparentElement(item, '.product-item-link')
                    let url = productElement.querySelector('.product-item__img img').getAttribute("src")
                    let name = productElement.querySelector('.product-item__heading').innerText
                    let attribute = productElement.querySelector('.product-item__attribute').innerText
                    let price = productElement.querySelector('.product-item__price').innerText
                    let product = {
                        name: name,
                        pathImgUrl: url,
                        attribute: attribute,
                        amount: 1,
                        price: parseInt(price),
                    }
                    // kiểm tra sản phẩm thêm vào có trùng tên ? giỏ +1 : thêm vào giỏ
                    let isExistName = false;
                    _this.products.forEach(item => {
                        if(item.name === product.name){
                            item.amount++;
                            isExistName = true;
                        }
                    })
                    if(!isExistName) _this.products.push(product)
                    // console.log(_this.products)
                    resolve(isExistName)
                })
                addInCart
                    .then(function(isExistName){
                        updateAmountInCart();
                        statusInCart(isExistName);
                        renderInCart();
                        totalAmount();
                        deleteProduct();
                    })
            }
        })
        function getparentElement (element,selector) {
            while(element.parentElement) {
                if(element.parentElement.matches(selector)){
                    return element.parentElement;
                }
                element = element.parentElement;
            }
        }
        function updateAmountInCart() {
            var amountInCart = document.querySelector('.cart__amount')
            amountInCart.innerText = _this.products.length
        }
        function renderInCart() {
            var cartShopping = document.querySelector('.cart-shopping__list')
            var html = ``
            _this.products.map(item => {
                html += `
                <li class="cart-shopping__item">
                            <a href="#" class="cart-shopping__item-link">
                                <div class="cart-shopping__img">
                                    <img src="${item.pathImgUrl}" alt="img">
                                </div>
                                <div class="cart-shopping__infor">
                                    <h3 class="cart-shopping__infor-heading">${item.name}</h3>
                                    <div class="cart-shopping__infor-price">
                                        <span class="amount">${item.amount}</span> x 
                                        <span class="cost">${item.price}</span>
                                    </div>
                                </div>
                                <div class="cart-shopping__delete">
                                    <i class="fa-solid fa-xmark"></i>
                                </div>
                            </a>
                        </li>
                `
            })
            cartShopping.innerHTML = html
        }
        function statusInCart (isExistName) {
            var cartModal = document.querySelector('.cart-modal-noshopping')
            var cartModalShopping = document.querySelector('.cart-modal-shopping')
            if(_this.products.length === 1 && !isExistName) {
                cartModal.classList.remove('active')
                cartModalShopping.classList.add('active')
            }
            else if(_this.products.length === 0) {
                cartModalShopping.classList.remove('active')
                cartModal.classList.add('active')
            }
            _this.handleDisplayCart();
        }
        function totalAmount() {
            var total = _this.products.reduce( (total,currentValue) => {
                total += currentValue.price * currentValue.amount;
                return total;
            },0)
            var cartTotalElement = document.querySelector('.cart-total')
            cartTotalElement.innerText = total;
        }
        function deleteProduct () {
            var deleteProductBtn = document.querySelectorAll('.cart-shopping__delete')
            deleteProductBtn.forEach( deleteBtn => {
                deleteBtn.onclick = function () {
                    var ulElement = document.querySelector('.cart-shopping__list')
                    var parentElement = getparentElement(deleteBtn, '.cart-shopping__item')
                    var nameProduct = parentElement.querySelector('.cart-shopping__infor-heading').innerText
                    _this.products.forEach((product, index) => {
                        if (product.name === nameProduct) {
                            _this.products.splice(index, 1)
                            ulElement.removeChild(parentElement)
                            totalAmount();
                            updateAmountInCart();
                        }
                    })
                }
            });
        }
    },
    handleDisplayCart : function () {
        var cartBtn = document.querySelector('.cart.nav-right__item')
        var modal = document.querySelector('.modal')
        var cartModal = document.querySelector('.cart-modal.active')
        var closeBtnModal = document.querySelector('.cart-modal.active .cart-close')
        // On/off cart
        var isOnCartModal = false;
        cartBtn.onclick = function () {
            if (!isOnCartModal) {
                modal.classList.add('active')
                cartModal.style.animation = 'showCart linear 0.3s';
                isOnCartModal = true;
            }
        }
        closeBtnModal.onclick = function hideModal() {
            if (isOnCartModal) {
                cartModal.style.animation = 'hideCart linear 0.3s';
                setTimeout(() => {
                    modal.classList.remove('active')
                }, 200);
                isOnCartModal = false;
            }
        }
    },
    renderModalCart : function () {
        var modal = document.querySelector('.modal')
        let html = ` <div class="overlays">
        <div class="cart-modal cart-modal-noshopping active">
            <div class="cart-header">
                <h1 class="cart-heading">Giỏ hàng</h1>
                <div class="cart-close"><i class="fa-solid fa-xmark"></i>Đóng</div>
            </div>
            <div class="cart-content">
                <i class="fa-solid fa-cart-plus"></i>
                <p class="cart-content-text">Chưa có sản phẩm trong giỏ hàng</p>
            </div>
        </div>
        <div class="cart-modal cart-modal-shopping">
            <div class="cart-header">
                <h2 class="cart-heading">Giỏ hàng</h2>
                <div class="cart-close"><i class="fa-solid fa-xmark"></i>Đóng</div>
            </div>
            <ul class="cart-shopping__list">
                
            </ul>
            <div class="cart-footer">
                <div class="cart-pay">
                    <h2 class="cart-heading">Tổng cộng : </h2>
                    <div class="cart-total">20000000</div>
                </div>
                <div class="cart-btn">
                    <a href="#" class="cart-btn__view">Xem giỏ hàng</a>
                    <a href="./print__form__order.html" class="cart-btn__pay">Thanh toán</a>
                </div>
            </div>
        </div>`
        modal.innerHTML = html;
    },
    start: function () {
            this.renderModalCart();
            this.handleDisplayCart()
            this.addProduct()
            this.sendDataToLocalStore()
    }
}
// cart.start();

