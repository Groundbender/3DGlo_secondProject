/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_timer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/timer */ \"./modules/timer.js\");\n/* harmony import */ var _modules_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/menu */ \"./modules/menu.js\");\n/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/modal */ \"./modules/modal.js\");\n/* harmony import */ var _modules_anchors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/anchors */ \"./modules/anchors.js\");\n/* harmony import */ var _modules_validation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/validation */ \"./modules/validation.js\");\n/* harmony import */ var _modules_tabs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/tabs */ \"./modules/tabs.js\");\n/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/slider */ \"./modules/slider.js\");\n/* harmony import */ var _modules_calc__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/calc */ \"./modules/calc.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n(0,_modules_timer__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"3 marth 2023\");\r\n(0,_modules_menu__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n(0,_modules_modal__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n(0,_modules_anchors__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\r\n(0,_modules_validation__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\r\n(0,_modules_tabs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\r\n\r\n(0,_modules_slider__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(\r\n  \"portfolio-content\",\r\n  \"portfolio-item\",\r\n  \"portfolio-item-active\",\r\n  \"dot\",\r\n  \"dot-active\",\r\n  \"portfolio-btn\"\r\n);\r\n\r\n(0,_modules_calc__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(100);\r\n\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./modules/anchors.js":
/*!****************************!*\
  !*** ./modules/anchors.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst anchorsAnimate = () => {\r\n  const menu = document.querySelector(\"menu\");\r\n  let menuItems = menu.querySelectorAll('ul>li>a[href*=\"#\"]');\r\n  const skipBtn = document.querySelector(\"a[href='#service-block']\");\r\n  // console.log(skipBtn);\r\n  menuItems.forEach((link) => {\r\n    link.addEventListener(\"click\", (e) => {\r\n      e.preventDefault();\r\n      let blockID = link.getAttribute(\"href\");\r\n      // console.log(blockID);\r\n      document.querySelector(\"\" + blockID).scrollIntoView({\r\n        block: \"start\",\r\n        behavior: \"smooth\",\r\n      });\r\n    });\r\n  });\r\n  skipBtn.addEventListener(\"click\", (e) => {\r\n    e.preventDefault();\r\n    document.getElementById(\"service-block\").scrollIntoView({\r\n      block: \"start\",\r\n      behavior: \"smooth\",\r\n    });\r\n  });\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (anchorsAnimate);\r\n\n\n//# sourceURL=webpack:///./modules/anchors.js?");

/***/ }),

/***/ "./modules/calc.js":
/*!*************************!*\
  !*** ./modules/calc.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst calc = (price = 100) => {\r\n  const calcBlock = document.querySelector(\".calc-block\");\r\n  const calcType = document.querySelector(\".calc-type\");\r\n  const calcSquare = document.querySelector(\".calc-square\");\r\n  const calcCount = document.querySelector(\".calc-count\");\r\n  const calcDay = document.querySelector(\".calc-day\");\r\n  const total = document.querySelector(\"#total\");\r\n\r\n  const time = 100;\r\n  const render = (number) => {\r\n    const step = Number(String(number).slice(0, -2));\r\n\r\n    let num = 0;\r\n    let frequency = Math.round(time / (num / step));\r\n    let interval = setInterval(() => {\r\n      if (calcType.value && calcSquare.value) {\r\n        num += step;\r\n        total.textContent = num;\r\n        if (num === number) {\r\n          clearInterval(interval);\r\n        }\r\n      }\r\n    }, frequency);\r\n  };\r\n  const countCalc = () => {\r\n    const calcTypeValue = +calcType.options[calcType.selectedIndex].value;\r\n    const calcSquareValue = calcSquare.value;\r\n\r\n    let totalValue = 0;\r\n    let calcCountValue = 1;\r\n    let calcDayValue = 1;\r\n\r\n    if (calcCount.value > 1) {\r\n      calcCountValue += calcCount.value / 10;\r\n    }\r\n    if (calcDay.value && calcDay.value < 5) {\r\n      calcDayValue = 2;\r\n    } else if (calcDay.value && calcDay.value < 10) {\r\n      calcDayValue = 1.5;\r\n    }\r\n    if (calcType.value && calcSquare.value) {\r\n      totalValue =\r\n        price * calcTypeValue * calcSquareValue * calcCountValue * calcDayValue;\r\n      total.textContent = render(totalValue);\r\n    } else {\r\n      totalValue = 0;\r\n    }\r\n\r\n    total.textContent = totalValue;\r\n    // console.log(totalValue);\r\n  };\r\n  calcBlock.addEventListener(\"input\", (e) => {\r\n    if (\r\n      e.target === calcType ||\r\n      e.target === calcSquare ||\r\n      e.target === calcCount ||\r\n      e.target === calcDay\r\n    ) {\r\n      countCalc();\r\n    }\r\n  });\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (calc);\r\n\n\n//# sourceURL=webpack:///./modules/calc.js?");

/***/ }),

