import Swiper, { Pagination, Autoplay } from "swiper";

export const swiperFunc = () => {
  const swiper = new Swiper(".companies-wrapper", {
    modules: [Pagination, Autoplay],
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      576: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      991: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
    },
  });
};
