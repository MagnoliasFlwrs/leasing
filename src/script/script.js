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
const promoBtns = document.querySelectorAll('.promo-card__action-btn')
const promoModal = document.querySelector('.modal__form')
const closeModal = document.querySelector('.modal__form-close')

// slider
slides.forEach((slide) => {
  slide.addEventListener('mouseenter' ,() => {
    sliderBtnNext.style.visibility = 'visible'
    sliderBtnPrev.style.visibility = 'visible'
  })
})


newsSlider.addEventListener('mouseenter' , ()=> {
    if (sliderBtnNext.classList.contains('.swiper-button-disabled')) {
      sliderBtnPrev.style.visibility = 'visible'
    } else if (sliderBtnPrev.classList.contains('.swiper-button-disabled')) {
      sliderBtnNext.style.visibility = 'visible'
    } else {
      sliderBtnNext.style.visibility = 'visible'
      sliderBtnPrev.style.visibility = 'visible'
    }
})
newsSlider.addEventListener('mouseleave' , ()=> {
  sliderBtnNext.style.visibility = 'hidden'
  sliderBtnPrev.style.visibility = 'hidden'
})
// scroll

let scrollpos = window.scrollY

const header = document.querySelector("header")
const scrollChange = 10

const add_class_on_scroll = () => header.classList.add("_onscroll")
const remove_class_on_scroll = () => header.classList.remove("_onscroll")

window.addEventListener('scroll', function() {
  scrollpos = window.scrollY;

  if (scrollpos >= scrollChange) { add_class_on_scroll() }
  else { remove_class_on_scroll() }

})
//
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
function clearClasses(e) {
  if (e.target.classList.contains('mobile__back__link')) {
      e.preventDefault();
  e.target.closest('.burger__submenu').classList.remove('__transform');
  e.target.closest('.burger__wrap').querySelector('.burger__links').classList.remove('__transform');
  }
}
burgerWrap.addEventListener('click', (e) => {
if (e.target.classList.contains('burger__link__dropdown')) {
  e.preventDefault();
  e.target.closest('.burger__links').classList.add('__transform');
  e.target.closest('.burger__link__item').querySelector('.burger__submenu').classList.add('__transform');
}
  clearClasses(e)
});
linksToSecond.forEach((link) => {
  link.addEventListener('click' ,(e) => {
      clearClasses(e)
      e.target.closest('.burger__submenu__item').querySelector('.second__menu').classList.add('__transformation');
      linksToSecond.forEach((link) => {
          link.classList.remove('dropright')
      })
  })
})
secondMobileBack.forEach((link) => {
  link.addEventListener('click', (e) => {
      e.target.closest('.burger__submenu__item').querySelector('.second__menu').classList.remove('__transformation');
      e.target.closest('.burger__link__item').querySelector('.burger__submenu').classList.add('__transform');
      linksToSecond.forEach((link) => {
          link.classList.add('dropright')
      })
  })
})
// promo modal

promoBtns.forEach((btn) => {
  btn.addEventListener('click' , () => {
    overlay.classList.add('open')
    promoModal.classList.add('opn')
  })
})
const modalClose = () => {
  closeModal.addEventListener('click' , () => {
    promoModal.classList.remove('opn')
    overlay.classList.remove('open')
  })
  overlay.addEventListener('click' , () => {
    promoModal.classList.remove('opn')
    overlay.classList.remove('open')
  })
}
modalClose()