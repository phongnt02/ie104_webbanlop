import {renderApp} from './renderApp.js'
import handleAnimation from './handleAnimation.js'
import {cart} from './giohang.js'
import {chatCustomerCare} from './chatCustomerCare.js'

async function index () {
    let htmlBody = `<div class="container">
    <div class="wide">
    <div class="content-list">
        <div class="content-list__introduce-img">
            <img src="http://www.phongnt20521745.tk/API/Img/img-gioithieu.jpg" alt="introduce">
        </div>
        <div class="content-list__item">
            <h2 class="content-list__item-heading">Giới thiệu về lốp xe</h2>
            <p class="content-list__item-introduce">Trung tâm lốp xe, mâm xe và bảo dưỡng ô tô Hải Triều là
                trung tâm dịch vụ duy nhất kết hợp tốt các dịch vụ trọng yếu, cần thiết cho xe ô tô như lốp xe,
                chăm sóc xe, bảo dưỡng nhanh, phụ kiện ô tô, khu vực phòng chờ thư giãn cho khách hàng,…</p>
            <p class="content-list__item-introduce">Hải Triều đã có nền tảng hơn 40 năm kinh nghiệm về kỹ thuật
                lốp, chăm sóc xe hơi, với những dịch vụ như: thay lốp xe hơi, vá lốp, bơm khí ni tơ, cân chình
                mâm, bấm chì và làm vệ sinh xe. Chúng tôi luôn sử dụng các sản phẩm đến từ các nhãn hàng nổi
                tiếng của Đức và Mỹ. Cùng với đội ngũ kỹ thuật lành nghề được đào tạo bài bản, chúng tôi cam kết
                mang lại sự hài lòng cho quý khách hàng khi trải nghiệm dịch vụ tại đây</p>
            <p class="content-list__item-introduce">Lốp Xe Hải Triều tự hào là đại lý phân phối lớn nhất của các
                hãng lốp hàng đầu trong thị trường sản xuất lốp xe ô tô như: Michelin, Bridgestone, Pirelli,
                Continentals, Dunlop, Kumho, Hankook, Goodyear,… Đối với chúng tôi một chiếc lốp không chỉ mang
                cho bạn những trải nghiệm êm ái, mà còn giúp bạn có những cung đường an toàn và tiết kiệm chi
                phí hiệu quả</p>
            <a href="../About.html" class="content-item__btn-link">Xem thêm</a>
        </div>
    </div>`

    // render san pham mam xe
    let responseMamxe = await fetch('http://www.phongnt20521745.tk/API/getMamxe.php')
    let dataMamxe = await responseMamxe.json()    
    htmlBody += `<div class="product">
            <h1 class="product-heading">Sản phẩm mâm xe</h1>
            <div class="product-list">`
    dataMamxe.forEach((element) => {
    htmlBody += `<a href="#" class="product-item">
                <div class="product-item__img">
                    <img src="${element.pathImgUrl}" alt="mamxe">
                </div>
                <h3 class="product-item__heading">${element.ProductName}</h3>
                <p class="product-item__attribute">${element.attribute}</p>
                <span class="product-item__price-label">Giá : <span class="product-item__price">${element.Price}</span></span>
                </a>`
    });
    htmlBody += `</div>`

    //render intro 
    htmlBody += `<div class="product-list-intro">
            <a href="#" class="product-intro-item">
                <div class="product-intro-item__img">
                    <img src="http://www.phongnt20521745.tk/API/Img/intro1.jpg" alt="mamxe">
                </div>
            </a>
            <a href="#" class="product-intro-item">
                <div class="product-intro-item__img">
                    <img src="http://www.phongnt20521745.tk/API/Img/intro2.jpg" alt="mamxe">
                </div>
            </a>
            <a href="#" class="product-intro-item">
                <div class="product-intro-item__img">
                    <img src="http://www.phongnt20521745.tk/API/Img/intro3.jpg" alt="mamxe">
                </div>
            </a>
            </div>`

    // render san pham lop xe
    htmlBody += `<h1 class="product-heading">Sản phẩm lốp xe</h1>
            <div class="product-list">`
    let responseLopxe = await fetch('http://www.phongnt20521745.tk/API/getLopxe.php')
    let dataLopxe = await responseLopxe.json()

    dataLopxe.forEach(element => {
        htmlBody += `<a href="#" class="product-item">
                            <div class="product-item__img">
                                <img src="${element.pathImgUrl}" alt="lopxe">
                            </div>
                            <h3 class="product-item__heading">${element.ProductName}</h3>
                            <p class="product-item__attribute">Kích thước :${element.Size}</p>
                            <span class="product-item__price-label">Giá : <span class="product-item__price">${element.Price}</span></span>
                    </a>`
    });
    htmlBody += `</div></div>`

    // render cam ket
    htmlBody += `<div class="commit">
                    <h1 class="commit-heading">Cam kết từ chúng tôi</h1>
                    <div class="commit-about">
                        <ul class="commit-about-list">`
    let responseCommit = await fetch('http://www.phongnt20521745.tk/API/commit.php')
    let dataCommit = await responseCommit.json()
    dataCommit.forEach(element => {
        htmlBody += `<li class="commit-about-item">
                                    <img src="${element.pathImgUrl}" alt="${element.commitText}" class="commit-about-item__img">
                                    <p class="commit-about-item__service">${element.commitText}</p>
                                </li>`
    });
    htmlBody += `</ul>
                    </div>
                    <div class="commit-information">
                        <ul class="commit-information-list">
                            <li class="commit-information-item">
                                <i class="fa-solid fa-house"></i>
                                <p class="commit-information__number">1183</p>
                                <p class="commit-information__description">Phân phối sỉ lốp xe cho 1183 cửa hàng</p>
                            </li>
                            <li class="commit-information-item">
                                <i class="fa-solid fa-car"></i>
                                <p class="commit-information__number">507492</p>
                                <p class="commit-information__description">Đã thay lốp cho 507492 chiếc xe</p>
                            </li>
                        </ul>
                </div>
            </div>`
    // render tu van 
    htmlBody += `</div><div class="consultation">
                    <h1 class="consultation-heading">ĐĂNG KÝ TƯ VẤN</h1>
                    <p class="consultation-description">Bạn đang băn khoăn lựa chọn lốp xe phù hợp với xe của bạn, hãy liên hệ để
                                    được tư vấn miễn phí</p>
                    <a href="#"><button class="consultation-btn">ĐĂNG KÝ TƯ VẤN</button></a>
                </div>`

    // load DOM in element  app
    renderApp.start(1, htmlBody, 1);
    // use Library
    cart.start();
    handleAnimation();
    chatCustomerCare.start();
}
index();