/***/ "./modules/menu.js":
/*!*************************!*\
  !*** ./modules/menu.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst menu = () => {\r\n  const menuBtn = document.querySelector(\".menu\");\r\n  const menu = document.querySelector(\"menu\");\r\n  const closeBtn = menu.querySelector(\".close-btn\");\r\n  const menuItems = menu.querySelectorAll(\"ul>li>a\");\r\n\r\n  const handleMenu = () => {\r\n    // if (!menu.style.transform) {\r\n    //   menu.style.transform = \"translateX(0)\";\r\n    // } else {\r\n    //   menu.style.transform = \"\";\r\n    // }\r\n    menu.classList.toggle(\"active-menu\");\r\n  };\r\n\r\n  document.addEventListener(\"click\", (e) => {\r\n    if (e.target.closest(\".menu\")) {\r\n      handleMenu();\r\n    } else if (\r\n      !e.target.closest(\"menu\") ||\r\n      e.target.classList.contains(\"close-btn\")\r\n    ) {\r\n      menu.classList.remove(\"active-menu\");\r\n    } else if (e.target.matches(\"ul>li>a\") && e.target.closest(\"menu\")) {\r\n      handleMenu();\r\n    }\r\n  });\r\n\r\n  // menu.addEventListener(\"click\", (e) => {});\r\n  // closeBtn.addEventListener(\"click\", handleMenu);\r\n\r\n  // menuItems.forEach((menuItem) =>\r\n  //   menuItem.addEventListener(\"click\", handleMenu)\r\n  // );\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menu);\r\n\n\n//# sourceURL=webpack:///./modules/menu.js?");

/***/ }),

/***/ "./modules/modal.js":
/*!**************************!*\
  !*** ./modules/modal.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst modal = () => {\r\n  const modal = document.querySelector(\".popup\");\r\n  const buttons = document.querySelectorAll(\".popup-btn\");\r\n\r\n  const modalDialog = document.querySelector(\".popup-content\");\r\n\r\n  let start = -500;\r\n  let finish = 0;\r\n  let position = -500;\r\n  let count = 5;\r\n  let idPopup;\r\n\r\n  const showAnimation = () => {\r\n    if (start < finish) {\r\n      position += count;\r\n    } else if (start > finish) {\r\n      position -= count;\r\n    }\r\n    modalDialog.style.transform = `translateY(${position}px) translateX(-50px)`;\r\n    let condition;\r\n    if (start > finish) {\r\n      condition = position > finish;\r\n    } else {\r\n      condition = position < finish;\r\n    }\r\n    if (condition) {\r\n      idPopup = requestAnimationFrame(showAnimation);\r\n    }\r\n  };\r\n  buttons.forEach((btn) => {\r\n    btn.addEventListener(\"click\", () => {\r\n      modal.style.display = \"block\";\r\n      document.body.style.overflow = \"hidden\";\r\n      if (screen.width > 768) {\r\n        position = start;\r\n        idPopup = requestAnimationFrame(showAnimation);\r\n      }\r\n    });\r\n  });\r\n  // closeBtn.addEventListener(\"click\", () => {\r\n  //   modal.style.display = \"none\";\r\n  // });\r\n  modal.addEventListener(\"click\", (e) => {\r\n    if (\r\n      !e.target.closest(\".popup-content\") ||\r\n      e.target.classList.contains(\"popup-close\")\r\n    ) {\r\n      modal.style.display = \"none\";\r\n      document.body.style.overflow = \"\";\r\n    }\r\n  });\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modal);\r\n\n\n//# sourceURL=webpack:///./modules/modal.js?");

/***/ }),

