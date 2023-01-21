
//   document.addEventListener('DOMContentLoaded', () => {
//     document.querySelectorAll('.itc-slider').forEach((el) => {
//       ItcSlider.getOrCreateInstance(el, {
//         loop: true,
//         swipe: true,
//       });
//     });
//   });
import Swiper from 'swiper'

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';



const swiper = new Swiper(".swiper", {
    slidesPerView: 4,
    centeredSlides: true,
    spaceBetween: 30,
    grabCursor: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });