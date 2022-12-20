export const renderApp = {
    app : document.querySelector('.app'),
    renderHeader : function (isBarner) {
        let htmlHeader = `
        <div class="nav">
            <nav id="nav-left" class="header_container">
                <a href="" class="header_container_logo">
                    <img src="http://www.phongnt20521745.tk/API/Img/logo.png" alt="ChengShinTires">
                </a>
                <ul class="main-menu">
                    <li><a href="./index.html">TRANG CHỦ</a></li>
                    <li><a href="./About.html">GIỚI THIỆU</a></li>
                    <li><a href="">SẢN PHẨM</a>
                        <ul class="sub-menu">
                            <li><a href="./tiressearch.html">Lốp Xe</a></li>
                            <li><a href="./wheelsearch.html">Mâm Xe</a></li>
                        </ul>
                    </li>
                    <li><a href="./baohanh.html">BẢO HÀNH</a></li>
                    <li><a href="./print__contact.html">LIÊN HỆ</a></li>
                </ul>
            </nav>
            <nav id="nav-right">
                <div class="search nav-right__item">
                    <i class="fa-solid fa-magnifying-glass"></i>
                    <input class="search__input" type="text" placeholder="Search"/>
                </div>
                <a href="./wishlist.html" class="favourite nav-right__item">
                    <i class="fa-regular fa-heart"></i>
                </a>
                <div class="cart nav-right__item">
                    <i class="fa-solid fa-cart-shopping"></i>
                    <span class="cart__amount">0</span>
                </div>
            </nav>
        </div>`
        if(isBarner) {
            // render Barner
            htmlHeader+=`<div class="header_background">
            <p class="header_background--content" data-animation="fadeInUp">We're CST.</p>
            <p class="header_background--content" data-animation="fadeInUp">We make tires.</p>
            <p class="header_background--content" data-animation="fadeInUp">So you can make tracks.</p>
        </div>`
        }
        let header = document.createElement('header')
        header.innerHTML = htmlHeader;
        this.app.appendChild(header)
    },
    renderBody : function (htmlBody) {
        let section = document.createElement('section')
        section.innerHTML = htmlBody;
        this.app.appendChild(section)
    },
    renderFooter : function (isInfor) {
        let htmlFooter = ``
        if(isInfor){
            htmlFooter += `<div>
                <hr width="max" color="#f47920" size="4px">
                <h1 class="footer__logo">
                    <b><span class="footer__logo--color">CST</span></b>
                </h1>
                <p class="footer__intro"><b>CST - NHÀ PHÂN PHỐI LỐP VÀ ẮC QUY Ô TÔ CHÍNH HÃNG SỐ #1 VIỆT NAM</b></p>
            </div>
            <div class="content__block">
                <div class="footer__content" id="footer__content--left" align="center">
                    CST là chuỗi cửa hàng chuyên phân phối các sản phẩm lốp, ắc quy, đồ chơi, nội thất ô tô. Các sản phẩm tại
                    CST đều 100% chính hãng, bảo hành đầy đủ. Bên cạnh đó, CST còn cung cấp các dịch vụ liên quan như rửa
                    xe thay dầu, cứu hộ ắc quy, căn chỉnh lốp, cân bằng động,... Với phương châm “Uy tín, chất lượng và giá tốt
                    nhất cho người tiêu dùng”, CST vinh hạnh trở thành người bạn tin cậy luôn đồng hành chăm sóc cho xế yêu.
                    </p>
                </div>
        
                <div class="footer__content" id="footer__content--right">
                    <p>Hotline: 0848911111-Email: lienhe@CST.vn<br><br>
                        Địa chỉ: D29 Phạm Văn Bạch, Q. Cầu Giấy, Hà Nội<br><br>
                        Văn phòng trụ sở: 91 Trung Kính, P. Trung Hoà, Q. Cầu Giấy, Hà Nội<br><br>
                </div>
            </div>
            <div class="footer__more">
                <table align="center" id="footer__offer--table-all">
                    <tr class="footer__offer--table">
                        <td class="footer__offer--table--td">
                            <ul class="footer__offer--ul">
                                <li>
                                    <span class="footer__offer--head"><b>MÂM Ô TÔ</b></span>
                                </li>
                                <li>
                                    Mâm Black Rhyno
                                </li>
                                <li>
                                    Mâm Fuel
                                </li>
                                <li>
                                    Mâm Niche
                                </li>
                            </ul>
                        </td>
                        <td class="footer__offer--table--td">
                            <ul class="footer__offer--ul">
                                <li class="footer__offer--head">
                                    <b>LỐP Ô TÔ</b>
                                </li>
                                <li>
                                    Lốp Michelin
                                </li>
                                <li>
                                    Lốp Bridgestone
                                </li>
                                <li>
                                    Lốp Kumho
                                </li>
                                <li>
                                    Lốp Continantal
                                </li>

                            </ul>
                        </td>
                        <td class="footer__offer--table--td">
                            <ul class="footer__offer--ul">
                                <li class="footer__offer--head">
                                    <b>CHÍNH SÁCH</b>
                                </li>
                                <li>
                                    Chính sách chung
                                </li>
                                <li>
                                    Chính sách bảo hành
                                </li>
                                <li>
                                    Chính sách vận chuyển
                                </li>
                                <li>
                                    Chính sách đổi trả
                                </li>
                                <li>
                                    Chính sách thanh toán
                                </li>
                            </ul>
                        </td>
                        <td class="footer__offer--table--td">
                            <b class="footer__offer--head">KẾT NỐI VỚI CHÚNG TÔI</b>
                            <div class="footer__link--padding">
                                <a><i class="fa-brands fa-facebook fa-2xl footer__link--icon"></i></a>
                                <a><i class="fa-brands fa-google fa-2xl footer__link--icon"></i></a>
                                <a><i class="fa-brands fa-youtube fa-2xl footer__link--icon"></i></a>
                                <a><i class="fa-brands fa-instagram fa-2xl footer__link--icon"></i></a>
                            </div>
                            <p>
                                <b class="footer__offer--head">TRỞ THÀNH ĐỐI TÁC KHÁCH HÀNG<br></b>
                            </p>
                            <div class="container-1" class="container-1--loca">
                                <input type="search" id="search" placeholder="Nhập email của bạn..." />&nbsp;
                                <input type="submit" value="Đăng kí" class="foooter__end--Dk">
                            </div>
                        </td>
                </table>
            </div>`
        }
        htmlFooter+=`
        <div class="footer__end">
            Copyright © 2022. Bản quyền thuộc về PTV
        </div>`
        let footer = document.createElement('footer')
        footer.innerHTML = htmlFooter;
        this.app.appendChild(footer)
    },
    renderModal : function () {
        let modal = document.createElement('div')
        modal.classList.add('modal')
        this.app.appendChild(modal)
    },
    start : function (isBarner,htmlBody,isInfor) {
        this.renderHeader(isBarner);
        this.renderBody(htmlBody);
        this.renderFooter(isInfor);
        this.renderModal();
    }
}
// renderApp.start(1,htmlBody,1);
// first parameter : true or false => show/hide slider
// second parameter : template string => htmlBody
// third parameter : true or false => show/hide information footer