/***/ "./modules/slider.js":
/*!***************************!*\
  !*** ./modules/slider.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst slider = (\r\n  blockSlider,\r\n  slide,\r\n  activeSLide = \"slide-active\",\r\n  dotCLass,\r\n  activeDot = \"dot-active\",\r\n  buttonClass\r\n) => {\r\n  const sliderBlock = document.querySelector(`.${blockSlider}`);\r\n\r\n  if (!sliderBlock) {\r\n    return;\r\n  }\r\n\r\n  const slides = document.querySelectorAll(`.${slide}`);\r\n\r\n  if (slides.length === 0) {\r\n    return;\r\n  }\r\n\r\n  const timeInterval = 2000;\r\n  let currentSlide = 0;\r\n  let interval;\r\n\r\n  const ul = document.createElement(\"ul\");\r\n  ul.classList.add(\"portfolio-dots\");\r\n\r\n  slides.forEach((slide, index) => {\r\n    let li;\r\n    if (index < slides.length) {\r\n      li = document.createElement(\"li\");\r\n    }\r\n    li.classList.add(\"dot\");\r\n    if (index === 0) {\r\n      li.classList.add(\"dot-active\");\r\n    }\r\n    ul.append(li);\r\n  });\r\n  sliderBlock.append(ul);\r\n\r\n  const dots = document.querySelectorAll(`.${dotCLass}`);\r\n\r\n  const prevSlide = (elems, index, strClass) => {\r\n    elems[index].classList.remove(strClass);\r\n  };\r\n\r\n  const nextSlide = (elems, index, strClass) =>\r\n    elems[index].classList.add(strClass);\r\n  {\r\n  }\r\n\r\n  const autoSlide = () => {\r\n    prevSlide(slides, currentSlide, activeSLide);\r\n    prevSlide(dots, currentSlide, activeDot);\r\n    currentSlide++;\r\n\r\n    if (currentSlide >= slides.length) {\r\n      currentSlide = 0;\r\n    }\r\n    nextSlide(slides, currentSlide, activeSLide);\r\n    nextSlide(dots, currentSlide, activeDot);\r\n  };\r\n\r\n  const startSlide = (timer = 1500) => {\r\n    interval = setInterval(autoSlide, timer);\r\n  };\r\n\r\n  const stopSlide = () => {\r\n    clearInterval(interval);\r\n  };\r\n\r\n  sliderBlock.addEventListener(\"click\", (e) => {\r\n    e.preventDefault();\r\n\r\n    if (!e.target.matches(`.${dotCLass}, .${buttonClass}`)) {\r\n      return;\r\n    }\r\n    prevSlide(slides, currentSlide, activeSLide);\r\n    prevSlide(dots, currentSlide, activeDot);\r\n    if (e.target.matches(\"#arrow-right\")) {\r\n      currentSlide++;\r\n    } else if (e.target.matches(\"#arrow-left\")) {\r\n      currentSlide--;\r\n    } else if (e.target.classList.contains(dotCLass)) {\r\n      dots.forEach((dot, index) => {\r\n        if (e.target === dot) {\r\n          currentSlide = index;\r\n        }\r\n      });\r\n    }\r\n    if (currentSlide >= slides.length) {\r\n      currentSlide = 0;\r\n    }\r\n\r\n    if (currentSlide < 0) {\r\n      currentSlide = slides.length - 1;\r\n    }\r\n    nextSlide(slides, currentSlide, activeSLide);\r\n    nextSlide(dots, currentSlide, activeDot);\r\n  });\r\n\r\n  sliderBlock.addEventListener(\r\n    \"mouseenter\",\r\n    (e) => {\r\n      if (e.target.matches(`.${dotCLass}, .${buttonClass}`)) {\r\n        stopSlide();\r\n      }\r\n    },\r\n    true\r\n  );\r\n  sliderBlock.addEventListener(\r\n    \"mouseleave\",\r\n    (e) => {\r\n      if (e.target.matches(`.${dotCLass}, .${buttonClass}`)) {\r\n        startSlide(timeInterval);\r\n      }\r\n    },\r\n    true\r\n  );\r\n\r\n  startSlide(timeInterval);\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (slider);\r\n\n\n//# sourceURL=webpack:///./modules/slider.js?");

/***/ }),

