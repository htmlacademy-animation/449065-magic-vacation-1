export default () => {
  document.body.onload = function () {
    let logo = document.querySelector(`.page-header__logo`);
    let navigation = document.querySelector(`.page-header__nav`);
    let footer = document.querySelector(`.screen__footer`);

    logo.classList.add(`page-header__logo--load`);
    navigation.classList.add(`page-header__nav--load`);
    footer.classList.add(`screen__footer--load`);
  };
};
