const burger = document.querySelector('.btn-burger');
const mobileContainer = document.querySelector('.mobile-container')

function toggleMobileContainer() {
    mobileContainer.classList.toggle('show')
    burger.classList.toggle('active')
}

burger.addEventListener('click', toggleMobileContainer)

const label = document.querySelectorAll('.label')
const btn = document.querySelectorAll('.btn')


const swiper = new Swiper('.swiper-product', {
    slidesPerView: 4,
    loop: true,
    speed: 500,
    spaceBetween: 48,

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});