/***/ "./modules/tabs.js":
/*!*************************!*\
  !*** ./modules/tabs.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst tabs = () => {\r\n  const tabPanel = document.querySelector(\".service-header\");\r\n  const tabs = document.querySelectorAll(\".service-header-tab\");\r\n  const tabContent = document.querySelectorAll(\".service-tab\");\r\n\r\n  tabPanel.addEventListener(\"click\", (e) => {\r\n    // console.log(e.target.closest(\".service-header-tab\"));\r\n    if (e.target.closest(\".service-header-tab\")) {\r\n      const tabBtn = e.target.closest(\".service-header-tab\");\r\n      tabs.forEach((tab, index) => {\r\n        if (tab === tabBtn) {\r\n          tab.classList.add(\"active\");\r\n          tabContent[index].classList.remove(\"d-none\");\r\n        } else {\r\n          tab.classList.remove(\"active\");\r\n          tabContent[index].classList.add(\"d-none\");\r\n        }\r\n      });\r\n    }\r\n  });\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tabs);\r\n\n\n//# sourceURL=webpack:///./modules/tabs.js?");

/***/ }),

/***/ "./modules/timer.js":
/*!**************************!*\
  !*** ./modules/timer.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst timer = (deadline) => {\r\n  // console.log(deadline);\r\n  const timerHours = document.getElementById(\"timer-hours\");\r\n  const timerMinutes = document.getElementById(\"timer-minutes\");\r\n  const timerSeconds = document.getElementById(\"timer-seconds\");\r\n  let idUpdateClock;\r\n\r\n  const getTimeRemaining = () => {\r\n    let dateStop = new Date(deadline).getTime();\r\n    let dateNow = new Date().getTime();\r\n    let timeRemaining = (dateStop - dateNow) / 1000;\r\n\r\n    let hours = Math.floor(timeRemaining / 60 / 60);\r\n    let minutes = Math.floor((timeRemaining / 60) % 60);\r\n    let seconds = Math.floor(timeRemaining % 60);\r\n    // let days = Math.floor(timeRemaining / 60 / 60 / 24);\r\n\r\n    return { timeRemaining, hours, minutes, seconds };\r\n  };\r\n  const updateCLock = () => {\r\n    let getTime = getTimeRemaining();\r\n\r\n    const addZero = (elem) => {\r\n      if (String(elem).length === 1) {\r\n        return \"0\" + elem;\r\n      } else {\r\n        return String(elem);\r\n      }\r\n    };\r\n    timerHours.textContent = addZero(getTime.hours);\r\n    timerMinutes.textContent = addZero(getTime.minutes);\r\n    timerSeconds.textContent = addZero(getTime.seconds);\r\n    // if (getTime.timeRemaining > 0) {\r\n    //   setTimeout(updateCLock, 1000);\r\n    // }\r\n    if (getTime.timeRemaining < 0) {\r\n      clearInterval(idUpdateClock);\r\n      timerHours.textContent = addZero(0);\r\n      timerMinutes.textContent = addZero(0);\r\n      timerSeconds.textContent = addZero(0);\r\n    }\r\n  };\r\n  // updateCLock();\r\n  idUpdateClock = setInterval(updateCLock, 1000);\r\n  updateCLock();\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (timer);\r\n\n\n//# sourceURL=webpack:///./modules/timer.js?");

/***/ }),

