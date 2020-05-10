import {AccentTypographyBuild} from '../methods/AccentTypographyBuild.js';

// intro__title
// intro__label

export default () => {
  const animationIntroTitleText = new AccentTypographyBuild(`.intro__title`, 500, `active`, `transform`);
  setTimeout(()=>{
    animationIntroTitleText.runAnimation();
  }, 500);

  const animationIntroLabelText = new AccentTypographyBuild(`.intro__label`, 500, `active`, `transform`);
  setTimeout(()=>{
    animationIntroLabelText.runAnimation();
  }, 500);
};
