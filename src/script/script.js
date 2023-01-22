const slides = document.querySelectorAll('.swiper-slide')
const sliderBtnPrev = document.querySelector('.slider_arrow--prev')
const sliderBtnNext = document.querySelector('.slider_arrow--next')
const burgerMenu = document.querySelector('.burger');
const burgerWrap = document.querySelector('.burger__wrap');
const newsSlider = document.querySelector('.news__swiper')
const scroll = document.querySelector('.scroll__to__top');
const linksToSecond = document.querySelectorAll('.link__to__second')
const secondMobileBack = document.querySelectorAll('.mobile__back__link__second')
const linkWraps = document.querySelectorAll('.link__wrapper')
const overlay = document.querySelector('.overlay');
const burgerLinks = document.querySelectorAll('.burger__navigation__item')

slides.forEach((slide) => {
  slide.addEventListener('mouseenter' ,() => {
    sliderBtnNext.style.visibility = 'visible'
    sliderBtnPrev.style.visibility = 'visible'  // sliderBtnPrev.addEventListener()
  })
})
newsSlider.addEventListener('mouseenter' , ()=> {
    sliderBtnNext.style.visibility = 'visible'
    sliderBtnPrev.style.visibility = 'visible'
})
newsSlider.addEventListener('mouseleave' , ()=> {
  sliderBtnNext.style.visibility = 'hidden'
  sliderBtnPrev.style.visibility = 'hidden'
})

const scrollChange = 10

const add_class_on_scroll = () => header.classList.add("_onscroll")
const remove_class_on_scroll = () => header.classList.remove("_onscroll")

window.addEventListener('scroll', function() {
  scrollpos = window.scrollY;

  if (scrollpos >= scrollChange) { add_class_on_scroll() }
  else { remove_class_on_scroll() }

})

overlay.addEventListener('click', () => {
    overlay.classList.remove('open');
});
if (burgerMenu) {
    burgerMenu.addEventListener('click' , (e) => {
    document.body.classList.toggle('_lock');
    burgerMenu.classList.toggle('_active');
    burgerWrap.classList.toggle('_active');
    overlay.classList.toggle('open');
        overlay.addEventListener('click', () => {
            burgerMenu.classList.remove('_active');
            burgerWrap.classList.remove('_active');
            overlay.classList.remove('open');
        });
    })
}

burgerLinks.forEach((link) => {
    link.addEventListener('click' , () => {
        burgerMenu.classList.remove('_active');
        burgerWrap.classList.remove('_active');
        overlay.classList.remove('open');
        document.body.classList.remove('_lock');
    })
})