/***/ "./modules/validation.js":
/*!*******************************!*\
  !*** ./modules/validation.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst validation = () => {\r\n  const inputWrapper = document.querySelector(\".calc-block\");\r\n  const calcInputs = inputWrapper.querySelectorAll(\"input\");\r\n  const forms = document.querySelectorAll(\"form\");\r\n\r\n  const mainForm = document.querySelectorAll(\"form\")[0];\r\n  const footerForm = document.querySelectorAll(\"form\")[1];\r\n  const modalForm = document.querySelectorAll(\"form\")[2];\r\n  let messageArea = footerForm.querySelector(\"input.mess\");\r\n\r\n  calcInputs.forEach((input) => {\r\n    input.addEventListener(\"input\", (e) => {\r\n      e.target.value = e.target.value.replace(/\\D+/, \"\");\r\n    });\r\n  });\r\n\r\n  forms.forEach((form) => {\r\n    let inputName = form.querySelector(\"input[type='text']\");\r\n    let inputMail = form.querySelector(\"input[type='email']\");\r\n    let inputTel = form.querySelector(\"input[type='tel']\");\r\n\r\n    inputName.addEventListener(\"input\", (e) => {\r\n      e.target.value = e.target.value.replace(/[^а-яА-ЯёЁ\\s\\-]/g, \"\");\r\n    });\r\n    inputName.addEventListener(\"blur\", (e) => {\r\n      e.target.value = e.target.value.replace(/^[\\s\\-]+/g, \"\");\r\n      e.target.value = e.target.value.replace(/[\\s\\-]+$/g, \"\");\r\n      e.target.value = e.target.value.replace(/\\s{2,}/g, \" \");\r\n      e.target.value = e.target.value.replace(/\\-{2,}/g, \"-\");\r\n      if (e.target.value) {\r\n        e.target.value =\r\n          e.target.value[0].toUpperCase() +\r\n          e.target.value.slice(1).toLowerCase();\r\n      }\r\n    });\r\n\r\n    inputMail.addEventListener(\"input\", (e) => {\r\n      e.target.value = e.target.value.replace(\r\n        /[^a-zA-Z\\d\\@\\-\\_\\.\\!\\~\\*\\']/g,\r\n        \"\"\r\n      );\r\n    });\r\n    inputMail.addEventListener(\"blur\", (e) => {\r\n      e.target.value = e.target.value.replace(/^[\\-]+/g, \"\");\r\n      e.target.value = e.target.value.replace(/[\\-]+$/g, \"\");\r\n      e.target.value = e.target.value.replace(/\\s{2,}/g, \" \");\r\n      e.target.value = e.target.value.replace(/\\-{2,}/g, \"-\");\r\n    });\r\n    inputTel.addEventListener(\"input\", (e) => {\r\n      e.target.value = e.target.value.replace(/[^\\d\\(\\)\\-]/g, \"\");\r\n    });\r\n    inputTel.addEventListener(\"blur\", (e) => {\r\n      e.target.value = e.target.value.replace(/^[\\-]+/g, \"\");\r\n      e.target.value = e.target.value.replace(/[\\-]+$/g, \"\");\r\n      e.target.value = e.target.value.replace(/\\s{2,}/g, \" \");\r\n      e.target.value = e.target.value.replace(/\\-{2,}/g, \"-\");\r\n    });\r\n  });\r\n\r\n  messageArea.addEventListener(\"input\", (event) => {\r\n    event.target.value = event.target.value.replace(/[^а-яА-ЯёЁ\\s\\-]/g, \"\");\r\n  });\r\n  messageArea.addEventListener(\"blur\", (e) => {\r\n    e.target.value = e.target.value.replace(/^[\\s\\-]+/g, \"\");\r\n    e.target.value = e.target.value.replace(/[\\s\\-]+$/g, \"\");\r\n    e.target.value = e.target.value.replace(/\\s{2,}/g, \" \");\r\n    e.target.value = e.target.value.replace(/\\-{2,}/g, \"-\");\r\n  });\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (validation);\r\n\n\n//# sourceURL=webpack:///./modules/validation.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;