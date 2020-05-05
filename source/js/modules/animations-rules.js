export default () => {
  let rulesItemList = document.querySelectorAll(`.rules__item`);
  let rulesLinkAnimate = document.querySelector(`.rules__link`);
  let rulesLinkText = document.querySelector(`.rules__link-text`);
  let rulesLastItem = rulesItemList[rulesItemList.length - 1];

  let showMessage = function () {
    rulesLinkAnimate.classList.add(`rules__link--animate`);
    rulesLinkText.classList.add(`rules__link-text--animate`);
  };

  rulesLastItem.addEventListener(`animationend`, showMessage);
};
