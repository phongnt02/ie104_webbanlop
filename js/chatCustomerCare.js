export const chatCustomerCare = {
    isShow : false,
    renderHTML : function () {
        let app = document.querySelector('.app')
        let chatElement = document.createElement('div')
        let html = ``
        chatElement.classList.add('chatElement')
        html = `
        <ul class="action-list">
            <li class="phone"><i class="fa-solid fa-phone"></i></li>
            <li class="facebook">
                <a href="https://www.facebook.com/">
                    <i class="fa-brands fa-facebook"></i>
                </a>
            </li>
            <li class="message">
                <i class="fa-brands fa-facebook-messenger"></i>
                <div class="chat-form">
                    <div class="chat-header">
                        <h5 class="chat-header__title">Chăm sóc khách hàng</h5>
                        <div class="chat-header-close"><i class="fa-solid fa-xmark"></i></div>
                    </div>
                    <div class="chat-body">
                        <div class="chat-body_content you">Bạn cần tư vấn gì ?</div>
                        
                    </div>
                    <div class="chat-input">
                        <input type="text" name="message" placeholder="Type a message...">
                        <i class="fa-solid fa-paper-plane send-btn"></i>
                    </div>
                </div>
            </li>
        </ul>
        <div class="top-btn"><i class="fa-solid fa-arrow-up"></i></div>
        ` 
        chatElement.innerHTML = html;
        app.appendChild(chatElement)
    },
    eventMoveTop : function () {
        let topElement = document.querySelector('.top-btn')
        topElement.onclick = function () {
            window.scroll({
                top :0,
                behavior:"smooth"
            });
        }
    },
    renderMessage : function (thisInput,chatBody) {
        // set content DOM
        let chatContent = document.createElement('div')
        chatContent.classList.add('chat-body_content')
        chatContent.classList.add('me')
        chatContent.innerText = thisInput.value
        
        // add message
        chatBody.appendChild(chatContent)
        
        // set width for chatContent Element
        let maxWidthContentLength = 26
        let widthChatContent = chatContent.offsetWidth
        let percentWidth = (thisInput.value.length/maxWidthContentLength).toFixed(2)
        console.log(thisInput.value.length)
        if(thisInput.value.length < maxWidthContentLength && thisInput.value.length >= 10) {
            chatContent.style.width = widthChatContent*percentWidth + 'px'
        }
        else {
            chatContent.style.width = widthChatContent*percentWidth + 20 + 'px'
        }
        // reset input
        thisInput.value = ''
    },
    eventChatBox : function () {
        const _this = this;
        let chatForm = document.querySelector('.chat-form')

        // element render
        let chatBody = document.querySelector('.chat-body')
        
        //event input innerText
        let input = document.querySelector('input[name="message"]')
        input.onkeydown = function (e) {
            if(e.key === "Enter" && input.value !== '' ) {
                _this.renderMessage(input,chatBody)
            }
        }

        // event click send btn
        let sendMessageBtn = document.querySelector('.send-btn')
        sendMessageBtn.onclick = function () {
            if(input.value !== '')
                _this.renderMessage(input,chatBody)
        }

        // event click close btn
        let closeBtn = document.querySelector('.chat-header-close')
        closeBtn.onclick = function () {
            chatForm.classList.remove('active')
            _this.isShow = false
        }

        // event open box chat
        let message = document.querySelector('.message i')
        message.onclick = function () {
            if(_this.isShow) {
                chatForm.classList.remove('active')
                _this.isShow = false
            }
            else {
                chatForm.classList.add('active')
                _this.isShow = true
            }
        }
    },
    start : function () {
        this.renderHTML();
        this.eventMoveTop();
        this.eventChatBox();
    }
}