import onReady from "./modules/onReady.js";
import smoothScroll from "./modules/smoothScroll.js";
import animate from "./modules/animation.js";
import switchLanguage from "./modules/language-switcher.js";
import initThemeSwitcher from './modules/theme-switcher.js';

onReady(() => {
  smoothScroll();
  switchLanguage();
  initThemeSwitcher();

  if (typeof scrollama !== "undefined" && document.getElementsByClassName("step")?.length) {
    const scroller = scrollama();

    scroller
      .setup({
        step: ".step",
      })
      .onStepEnter(function (response) {
        /* response = { direction, element, index }, */
        // console.log( 'onStepEnter', response );
        // console.log( 'onStepEnter', response.index, response.direction );
        animate(response.index + 1);

        // animationEl.innerHTML = `Animation step ${ response.index + 1 }!`;

        // if ( response.index === 0 ){
        //     description.innerHTML = '';
        // }
      })
      .onStepExit(function (response) {
        /* response = { direction, element, index }, */
        // console.log( 'onStepExit', response );
        // console.log( 'onStepExit', response.index, response.direction );
      });

    window.addEventListener("resize", scroller.resize);
  }
});
