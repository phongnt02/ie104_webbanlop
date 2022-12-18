function handleAnimation() {
    //  handle slider
    $(document).ready(function () {
        $('.product-list').slick({
            infinite: true,
            slidesToShow: 4,
            slidesToScroll: 3,
            draggable: true,
            prevArrow: '<div class="slick-prev slick-arrow"><i class="fa fa-angle-left" aria-hidden="true"></i></div>',
            nextArrow: '<div class="slick-next slick-arrow"><i class="fa fa-angle-right" aria-hidden="true"></i></div>'
        });
        $('.product-list-intro').slick({
            infinite: true,
            dots: true,
            autoplay: true,
            autoplaySpeed: 1500,
            arrows: false,
            customPaging: function (slider, i) {
                return '<div class="slick-dots-custom"><div>';
            },
        });
    });

    // scrollY document
    var countdown = false;
    document.onscroll = function () {
        const introduce = document.querySelector('.content-list')
        const contentLeft = document.querySelector('.content-list__introduce-img')
        const contentRight = document.querySelector('.content-list__item')
        // handle animate introduce
        if (window.scrollY >= (introduce.offsetTop - 300)) {
            contentLeft.classList.add('leftToCenter')
            contentRight.classList.add('rightToCenter')
        }

        // handle count number 
        const commit = document.querySelector('.commit')
        const valuenumbers = document.querySelectorAll('.commit-information__number')
        if (window.scrollY >= (commit.offsetTop - 200) && countdown === false) {
            valuenumbers.forEach(valuenumber => {
                countUp(valuenumber)
            })
            countdown = true;
        }
        let chatElement = document.querySelector('.chatElement')
        if (window.scrollY >= 200) {
            chatElement.classList.add('active')
        }
        else {
            chatElement.classList.remove('active')
        }
        function countUp(element) {
            var count = 0;
            var time = 144;
            var to = element.innerText
            var step = to / time;
            var countElement = setInterval(() => {
                count += step;
                if (count > to) {
                    element.innerText = to;
                    clearInterval(countElement)
                }
                else {
                    element.innerText = Math.round(count);
                }
            }, 10);
        }
    }
}
export default handleAnimation
