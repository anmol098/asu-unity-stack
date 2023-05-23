import { googleAnalytics } from "@asu/unity-bootstrap-theme/js/data-layer.js";

export const initTabs = function () {
  "use strict";
  const DOM_ELEMENT_A = "a";
  const DOM_ELEMENT_BUTTON = "button";
  const DOM_ELEMENT_NAV_TABS = ".nav-tabs";
  const DOM_ELEMENT_NAV_ITEM = ".nav-item";
  const DOM_ELEMENT_UDS_TABBED_PANELS = ".uds-tabbed-panels";
  const DOM_ELEMENT_SCROLL_CONTROL_PREV = ".scroll-control-prev";
  const DOM_ELEMENT_SCROLL_CONTROL_NEXT = ".scroll-control-next";
  const EVENT_LOAD = "load";
  const EVENT_CLICK = "click";
  const EVENT_SCROLL = "scroll";
  const CSS_DISPLAY_NONE = "none";
  const CSS_DISPLAY_BLOCK = "block";
  const magicalNumberThree = 3;
  const LG_BREAKPOINT = 992;

  // helpers functions
  const setButtonsCompatibility = e => {
    const targets = [DOM_ELEMENT_A, DOM_ELEMENT_BUTTON];
    if (targets.includes(e.target.localName)) {
      e.target.focus();
    }
  };

  const slideNav = (clicked, e, direction) => {
    e.preventDefault();
    const parentNav = Array.from(clicked.parentElement.children).filter(child =>
      child.classList.contains("nav-tabs")
    );

    let scrollPosition = parseInt(parentNav[0].dataset.scrollPosition, 10);

    const navItems = Array.from(
      parentNav[0].querySelectorAll(DOM_ELEMENT_NAV_ITEM)
    );

    // get left value to interact with scroll
    const rawLeftValue = getComputedStyle(parentNav[0]).left;
    const sanitizedLeftValue = rawLeftValue.replace("px", "");
    let scrollOffset = parseInt(sanitizedLeftValue, 10);

    if (direction === 1 && scrollPosition > 0) {
      scrollPosition -= 1;
    }
    if (scrollPosition < navItems.length - 1 && direction == -1) {
      scrollPosition += 1;
    }
    parentNav[0].dataset.scrollPosition = scrollPosition;

    scrollOffset = 0;
    for (var i = 0; i < scrollPosition; i++) {
      scrollOffset +=
        navItems[i].offsetWidth +
        parseInt(getComputedStyle(navItems[i]).marginLeft, 10) +
        parseInt(getComputedStyle(navItems[i]).marginRight, 10);
    }

    // set the position of the scroll of the .nav-tabs element
    parentNav[0].scrollLeft = scrollOffset;
    setControlVisibility(clicked, scrollOffset);
  };

  const setControlVisibility = (clicked, scrollOffset) => {
    // seleccionamos el ancestro mas cercano que tenga la clase .uds-tabbed-panels
    const parentContainer = clicked.closest(DOM_ELEMENT_UDS_TABBED_PANELS);
    // seleccionamos los elementos padres hermanos del elemento clickeado
    const parentNav = parentContainer.querySelector(DOM_ELEMENT_NAV_TABS);

    // obtenemos el valor del atributo data-scroll-position y nos asguaramos que sea un número entero
    const scrollPosition = parseInt(parentNav.dataset.scrollPosition, 10);
    const tabPosition = parentNav.scrollWidth - scrollOffset;

    // ocultamos o mostramos los botones de scroll en función de la posición del scroll
    if (scrollPosition == 0) {
      parentContainer.querySelector(
        DOM_ELEMENT_SCROLL_CONTROL_PREV
      ).style.display = CSS_DISPLAY_NONE;
    } else {
      parentContainer.querySelector(
        DOM_ELEMENT_SCROLL_CONTROL_PREV
      ).style.display = CSS_DISPLAY_BLOCK;
    }
    if (tabPosition <= parentContainer.offsetWidth) {
      parentContainer.querySelector(
        DOM_ELEMENT_SCROLL_CONTROL_NEXT
      ).style.display = CSS_DISPLAY_NONE;
    } else {
      parentContainer.querySelector(
        DOM_ELEMENT_SCROLL_CONTROL_NEXT
      ).style.display = CSS_DISPLAY_BLOCK;
    }
  };

  // wait to load the page and all resources before initializing
  window.addEventListener(EVENT_LOAD, () => {
    // wait to DOM content is loaded before run these scripts
    document.addEventListener(EVENT_CLICK, function (e) {
      setButtonsCompatibility(e);
    });

    document.querySelectorAll(DOM_ELEMENT_UDS_TABBED_PANELS).forEach(item => {
      const nav = item.querySelector(DOM_ELEMENT_NAV_TABS);
      nav.addEventListener(EVENT_SCROLL, event => {
        const scrollPos = event.target.scrollLeft;
        const prevButton = item.querySelector(DOM_ELEMENT_SCROLL_CONTROL_PREV);
        const nextButton = item.querySelector(DOM_ELEMENT_SCROLL_CONTROL_NEXT);
        const atFarRight =
          nav.offsetWidth + scrollPos + magicalNumberThree >= nav.scrollWidth;
        prevButton.style.display =
          scrollPos === 0 ? CSS_DISPLAY_NONE : CSS_DISPLAY_BLOCK;
        nextButton.style.display = atFarRight
          ? CSS_DISPLAY_NONE
          : CSS_DISPLAY_BLOCK;
      });
    });

    document
      .querySelector(DOM_ELEMENT_SCROLL_CONTROL_NEXT)
      .addEventListener(EVENT_CLICK, function (e) {
        if (window.innerWidth > LG_BREAKPOINT) {
          slideNav(this, e, -1);
        }
      });

    document
      .querySelector(DOM_ELEMENT_SCROLL_CONTROL_PREV)
      .addEventListener(EVENT_CLICK, function (e) {
        if (window.innerWidth > LG_BREAKPOINT) {
          slideNav(this, e, 1);
        }
      });

    document.querySelector(
      `${DOM_ELEMENT_UDS_TABBED_PANELS} ${DOM_ELEMENT_SCROLL_CONTROL_PREV}`
    ).style.display = CSS_DISPLAY_NONE;

    const navTabWidth =
      document.querySelector(DOM_ELEMENT_NAV_TABS).scrollWidth;
    const udsTabbedPanelsWidth = document.querySelector(
      DOM_ELEMENT_UDS_TABBED_PANELS
    ).offsetWidth;
    if (navTabWidth <= udsTabbedPanelsWidth) {
      document.querySelector(
        `${DOM_ELEMENT_UDS_TABBED_PANELS} ${DOM_ELEMENT_SCROLL_CONTROL_NEXT}`
      ).style.display = CSS_DISPLAY_NONE;
    }

    // Init goolge analytics
    googleAnalytics();
  });
};
