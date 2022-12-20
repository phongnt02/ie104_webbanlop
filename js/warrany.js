
export const warrany = {
    handleEventClick : async function () {
        const _this = this;
        let response = await fetch('http://www.phongnt20521745.tk/API/getbaohanh.php')
        let data = await response.json()

        // get DOM
        let submitBtn = document.querySelector('.warrany-box__btn-search')
        let warranyMessage = document.querySelector('.warrany-box__message')
        let inputBarcode = document.querySelector('.warrany-box__input')
        
        let html = ``
        submitBtn.onclick = function () {
            let isCheckData = false ;
            data.map((item) => {
                if (inputBarcode.value === item.macao) {
                    isCheckData = true;
                    html = `<div class="warrany-box__infor">
                    <div class="warrany-box__infor-item">
                        <label class="warrany-box__infor-label">Tên sản phẩm :</label>
                        <span class="warrany-box__infor-detail">${item.tensanpham}</span>
                    </div>
                    <div class="warrany-box__infor-item">
                        <label class="warrany-box__infor-label">Họ tên khách hàng :</label>
                        <span class="warrany-box__infor-detail">${item.hoten}</span>
                    </div>
                    <div class="warrany-box__infor-item">
                        <label class="warrany-box__infor-label">Số điện thoại :</label>
                        <span class="warrany-box__infor-detail">${item.sodienthoai}</span>
                    </div>
                    <div class="warrany-box__infor-item">
                        <label class="warrany-box__infor-label">Email :</label>
                        <span class="warrany-box__infor-detail">${item.email}</span>
                    </div>
                    <div class="warrany-box__infor-item">
                        <label class="warrany-box__infor-label">Địa chỉ :</label>
                        <span class="warrany-box__infor-detail">${item.diachi}</span>
                    </div>
                    <div class="warrany-box__infor-item">
                        <label class="warrany-box__infor-label">Tỉnh Thành :</label>
                        <span class="warrany-box__infor-detail">${item.tinhthanh}</span>
                    </div>
                    <div class="warrany-box__infor-item">
                        <label class="warrany-box__infor-label">Quận Huyện :</label>
                        <span class="warrany-box__infor-detail">${item.quanhuyen}</span>
                    </div>
                </div>`
                    warranyMessage.innerHTML = html;
                }
            });
            if(!isCheckData) {
                html = `<div class="warrany-box__error">
                    Không có dữ liệu
                </div>`
                warranyMessage.innerHTML = html;
            }
        }
    },
    start : function() {
        this.handleEventClick();
    }
}