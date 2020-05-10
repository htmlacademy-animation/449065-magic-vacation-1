// export default () => {
//   let jsControlNext = document.querySelector(`.js-control-next`);
//   let jsControlPrev = document.querySelector(`.js-control-prev`);
//   let screenStory = document.querySelector(`.screen--story`);
//   let sliderItemText = screenStory.querySelectorAll(`.slider__item-text`);

//   let toggleSliderItemAnimation = function () {
//     sliderItemText.forEach((item) => {
//       item.classList.remove(`slider__item-text--animation`);
//     });
//     let swiperSlideActive = screenStory.querySelector(`.swiper-slide-active`);
//     let swiperSlideNext = screenStory.querySelector(`.swiper-slide-next`);

//     let itemTextActive = swiperSlideActive.querySelector(`.slider__item-text`);
//     let itemTextNext = swiperSlideNext.querySelector(`.slider__item-text`);
//     itemTextActive.classList.add(`slider__item-text--animation`);
//     itemTextNext.classList.add(`slider__item-text--animation`);
//   };

//   jsControlNext.addEventListener(`click`, toggleSliderItemAnimation);
//   jsControlPrev.addEventListener(`click`, toggleSliderItemAnimation);
// };
