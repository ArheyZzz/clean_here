/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/group-css-media-queries-loader/lib/index.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[5]!./src/index.scss":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/group-css-media-queries-loader/lib/index.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[5]!./src/index.scss ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/Manrope-Regular.woff2 */ "./src/fonts/Manrope-Regular.woff2"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/Manrope-Medium.woff2 */ "./src/fonts/Manrope-Medium.woff2"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/Manrope-SemiBold.woff2 */ "./src/fonts/Manrope-SemiBold.woff2"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/Manrope-Bold.woff2 */ "./src/fonts/Manrope-Bold.woff2"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@charset "UTF-8";
/**
  Нормализация блочной модели
 */
*,
::before,
::after {
  box-sizing: border-box;
}

/**
  Убираем внутренние отступы слева тегам списков,
  у которых есть атрибут class
 */
:where(ul, ol):where([class]) {
  padding-left: 0;
}

/**
  Убираем внешние отступы body и двум другим тегам,
  у которых есть атрибут class
 */
body,
:where(blockquote, figure):where([class]) {
  margin: 0;
}

/**
  Убираем внешние отступы вертикали нужным тегам,
  у которых есть атрибут class
 */
:where(h1,
h2,
h3,
h4,
h5,
h6,
p,
ul,
ol,
dl):where([class]) {
  margin-block: 0;
}

:where(dd[class]) {
  margin-left: 0;
}

:where(fieldset[class]) {
  margin-left: 0;
  padding: 0;
  border: none;
}

/**
  Убираем стандартный маркер маркированному списку,
  у которого есть атрибут class
 */
:where(ul[class]) {
  list-style: none;
}

:where(address[class]) {
  font-style: normal;
}

/**
  Обнуляем вертикальные внешние отступы параграфа,
  объявляем локальную переменную для внешнего отступа вниз,
  чтобы избежать взаимодействие с более сложным селектором
 */
p {
  --paragraphMarginBottom: 24px;
  margin-block: 0;
}

/**
  Внешний отступ вниз для параграфа без атрибута class,
  который расположен не последним среди своих соседних элементов
 */
p:where(:not([class]):not(:last-child)) {
  margin-bottom: var(--paragraphMarginBottom);
}

/**
  Упрощаем работу с изображениями и видео
 */
img,
video {
  display: block;
  max-width: 100%;
  height: auto;
}

/**
  Наследуем свойства шрифт для полей ввода
 */
input,
textarea,
select,
button {
  font: inherit;
}

html {
  /**
    Пригодится в большинстве ситуаций
    (когда, например, нужно будет "прижать" футер к низу сайта)
   */
  height: 100%;
  /**
    Убираем скачок интерфейса по горизонтали
    при появлении / исчезновении скроллбара
   */
  scrollbar-gutter: stable;
}

/**
  Плавный скролл
 */
html,
:has(:target) {
  scroll-behavior: smooth;
}

body {
  /**
    Пригодится в большинстве ситуаций
    (когда, например, нужно будет "прижать" футер к низу сайта)
   */
  min-height: 100%;
  /**
    Унифицированный интерлиньяж
   */
  line-height: 1.5;
}

/**
  Нормализация высоты элемента ссылки при его инспектировании в DevTools
 */
a:where([class]) {
  display: inline-flex;
}

/**
  Курсор-рука при наведении на элемент
 */
button,
label {
  cursor: pointer;
}

/**
  Приводим к единому цвету svg-элементы
  (за исключением тех, у которых уже указан
  атрибут fill со значением 'none' или начинается с 'url')
 */
:where([fill]:not([fill=none]):not([fill^=url])) {
  fill: currentColor;
}

/**
  Приводим к единому цвету svg-элементы
  (за исключением тех, у которых уже указан
  атрибут stroke со значением 'none')
 */
:where([stroke]:not([stroke=none]):not([stroke^=url])) {
  stroke: currentColor;
}

/**
  Чиним баг задержки смены цвета при взаимодействии с svg-элементами
 */
svg * {
  transition-property: fill, stroke;
}

/**
  Приведение рамок таблиц в классический 'collapse' вид
 */
:where(table) {
  border-collapse: collapse;
  border-color: currentColor;
}

/**
  Удаляем все анимации и переходы для людей,
  которые предпочитают их не использовать
 */
@font-face {
  font-family: "Manrope";
  src: url(${___CSS_LOADER_URL_REPLACEMENT_0___}) format("woff2");
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}
@font-face {
  font-family: "Manrope";
  src: url(${___CSS_LOADER_URL_REPLACEMENT_1___}) format("woff2");
  font-weight: 500;
  font-style: normal;
  font-display: swap;
}
@font-face {
  font-family: "Manrope";
  src: url(${___CSS_LOADER_URL_REPLACEMENT_2___}) format("woff2");
  font-weight: 600;
  font-style: normal;
  font-display: swap;
}
@font-face {
  font-family: "Manrope";
  src: url(${___CSS_LOADER_URL_REPLACEMENT_3___}) format("woff2");
  font-weight: 700;
  font-style: normal;
  font-display: swap;
}
.visually-hidden {
  position: absolute !important;
  width: 1px !important;
  height: 1px !important;
  margin: -1px !important;
  border: 0 !important;
  padding: 0 !important;
  white-space: nowrap !important;
  clip-path: inset(100%) !important;
  clip: rect(0 0 0 0) !important;
  overflow: hidden !important;
}

:root {
  --color-white: #ffffff;
  --color-black: #000000;
  --color-red-45: #E50000;
  --color-red-50: #FF0000;
  --color-red-55: #FF1919;
  --color-red-60: #FF3333;
  --color-red-80: #FF9999;
  --color-red-90: #FFCCCC;
  --color-red-95: #FFE5E5;
  --color-red-99: #FFFAFA;
  --color-black-06: #0F0F0F;
  --color-black-08: #141414;
  --color-black-10: #1A1A1A;
  --color-black-12: #1F1F1F;
  --color-black-15: #262626;
  --color-black-20: #333333;
  --color-black-25: #404040;
  --color-black-30: #4C4C4C;
  --color-gray-60: #999999;
  --color-gray-65: #A6A6A6;
  --color-gray-70: #B3B3B3;
  --color-gray-75: #BFBFBF;
  --color-gray-90: #E4E4E7;
  --color-gray-95: #F1F1F3;
  --color-gray-97: #F7F7F8;
  --color-gray-99: #FCFCFD;
  --border: var(--border-width-s) solid var(--color-black-15);
  --border-width-l: 4px;
  --border-width-m: 3px;
  --border-width-s: 1px;
  --border-radius-l: 12px;
  --border-radius-m: 10px;
  --border-radius-s: 8px;
  --border-radius-xs: 6px;
  --border-radius-xxs: 5px;
  --border-radius-xxxs: 4px;
  --font-family-base: "Manrope", sans-serif;
  --container-width: fluid-to-laptop(1600, 1280);
  --container-padding-x: 16px;
  --section-padding-y: fluid(75, 40);
  --transition-duration: 0.2s;
  --transition-duration-longer: 0.4s;
}

html {
  scroll-behavior: smooth;
}
html.is-lock {
  overflow: hidden;
}

body {
  font-size: clamp(0.875rem, 0.7944214876rem + 0.3305785124vw, 1.125rem);
  display: flex;
  flex-direction: column;
  font-family: var(--font-family-base);
  color: var(--color-white);
  background-color: var(--color-gray-95);
}

main {
  flex-grow: 1;
}

h1, .h1,
h2, .h2,
h3, .h3,
h4, .h4,
h5, .h5,
h6, .h6 {
  color: var(--color-white);
}

h1, .h1 {
  font-size: clamp(1.75rem, 1.145661157rem + 2.479338843vw, 3.625rem);
  font-weight: 700;
}

h2, .h2 {
  font-size: clamp(1.5rem, 1.0165289256rem + 1.9834710744vw, 3rem);
  font-weight: 700;
}

h3, .h3 {
  font-size: clamp(1.25rem, 0.8873966942rem + 1.4876033058vw, 2.375rem);
  font-weight: 700;
}

h4, .h4 {
  font-size: clamp(1.125rem, 1.0041322314rem + 0.4958677686vw, 1.5rem);
  font-weight: 600;
}

h5, .h5 {
  font-size: clamp(1.125rem, 1.0444214876rem + 0.3305785124vw, 1.375rem);
  font-weight: 500;
}

h6, .h6 {
  font-size: clamp(1rem, 0.9194214876rem + 0.3305785124vw, 1.25rem);
  font-weight: 600;
}

a,
button,
label,
input,
textarea,
select,
svg * {
  transition-duration: var(--transition-duration);
}

a {
  color: inherit;
}
a[class] {
  -webkit-text-decoration: none;
  text-decoration: none;
}

:focus-visible {
  outline: 2px dashed var(--color-white);
  outline-offset: 4px;
  transition-duration: 0s !important;
}

.thankyou {
  width: 100vw;
  height: 100vh;
  background-color: var(--color-black);
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.thankyou__block {
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  margin: 0 auto;
}
.thankyou h2 {
  font-size: 36px;
  margin-bottom: 20px;
  color: #9B6D44;
}
.thankyou p {
  font-size: 18px;
  margin-bottom: 30px;
}
.thankyou a {
  font-weight: bold;
  -webkit-text-decoration: underline;
  text-decoration: underline;
  color: #fff;
}

.container {
  width: 100%;
  max-width: calc(var(--container-width) + var(--container-padding-x) * 2);
  max-width: 1855px;
  margin-inline: auto;
  padding-inline: var(--container-padding-x);
}

#header {
  position: sticky;
  top: 0;
  background-color: var(--color-black);
  z-index: 11;
  font-size: 22px;
}

.burger-button {
  z-index: 10;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 44px;
  height: 44px;
  padding: 0;
  background-color: #9B6D44;
  border: 2px solid black;
  border-radius: 6px;
  position: absolute;
  right: 20px;
  top: 50%;
  translate: 0 -50%;
}

.burger-button.is-active .burger-button__line {
  stroke-dasharray: 90 207;
  stroke-dashoffset: -134;
}

.burger-button.is-active .burger-button__line--2 {
  stroke-dasharray: 1 60;
  stroke-dashoffset: -30;
}

.burger-button:not(.is-active) .burger-button__line--3 {
  stroke-dasharray: 30 207;
  stroke-dashoffset: -30;
}

.burger-button__line {
  fill: none;
  stroke: var(--color-white);
  stroke-width: 6;
  stroke-linecap: round;
  stroke-dasharray: 60 207;
  transition: stroke-dasharray 0.4s cubic-bezier(0.4, 0, 0.2, 1), stroke-dashoffset 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.burger-button__line--2 {
  stroke-dasharray: 60 60;
}

.header {
  padding: clamp(0.9375rem, 0.6353305785rem + 1.2396694215vw, 1.875rem) 0;
}
.header__wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.header__wrapper-left {
  display: flex;
  align-items: center;
  column-gap: 20px;
}
.header__wrapper-left__logo {
  width: clamp(7.5rem, 5.8884297521rem + 6.6115702479vw, 12.5rem);
}
.header__wrapper-left__logo > img {
  width: 100%;
}
.header__wrapper-left__time-work:hover {
  color: #9B6D44;
  cursor: pointer;
}
.header__wrapper-left__social {
  display: flex;
  column-gap: 20px;
}
.header__wrapper-left__social a:hover {
  color: #9B6D44;
  cursor: pointer;
}
.header__wrapper-right {
  display: flex;
  align-items: center;
  column-gap: 20px;
}
.header__wrapper-right__address {
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 5px;
}
.header__wrapper-right__address img {
  width: 34px;
  height: 34px;
}
.header__wrapper-right__address:hover {
  color: #9B6D44;
}
.header__wrapper-right__phone {
  position: relative;
  align-items: center;
  justify-content: center;
  column-gap: 5px;
  width: 200px;
  height: 45px;
  background-color: #9B6D44;
  border-radius: 28px;
}
.header__wrapper-right__phone:hover {
  border: 1px solid rgb(155, 109, 68);
  background-color: #1A1A1A;
  color: #9B6D44;
}
.header__dialog {
  padding: 0;
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: var(--color-black);
  border: none;
  transition-duration: var(--transition-duration-longer);
  transition-behavior: allow-discrete;
}
@starting-style {
  .header__dialog[open] {
    opacity: 0;
    translate: 50%;
  }
}
.header__dialog:not([open]) {
  opacity: 0;
  translate: 50%;
}
.header__menu {
  position: relative;
  z-index: 10 !important;
  padding-bottom: 125px;
  height: 100%;
  background-color: #9B6D44;
  display: flex;
  justify-content: center;
  flex-direction: column;
  row-gap: 30px;
  align-items: center;
  color: var(--color-white);
  font-size: 24px;
}
.header__menu-item {
  padding: 5px 10px;
  border-radius: 28px;
  overflow: hidden;
  font-weight: 500;
}
.header__menu-item:hover {
  background-color: var(--color-white);
  color: #9B6D44;
}

#slider {
  scroll-margin-top: clamp(6.25rem, 4.2355371901rem + 8.2644628099vw, 12.5rem);
}

.slider {
  width: 100%;
  height: clamp(6.25rem, -1.8078512397rem + 33.0578512397vw, 31.25rem);
}
.slider.container {
  padding-inline: 0;
  background-color: var(--color-white);
}
.slider__wrapper {
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--color-white);
}
.slider__image {
  position: absolute;
  left: 0;
  width: 100%;
  opacity: 0;
  transition: opacity 1.2s ease-in-out;
  z-index: 0;
  object-fit: cover;
}
.slider__image.active {
  opacity: 1;
  z-index: 1;
}

.about {
  padding: clamp(1.875rem, 0.9684917355rem + 3.7190082645vw, 4.6875rem) 0;
  background-color: #1E1E1E;
  text-align: center;
  border-bottom-left-radius: 50px;
  border-bottom-right-radius: 50px;
  scroll-margin-top: clamp(6.25rem, 4.2355371901rem + 8.2644628099vw, 12.5rem);
}
.about__title {
  font-size: clamp(1.875rem, 1.673553719rem + 0.826446281vw, 2.5rem);
  font-weight: 700;
}
.about__description {
  display: block;
  margin: 0 auto;
  margin-top: 30px;
  width: 70%;
  font-size: clamp(0.75rem, 0.6291322314rem + 0.4958677686vw, 1.125rem);
}

:root {
  --height: 100px;
  --width: 200px;
}

.goods {
  padding: clamp(1.875rem, 0.9684917355rem + 3.7190082645vw, 4.6875rem) 0;
  color: var(--color-black);
  text-align: center;
  scroll-margin-top: clamp(6.25rem, 4.2355371901rem + 8.2644628099vw, 12.5rem);
}
.goods__title {
  color: var(--color-black);
  text-align: center;
  font-size: clamp(1.875rem, 1.673553719rem + 0.826446281vw, 2.5rem);
  font-weight: 700;
}
.goods__catalog-wrapper {
  margin-top: 50px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
}
.goods__catalog-wrapper-item {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: clamp(0.625rem, 0.5242768595rem + 0.4132231405vw, 0.9375rem);
  border-radius: 10px;
  box-shadow: 0 7px 25px 0 rgba(0, 0, 0, 0.6);
  height: 350px;
  width: 250px;
  overflow: hidden;
  background-color: var(--color-white);
}
.goods__catalog-wrapper-item__image {
  flex: 1 0 auto;
  height: 50%;
  border-radius: 10px;
  overflow: hidden;
}
.goods__catalog-wrapper-item__image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}
.goods__catalog-wrapper-item__info {
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: center;
}
.goods__catalog-wrapper-item__title {
  color: var(--color-black);
  text-align: center;
  font-size: clamp(1.25rem, 0.25rem + 1.25vw, 1.5rem);
  font-weight: 700;
}
.goods__catalog-wrapper-item__description {
  font-size: clamp(1rem, 0rem + 1.25vw, 1.25rem);
}
.goods__catalog-wrapper-item__price {
  font-size: clamp(1rem, 0rem + 1.25vw, 1.25rem);
  font-weight: 700;
}
.goods__catalog-wrapper-item__button {
  margin: 0 auto;
  width: 100%;
  height: clamp(1.875rem, 1.5728305785rem + 1.2396694215vw, 2.8125rem);
  background-color: var(--color-gray-75);
  color: #9B6D44;
  border-radius: 10px;
  outline: none;
  border: none;
  font-weight: 600;
}
.goods__catalog-wrapper-item__button:hover {
  background-color: rgba(255, 1, 97, 0.7);
  color: var(--color-white);
}
.goods__catalog-wrapper__pagination {
  margin-top: clamp(1.5625rem, 1.0588842975rem + 2.0661157025vw, 3.125rem);
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 20px;
}
.goods__catalog-wrapper__pagination-prev {
  border-top-left-radius: 28px;
  border-bottom-left-radius: 28px;
  background-color: var(--color-gray-75);
  color: #9B6D44;
  border: none;
}
.goods__catalog-wrapper__pagination-prev:hover {
  background-color: rgba(255, 1, 97, 0.7);
  color: var(--color-white);
}
.goods__catalog-wrapper__pagination-next {
  border-top-right-radius: 28px;
  border-bottom-right-radius: 28px;
  background-color: var(--color-gray-75);
  color: #9B6D44;
  border: none;
}
.goods__catalog-wrapper__pagination-next:hover {
  background-color: rgba(255, 1, 97, 0.7);
  color: var(--color-white);
}
.goods__catalog-wrapper__pagination-info {
  font-size: clamp(0.75rem, 0.6291322314rem + 0.4958677686vw, 1.125rem);
  font-weight: 700;
}

.page-current,
.page-total {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 20px;
  height: 20px;
  padding: 8px;
  border-radius: 28px;
  color: rgb(255, 1, 97);
  background-color: var(--color-gray-75);
}

.goods__button-wrapper {
  margin: 50px auto 0 auto;
  display: grid;
  grid-template-columns: repeat(4, auto);
  justify-content: center;
  align-items: center;
}

.button {
  position: relative;
  width: calc(0.8 * var(--width));
  height: calc(0.5 * var(--height));
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  overflow: hidden;
  margin: 0 0.8rem;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2), 0 3px 8px rgba(0, 0, 0, 0.1);
  transition: all 0.3s cubic-bezier(0, 0.22, 0.3, 1);
  border-radius: 28px;
}
.button:before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.1);
}
.button span {
  color: #fff;
  font-size: clamp(0.5rem, 0.3388429752rem + 0.6611570248vw, 1rem);
  z-index: 10;
  text-transform: uppercase;
  letter-spacing: 2px;
  text-align: center;
}
.button._1 {
  background: #2980b9;
}
.button._2 {
  background: #8e44ad;
}
.button._3 {
  background: #16a085;
}
.button._4 {
  background: #e74c3c;
}
.button .back {
  position: absolute;
  width: 0;
  height: 0;
  filter: url(#filter);
  border-radius: 50%;
  z-index: 5;
  transition: all 2.5s cubic-bezier(0.1, 0.22, 0.3, 1);
}
.button._1 .back {
  left: -50%;
  top: -50%;
  background: #27ae60;
}
.button._2 .back {
  right: -50%;
  top: -50%;
  background: #c0392b;
}
.button._3 .back {
  left: -50%;
  bottom: -50%;
  background: #34495e;
}
.button._4 .back {
  right: -50%;
  bottom: -50%;
  background: #2980b9;
}
.button:hover .back {
  width: calc(2 * var(--width));
  height: calc(2 * var(--height));
}
.contact__form {
  padding: 35px 0;
  background-color: #1E1E1E;
  border-top-left-radius: 50px;
  border-top-right-radius: 50px;
  scroll-margin-top: clamp(6.25rem, 4.2355371901rem + 8.2644628099vw, 12.5rem);
}
.contact__form-title {
  text-align: center;
  font-size: clamp(1.875rem, 1.673553719rem + 0.826446281vw, 2.5rem);
  font-weight: 700;
  color: #9B6D44;
}
.contact__form-form {
  font-size: clamp(0.75rem, 0.6291322314rem + 0.4958677686vw, 1.125rem);
  padding: clamp(0.625rem, -0.180785124rem + 3.305785124vw, 3.125rem);
  margin: 0 auto;
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  border-radius: 20px;
  width: clamp(18.75rem, 12.7066115702rem + 24.7933884298vw, 37.5rem);
  box-shadow: 0 7px 25px 0 rgba(0, 0, 0, 0.6);
}
.contact__form-form input {
  margin: 0 auto;
  width: clamp(15rem, 10.3667355372rem + 19.0082644628vw, 29.375rem);
  height: clamp(2.5rem, 1.895661157rem + 2.479338843vw, 4.375rem);
  border: 1px solid rgb(255, 255, 255);
  border-radius: 100px;
  background: rgb(33, 33, 33);
  padding: 20px;
  color: white;
}
.contact__form-form textarea {
  resize: none;
  margin: 0 auto;
  width: clamp(15rem, 10.3667355372rem + 19.0082644628vw, 29.375rem);
  height: clamp(6.25rem, 4.2355371901rem + 8.2644628099vw, 12.5rem);
  border: 1px solid rgb(255, 255, 255);
  border-radius: 20px;
  background: rgb(33, 33, 33);
  padding: 20px;
  color: white;
}
.contact__form-form-checkbox {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 20px;
}
.contact__form-form-checkbox input {
  width: 16px;
  height: 16px;
  margin: 0;
}
.contact__form-form-checkbox span {
  font-size: clamp(0.5rem, 0.298553719rem + 0.826446281vw, 1.125rem);
  text-wrap: nowrap;
}
.contact__form-form button {
  width: clamp(15rem, 10.3667355372rem + 19.0082644628vw, 29.375rem);
  height: clamp(2.5rem, 1.895661157rem + 2.479338843vw, 4.375rem);
  margin: 0 auto;
  border-radius: 100px;
  background: rgb(155, 109, 68);
  font-weight: 600;
}
.contact__form-form button:hover {
  border: 1px solid rgb(155, 109, 68);
  background-color: #1A1A1A;
  color: #9B6D44;
}

.map {
  position: relative;
}
.map.container {
  padding-inline: 0;
}

.marquee-wrap {
  background: #9B6D44;
  padding: clamp(0.625rem, -0.625rem + 1.5625vw, 0.9375rem) 0;
  position: relative;
  display: flex;
  overflow: hidden;
  gap: 42px;
}

.marquee-row {
  flex-shrink: 0;
  display: flex;
  gap: 42px;
  justify-content: space-around;
  min-width: 100%;
  animation: scroll 15s linear infinite;
}

.marquee-row-item {
  text-transform: uppercase;
  font-size: clamp(1.125rem, 1.0041322314rem + 0.4958677686vw, 1.5rem);
  font-weight: 500;
  line-height: 1.2;
  -webkit-text-stroke: 0.3px white;
  color: var(--color-white);
  position: relative;
  text-wrap: nowrap;
}

.marquee-row-item::before {
  content: attr(data-name);
  position: absolute;
  top: 0;
  left: 0;
  width: 0;
  height: 100%;
  color: rgb(255, 1, 97);
  -webkit-text-stroke: 1px transparent;
  overflow: hidden;
  transition: width 0.5s ease;
}

.marquee-row-item:hover::before {
  width: 100%;
}

@keyframes scroll {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(calc(-100% - 42px));
  }
}
.footer {
  background-color: var(--color-black);
  padding: clamp(0.9375rem, 0.6353305785rem + 1.2396694215vw, 1.875rem) 0;
  font-size: clamp(1rem, 0rem + 1.25vw, 1.25rem);
}
.footer__wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  column-gap: 10px;
}
.footer__wrapper-left__logo {
  width: 33.3333333333%;
  padding-left: 10px;
}
.footer__wrapper-left__logo > img {
  width: clamp(7.5rem, 5.8884297521rem + 6.6115702479vw, 12.5rem);
  max-width: 200px;
}
.footer__wrapper-center__description {
  font-size: clamp(1rem, 0rem + 1.25vw, 1.25rem);
  width: 80%;
  text-align: center;
}
.footer__wrapper-right__social {
  padding-right: 10px;
  width: 33.3333333333%;
  display: flex;
  justify-content: flex-end;
  column-gap: 30px;
}
.footer__wrapper-right__social svg:hover {
  color: #9B6D44;
}
@media only screen and (max-width: 750px){
  .goods__button-wrapper {
    grid-template-columns: repeat(2, auto);
    row-gap: 20px;
  }
}
@media (prefers-reduced-motion: reduce){
  *,
  ::before,
  ::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
@media (min-width: 1023.02px){
  .visible-tablet {
    display: none !important;
  }
  #header {
    font-size: clamp(1rem, 0rem + 1.25vw, 1.25rem);
  }
  .header__dialog {
    display: contents;
  }
  .header__menu {
    padding: clamp(0.625rem, -0.625rem + 1.5625vw, 0.9375rem) 0;
    font-size: clamp(1.125rem, 0.125rem + 1.25vw, 1.375rem);
    flex-direction: row;
    column-gap: 70px;
    justify-content: center;
  }
}
@media (max-width: 1023px){
  .hidden-tablet {
    display: none !important;
  }
  .header__wrapper-left__time-work {
    display: none;
  }
  .header__wrapper-left__social {
    display: none;
  }
  .header__wrapper-right {
    display: none;
  }
}
@media (min-width: 767.02px){
  .visible-mobile {
    display: none !important;
  }
}
@media (max-width: 767px){
  .hidden-mobile {
    display: none !important;
  }
  .goods__catalog-wrapper-item {
    flex-direction: row;
    width: calc(50% - 10px);
    height: 150px;
    column-gap: 10px;
  }
  .goods__catalog-wrapper-item__image {
    width: 50%;
    height: 100%;
  }
  .goods__catalog-wrapper-item__title {
    font-size: 18px;
  }
  .goods__catalog-wrapper-item__description {
    font-size: 12px;
    text-align: left;
  }
  .footer__wrapper-center__description {
    display: none;
  }
}
@media (any-hover: hover){
  a:hover {
    color: rgb(255, 1, 97);
  }
}
@media (any-hover: none){
  a:active {
    color: rgb(255, 1, 97);
  }
}
@media (max-width: 480px){
  .goods__catalog-wrapper {
    gap: 10px;
  }
  .goods__catalog-wrapper-item {
    width: 80%;
    height: 140px;
    padding: 5px 15px 5px 10px;
  }
}`, "",{"version":3,"sources":["webpack://./src/index.scss","webpack://./node_modules/@a1rth/css-normalize/index.css","webpack://./src/style/fontsAndMedia.scss","webpack://./src/style/variables.scss","webpack://./src/style/globals.scss","webpack://./src/style/thanks.scss","webpack://./<no source>"],"names":[],"mappings":"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","sourcesContent":["@use '@a1rth/css-normalize/index.css';\n@use 'style/fontsAndMedia' as *;\n@use 'style/variables'as *;\n@use 'style/globals'as *;\n@use \"style/thanks\" as *;\n\n.container {\n  width: 100%;\n  max-width: calc(var(--container-width) + var(--container-padding-x) * 2);\n  max-width: 1855px;\n  margin-inline: auto;\n  padding-inline: var(--container-padding-x);\n}\n\n#header {\n  position: sticky;\n  top: 0;\n  background-color: var(--color-black);\n  z-index: 11;\n  font-size: 22px;\n  @include tablet-above {\n    font-size: fluid-to-laptop(20, 16);\n  }\n}\n\n.burger-button {\n  z-index: 10;\n  display: inline-flex;\n  justify-content: center;\n  align-items: center;\n  width: 44px;\n  height: 44px;\n  padding: 0;\n  background-color: #9B6D44;\n  border: 2px solid black;\n  border-radius: 6px;\n  position: absolute;\n  right: 20px;\n  top: 50%;\n  translate: 0 -50%;\n}\n\n.burger-button.is-active .burger-button__line {\n  stroke-dasharray: 90 207;\n  stroke-dashoffset: -134;\n}\n\n.burger-button.is-active .burger-button__line--2 {\n  stroke-dasharray: 1 60;\n  stroke-dashoffset: -30;\n}\n\n.burger-button:not(.is-active) .burger-button__line--3 {\n  stroke-dasharray: 30 207;\n  stroke-dashoffset: -30;\n}\n\n.burger-button__line {\n  fill: none;\n  stroke: var(--color-white);\n  stroke-width: 6;\n  stroke-linecap: round;\n  stroke-dasharray: 60 207;\n  transition: stroke-dasharray 0.4s cubic-bezier(0.4, 0, 0.2, 1),\n  stroke-dashoffset 0.4s cubic-bezier(0.4, 0, 0.2, 1);\n}\n\n.burger-button__line--2 {\n  stroke-dasharray: 60 60;\n}\n\n.header {\n  padding: fluid(30, 15) 0;\n\n  &__wrapper {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n\n\n    &-left {\n      display: flex;\n      align-items: center;\n      column-gap: 20px;\n\n      &__logo {\n        width: fluid(200, 120);\n\n        & > img {\n          width: 100%;\n        }\n      }\n\n      &__time-work {\n        @include tablet {\n          display: none;\n        }\n\n        &:hover {\n          color: #9B6D44;\n          cursor: pointer;\n        }\n      }\n\n      &__social {\n        display: flex;\n        column-gap: 20px;\n\n        & a {\n          &:hover {\n            color: #9B6D44;\n            cursor: pointer;\n          }\n        }\n\n        @include tablet {\n          display: none;\n        }\n      }\n\n    }\n\n    &-right {\n      display: flex;\n      align-items: center;\n      column-gap: 20px;\n\n      &__address {\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        column-gap: 5px;\n\n        & img {\n          width: 34px;\n          height: 34px;\n        }\n\n        & p {\n\n        }\n\n        &:hover {\n          color: #9B6D44;\n        }\n      }\n\n      &__phone {\n        position: relative;\n        align-items: center;\n        justify-content: center;\n        column-gap: 5px;\n        width: 200px;\n        height: 45px;\n        background-color: #9B6D44;\n        border-radius: 28px;\n\n        &:hover {\n          border: 1px solid rgb(155, 109, 68);\n          background-color: #1A1A1A;\n          color: #9B6D44;\n        }\n      }\n\n      @include tablet {\n        display: none;\n      }\n    }\n  }\n\n  &__dialog {\n    padding: 0;\n    position: fixed;\n    //inset: 0;\n    width: 100%;\n    height: 100%;\n    background-color: var(--color-black);\n    border: none;\n    transition-duration: var(--transition-duration-longer);\n    transition-behavior: allow-discrete;\n\n    @include tablet-above {\n      display: contents;\n    }\n\n    &[open] {\n      @starting-style {\n        opacity: 0;\n        translate: 50%;\n      }\n    }\n\n    &:not([open]) {\n      opacity: 0;\n      translate: 50%;\n    }\n  }\n\n  &__menu {\n    position: relative;\n    z-index: 10 !important;\n    padding-bottom: 125px;\n    height: 100%;\n    background-color: #9B6D44;\n    display: flex;\n    justify-content: center;\n    flex-direction: column;\n    row-gap: 30px;\n    align-items: center;\n    color: var(--color-white);\n    font-size: 24px;\n\n    @include tablet-above {\n      padding: fluid-to-laptop(15, 10) 0;\n      font-size: fluid-to-laptop(22, 18);\n      flex-direction: row;\n      column-gap: 70px;\n      justify-content: center;\n    }\n\n    &-item {\n      padding: 5px 10px;\n      border-radius: 28px;\n      overflow: hidden;\n      font-weight: 500;\n\n      &:hover {\n        background-color: var(--color-white);\n        color: #9B6D44;\n      }\n    }\n  }\n}\n\n#slider {\n  scroll-margin-top: fluid(200, 100);\n}\n\n.slider {\n  width: 100%;\n  height: fluid(500, 100);\n\n  &.container {\n    padding-inline: 0;\n    background-color: var(--color-white);\n  }\n\n  &__wrapper {\n    position: relative;\n    overflow: hidden;\n    width: 100%;\n    height: 100%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background-color: var(--color-white);\n  }\n\n  &__image {\n    position: absolute;\n    //inset: 0;\n    //top: 0;\n    left: 0;\n    width: 100%;\n    opacity: 0;\n    transition: opacity 1.2s ease-in-out;\n    z-index: 0;\n    object-fit: cover;\n\n    &.active {\n      opacity: 1;\n      z-index: 1;\n    }\n  }\n}\n\n.about {\n  padding: fluid(75, 30) 0;\n  background-color: #1E1E1E;\n  text-align: center;\n  border-bottom-left-radius: 50px;\n  border-bottom-right-radius: 50px;\n  scroll-margin-top: fluid(200, 100);\n\n  &__title {\n    font-size: fluid(40, 30);\n    font-weight: 700;\n  }\n\n  &__description {\n    display: block;\n    margin: 0 auto;\n    margin-top: 30px;\n    width: 70%;\n    font-size: fluid(18, 12);\n  }\n}\n\n:root {\n  --height: 100px;\n  --width: 200px;\n}\n\n.goods {\n  padding: fluid(75, 30) 0;\n  color: var(--color-black);\n  text-align: center;\n  scroll-margin-top: fluid(200, 100);\n\n  &__title {\n    color: var(--color-black);\n    text-align: center;\n    font-size: fluid(40, 30);\n    font-weight: 700;\n  }\n\n  &__catalog-wrapper {\n    margin-top: 50px;\n    display: flex;\n    justify-content: center;\n    flex-wrap: wrap;\n    gap: 20px;\n\n\n    @include laptop {\n      //background-color: red; // вроде ок\n    }\n\n    @include mobile {\n      //background-color: yellow;\n    }\n\n    @include mobile-s {\n      gap: 10px;\n    }\n\n    &-item {\n      display: flex;\n      flex-direction: column;\n      justify-content: space-between;\n      padding: fluid(15, 10);\n      border-radius: 10px;\n      box-shadow: 0 7px 25px 0 rgba(0, 0, 0, 0.6);\n      height: 350px;\n      width: 250px;\n      overflow: hidden;\n      background-color: var(--color-white);\n\n      @include mobile {\n        flex-direction: row;\n        width: calc(50% - 10px);\n        height: 150px;\n        column-gap: 10px;\n      }\n\n      @include mobile-s {\n        width: 80%;\n        height: 140px;\n        padding: 5px 15px 5px 10px;\n      }\n\n      &__image {\n        flex: 1 0 auto;\n        height: 50%;\n        border-radius: 10px;\n        overflow: hidden;\n\n        @include mobile {\n          width: 50%;\n          height: 100%;\n        }\n\n        & img {\n          width: 100%;\n          height: 100%;\n          object-fit: cover; // ✅ заполнение без деформации\n          display: block;\n        }\n      }\n\n      &__info {\n        margin: 0 auto;\n        display: flex;\n        flex-direction: column;\n        justify-content: space-between;\n        text-align: center;\n      }\n\n      &__title {\n        color: var(--color-black);\n        text-align: center;\n        font-size: fluid-to-laptop(24, 20);\n        font-weight: 700;\n        @include mobile {\n          font-size: 18px;\n        }\n      }\n\n      &__description {\n        font-size: fluid-to-laptop(20, 16);\n        @include mobile {\n          font-size: 12px;\n          text-align: left;\n        }\n      }\n\n      &__price {\n        font-size: fluid-to-laptop(20, 16);\n        font-weight: 700;\n      }\n\n      &__button {\n        margin: 0 auto;\n        width: 100%;\n        height: fluid(45, 30);\n        background-color: var(--color-gray-75);\n        color: #9B6D44;\n        border-radius: 10px;\n        outline: none;\n        border: none;\n        font-weight: 600;\n\n        &:hover {\n          //border: 3px solid rgb(255 1 97);\n          background-color: rgb(255 1 97 / .7);\n          color: var(--color-white);\n        }\n      }\n    }\n\n    &__pagination {\n      margin-top: fluid(50, 25);\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      column-gap: 20px;\n\n      &-prev {\n        border-top-left-radius: 28px;\n        border-bottom-left-radius: 28px;\n        background-color: var(--color-gray-75);\n        color: #9B6D44;\n        border: none;\n\n        &:hover {\n          background-color: rgb(255 1 97 / .7);\n          color: var(--color-white);\n        }\n      }\n\n      &-next {\n        border-top-right-radius: 28px;\n        border-bottom-right-radius: 28px;\n        background-color: var(--color-gray-75);\n        color: #9B6D44;\n        border: none;\n\n\n        &:hover {\n          background-color: rgb(255 1 97 / .7);\n          color: var(--color-white);\n        }\n      }\n\n      &-info {\n        font-size: fluid(18, 12);\n        font-weight: 700;\n      }\n    }\n  }\n}\n\n.page-current,\n.page-total{\n  display: inline-flex;\n  justify-content: center;\n  align-items: center;\n  width: 20px;\n  height: 20px;\n  padding: 8px;\n  border-radius: 28px;\n  color: rgb(255 1 97 );\n  background-color: var(--color-gray-75);\n}\n\n\n.goods__button-wrapper {\n  margin: 50px auto 0 auto;\n  display: grid;\n  grid-template-columns: repeat(4, auto);\n  justify-content: center;\n  align-items: center;\n}\n\n.button {\n  position: relative;\n  width: calc(0.8 * var(--width));\n  height: calc(0.5 * var(--height));\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n  overflow: hidden;\n  margin: 0 0.8rem;\n  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2), 0 3px 8px rgba(0, 0, 0, 0.1);\n  transition: all 0.3s cubic-bezier(0, 0.22, .3, 1);\n  border-radius: 28px;\n\n  &:before {\n    content: '';\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    background: rgba(0, 0, 0, 0.1);\n\n  }\n\n  span {\n    color: #fff;\n    font-size: fluid(16, 8);\n    z-index: 10;\n    text-transform: uppercase;\n    letter-spacing: 2px;\n    text-align: center;\n\n  }\n\n  &._1 {\n    background: #2980b9\n  }\n\n  &._2 {\n    background: #8e44ad\n  }\n\n  &._3 {\n    background: #16a085\n  }\n\n  &._4 {\n    background: #e74c3c\n  }\n\n\n  .back {\n    position: absolute;\n    width: 0;\n    height: 0;\n    filter: url(#filter);\n    border-radius: 50%;\n    z-index: 5;\n    transition: all 2.5s cubic-bezier(0.1, 0.22, .3, 1);\n  }\n\n  &._1 .back {\n    left: -50%;\n    top: -50%;\n    background: #27ae60;\n  }\n\n  &._2 .back {\n    right: -50%;\n    top: -50%;\n    background: #c0392b;\n  }\n\n  &._3 .back {\n    left: -50%;\n    bottom: -50%;\n    background: #34495e;\n  }\n\n  &._4 .back {\n    right: -50%;\n    bottom: -50%;\n    background: #2980b9;\n  }\n\n  &:hover .back {\n    width: calc(2 * var(--width));\n    height: calc(2 * var(--height));\n  }\n}\n\n@media only screen and (max-width: 750px) {\n  .goods__button-wrapper {\n    grid-template-columns: repeat(2, auto);\n    row-gap: 20px;\n  }\n  .button {\n    //margin: 0.8rem 0;\n  }\n}\n\n.contact__form {\n  padding: 35px 0;\n  background-color: #1E1E1E;\n  border-top-left-radius: 50px;\n  border-top-right-radius: 50px;\n  scroll-margin-top: fluid(200, 100);\n\n  &-title {\n    text-align: center;\n    font-size: fluid(40, 30);\n    font-weight: 700;\n    color: #9B6D44;\n  }\n\n  &-form {\n    font-size: fluid(18, 12);\n    padding: fluid(50, 10);\n    margin: 0 auto;\n    margin-top: 30px;\n    display: flex;\n    flex-direction: column;\n    row-gap: 20px;\n    border-radius: 20px;\n    width: fluid(600, 300);\n    box-shadow: 0 7px 25px 0 rgba(0, 0, 0, 0.6);\n\n    & input {\n      margin: 0 auto;\n      width: fluid(470, 240);\n      height: fluid(70, 40);\n      border: 1px solid rgb(255, 255, 255);\n      border-radius: 100px;\n      background: rgb(33, 33, 33);\n      padding: 20px;\n      color: white;\n    }\n\n    & textarea {\n      resize: none;\n      margin: 0 auto;\n      width: fluid(470, 240);\n      height: fluid(200, 100);\n      border: 1px solid rgb(255, 255, 255);\n      border-radius: 20px;\n      background: rgb(33, 33, 33);\n      padding: 20px;\n      color: white;\n    }\n\n    &-checkbox {\n      display: flex;\n      justify-content: space-between;\n      align-items: center;\n      margin: 0 20px;\n\n      & input {\n        width: 16px;\n        height: 16px;\n        margin: 0;\n      }\n\n      & span {\n        font-size: fluid(18, 8);\n        text-wrap: nowrap;\n      }\n    }\n\n\n    & button {\n      width: fluid(470, 240);\n      height: fluid(70, 40);\n      margin: 0 auto;\n      border-radius: 100px;\n      background: rgb(155, 109, 68);\n      font-weight: 600;\n\n      &:hover {\n        border: 1px solid rgb(155, 109, 68);\n        background-color: #1A1A1A;\n        color: #9B6D44;\n      }\n    }\n  }\n}\n\n.map {\n  position: relative;\n\n  &.container {\n    padding-inline: 0;\n  }\n}\n\n\n.marquee-wrap {\n  background: #9B6D44;\n  padding: fluid-to-laptop(15, 10) 0;\n  position: relative;\n  display: flex;\n  overflow: hidden;\n  gap: 42px;\n}\n\n.marquee-row {\n  flex-shrink: 0;\n  display: flex;\n  gap: 42px;\n  justify-content: space-around;\n  min-width: 100%;\n  animation: scroll 15s linear infinite;\n}\n\n.marquee-row-item {\n  text-transform: uppercase;\n  font-size: fluid(24, 18);\n  font-weight: 500;\n  line-height: 1.2;\n  -webkit-text-stroke: .3px white;\n  color: var(--color-white);\n  position: relative;\n  text-wrap: nowrap;\n}\n\n.marquee-row-item::before {\n  content: attr(data-name);\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 0;\n  height: 100%;\n  color: rgb(255 1 97);\n  -webkit-text-stroke: 1px transparent;\n  overflow: hidden;\n  transition: width .5s ease;\n}\n\n.marquee-row-item:hover::before {\n  width: 100%;\n}\n\n\n@keyframes scroll {\n  from {\n    transform: translateX(0);\n  }\n\n  to {\n    transform: translateX(calc(-100% - 42px));\n  }\n}\n\n.footer {\n  background-color: var(--color-black);\n  padding: fluid(30, 15) 0;\n  font-size: fluid-to-laptop(20, 16);\n\n  &__wrapper {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    column-gap: 10px;\n\n    &-left__logo {\n      width: calc(100% / 3);\n      padding-left: 10px;\n\n      & > img {\n        width: fluid(200, 120);\n        max-width: 200px;\n      }\n    }\n\n\n    &-center__description {\n      font-size: fluid-to-laptop(20, 16);\n      width: 80%;\n      text-align: center;\n      @include mobile {\n        display: none;\n      }\n    }\n\n\n    &-right__social {\n      padding-right: 10px;\n      width: calc(100% / 3);\n      display: flex;\n      justify-content: flex-end;\n      column-gap: 30px;\n\n      & svg {\n        &:hover {\n          color: #9B6D44;\n        }\n      }\n    }\n  }\n}\n\n\n\n\n","/**\n  Нормализация блочной модели\n */\n*,\n::before,\n::after {\n  box-sizing: border-box;\n}\n\n/**\n  Убираем внутренние отступы слева тегам списков,\n  у которых есть атрибут class\n */\n:where(ul, ol):where([class]) {\n  padding-left: 0;\n}\n\n/**\n  Убираем внешние отступы body и двум другим тегам,\n  у которых есть атрибут class\n */\nbody,\n:where(blockquote, figure):where([class]) {\n  margin: 0;\n}\n\n/**\n  Убираем внешние отступы вертикали нужным тегам,\n  у которых есть атрибут class\n */\n:where(\n  h1,\n  h2,\n  h3,\n  h4,\n  h5,\n  h6,\n  p,\n  ul,\n  ol,\n  dl\n):where([class]) {\n  margin-block: 0;\n}\n\n:where(dd[class]) {\n  margin-left: 0;\n}\n\n:where(fieldset[class]) {\n  margin-left: 0;\n  padding: 0;\n  border: none;\n}\n\n/**\n  Убираем стандартный маркер маркированному списку,\n  у которого есть атрибут class\n */\n:where(ul[class]) {\n  list-style: none;\n}\n\n:where(address[class]) {\n  font-style: normal;\n}\n\n/**\n  Обнуляем вертикальные внешние отступы параграфа,\n  объявляем локальную переменную для внешнего отступа вниз,\n  чтобы избежать взаимодействие с более сложным селектором\n */\np {\n  --paragraphMarginBottom: 24px;\n\n  margin-block: 0;\n}\n\n/**\n  Внешний отступ вниз для параграфа без атрибута class,\n  который расположен не последним среди своих соседних элементов\n */\np:where(:not([class]):not(:last-child)) {\n  margin-bottom: var(--paragraphMarginBottom);\n}\n\n\n/**\n  Упрощаем работу с изображениями и видео\n */\nimg,\nvideo {\n  display: block;\n  max-width: 100%;\n  height: auto;\n}\n\n/**\n  Наследуем свойства шрифт для полей ввода\n */\ninput,\ntextarea,\nselect,\nbutton {\n  font: inherit;\n}\n\nhtml {\n  /**\n    Пригодится в большинстве ситуаций\n    (когда, например, нужно будет \"прижать\" футер к низу сайта)\n   */\n  height: 100%;\n  /**\n    Убираем скачок интерфейса по горизонтали\n    при появлении / исчезновении скроллбара\n   */\n  scrollbar-gutter: stable;\n}\n\n/**\n  Плавный скролл\n */\nhtml,\n:has(:target) {\n  scroll-behavior: smooth;\n}\n\nbody {\n  /**\n    Пригодится в большинстве ситуаций\n    (когда, например, нужно будет \"прижать\" футер к низу сайта)\n   */\n  min-height: 100%;\n  /**\n    Унифицированный интерлиньяж\n   */\n  line-height: 1.5;\n}\n\n/**\n  Нормализация высоты элемента ссылки при его инспектировании в DevTools\n */\na:where([class]) {\n  display: inline-flex;\n}\n\n/**\n  Курсор-рука при наведении на элемент\n */\nbutton,\nlabel {\n  cursor: pointer;\n}\n\n/**\n  Приводим к единому цвету svg-элементы\n  (за исключением тех, у которых уже указан\n  атрибут fill со значением 'none' или начинается с 'url')\n */\n:where([fill]:not(\n  [fill=\"none\"],\n  [fill^=\"url\"]\n)) {\n  fill: currentColor;\n}\n\n/**\n  Приводим к единому цвету svg-элементы\n  (за исключением тех, у которых уже указан\n  атрибут stroke со значением 'none')\n */\n:where([stroke]:not(\n  [stroke=\"none\"],\n  [stroke^=\"url\"]\n)) {\n  stroke: currentColor;\n}\n\n/**\n  Чиним баг задержки смены цвета при взаимодействии с svg-элементами\n */\nsvg * {\n  transition-property: fill, stroke;\n}\n\n/**\n  Приведение рамок таблиц в классический 'collapse' вид\n */\n:where(table) {\n  border-collapse: collapse;\n  border-color: currentColor;\n}\n\n/**\n  Удаляем все анимации и переходы для людей,\n  которые предпочитают их не использовать\n */\n@media (prefers-reduced-motion: reduce) {\n  *,\n  ::before,\n  ::after {\n    animation-duration: 0.01ms !important;\n    animation-iteration-count: 1 !important;\n    transition-duration: 0.01ms !important;\n    scroll-behavior: auto !important;\n  }\n}\n","@use 'sass:math';\r\n@font-face {\r\n  font-family: 'Manrope';\r\n  src: url('../fonts/Manrope-Regular.woff2') format('woff2');\r\n  font-weight: 400;\r\n  font-style: normal;\r\n  font-display: swap;\r\n}\r\n\r\n@font-face {\r\n  font-family: 'Manrope';\r\n  src: url('../fonts/Manrope-Medium.woff2') format('woff2');\r\n  font-weight: 500;\r\n  font-style: normal;\r\n  font-display: swap;\r\n}\r\n\r\n@font-face {\r\n  font-family: 'Manrope';\r\n  src: url('../fonts/Manrope-SemiBold.woff2') format('woff2');\r\n  font-weight: 600;\r\n  font-style: normal;\r\n  font-display: swap;\r\n}\r\n\r\n@font-face {\r\n  font-family: 'Manrope';\r\n  src: url('../fonts/Manrope-Bold.woff2') format('woff2');\r\n  font-weight: 700;\r\n  font-style: normal;\r\n  font-display: swap;\r\n}\r\n\r\n$container-desktop-width: 1600;\r\n$container-laptop-width: 1280;\r\n\r\n\r\n@mixin hide {\r\n  opacity: 0;\r\n  visibility: hidden;\r\n}\r\n\r\n@mixin show {\r\n  opacity: 1;\r\n  visibility: visible;\r\n}\r\n\r\n@mixin abs-cover {\r\n  position: absolute;\r\n  inset: 0;\r\n}\r\n\r\n@mixin abs-center {\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  translate: -50% -50%;\r\n}\r\n\r\n@mixin abs-x {\r\n  position: absolute;\r\n  left: 50%;\r\n  translate: -50%;\r\n}\r\n\r\n@mixin abs-y {\r\n  position: absolute;\r\n  top: 50%;\r\n  translate: 0 -50%;\r\n}\r\n\r\n@mixin visually-hidden {\r\n  position: absolute !important;\r\n  width: 1px !important;\r\n  height: 1px !important;\r\n  margin: -1px !important;\r\n  border: 0 !important;\r\n  padding: 0 !important;\r\n  white-space: nowrap !important;\r\n  clip-path: inset(100%) !important;\r\n  clip: rect(0 0 0 0) !important;\r\n  overflow: hidden !important;\r\n}\r\n\r\n@mixin focus-visible {\r\n  outline: 2px dashed var(--color-white);\r\n  outline-offset: 4px;\r\n  transition-duration: 0s !important;\r\n}\r\n\r\n@mixin disabled {\r\n  opacity: 0.5;\r\n  cursor: not-allowed;\r\n}\r\n\r\n\r\n$laptop:   1440px;\r\n$tablet:   1023px;\r\n$mobile:   767px;\r\n$mobile-s: 480px;\r\n\r\n@mixin laptop-above {\r\n  @media (width > $laptop) {\r\n    @content;\r\n  }\r\n}\r\n\r\n@mixin laptop {\r\n  @media (width <= $laptop) {\r\n    @content;\r\n  }\r\n}\r\n\r\n@mixin tablet-above {\r\n  @media (width > $tablet) {\r\n    @content;\r\n  }\r\n}\r\n\r\n@mixin tablet {\r\n  @media (width <= $tablet) {\r\n    @content;\r\n  }\r\n}\r\n\r\n@mixin mobile-above {\r\n  @media (width > $mobile) {\r\n    @content;\r\n  }\r\n}\r\n\r\n@mixin mobile {\r\n  @media (width <= $mobile) {\r\n    @content;\r\n  }\r\n}\r\n\r\n@mixin mobile-s-above {\r\n  @media (width > $mobile-s) {\r\n    @content;\r\n  }\r\n}\r\n\r\n@mixin mobile-s {\r\n  @media (width <= $mobile-s) {\r\n    @content;\r\n  }\r\n}\r\n\r\n@mixin hover($hasActiveEffectOnMobile: true) {\r\n  @media (any-hover: hover) {\r\n    &:hover {\r\n      @content;\r\n    }\r\n  }\r\n\r\n  @if ($hasActiveEffectOnMobile) {\r\n    @media (any-hover: none) {\r\n      &:active {\r\n        @content;\r\n      }\r\n    }\r\n  }\r\n}\r\n\r\n$container-desktop-width: 1600;\r\n$container-laptop-width: 1280;\r\n\r\n\r\n@function fluid($max: 100, $min: 10, $isEndOfLaptop: false) {\r\n  $maxViewportWidth: $container-desktop-width;\r\n  $minViewportWidth: 390;\r\n\r\n  @if ($isEndOfLaptop) {\r\n    $minViewportWidth: $container-laptop-width;\r\n  }\r\n\r\n  $maxSize: math.div($max, 16);\r\n  $minSize: math.div($min, 16);\r\n  $maxWidth: math.div($maxViewportWidth, 16);\r\n  $minWidth: math.div($minViewportWidth, 16);\r\n\r\n  $slope: math.div(($maxSize - $minSize), ($maxWidth - $minWidth));\r\n  $yAxisIntersections: -$minWidth * $slope + $minSize;\r\n\r\n  @return clamp(\r\n          #{$minSize * 1rem},\r\n          #{$yAxisIntersections * 1rem} + #{$slope * 100vw},\r\n          #{$maxSize * 1rem}\r\n  );\r\n}\r\n\r\n@function fluid-to-laptop($max: 100, $min: 10) {\r\n  @return fluid($max, $min, true)\r\n}\r\n\r\n.visually-hidden {\r\n  @include visually-hidden;\r\n}\r\n\r\n.visible-tablet {\r\n  @include tablet-above {\r\n    display: none !important;\r\n  }\r\n}\r\n\r\n.hidden-tablet {\r\n  @include tablet {\r\n    display: none !important;\r\n  }\r\n}\r\n\r\n.visible-mobile {\r\n  @include mobile-above {\r\n    display: none !important;\r\n  }\r\n}\r\n\r\n.hidden-mobile {\r\n  @include mobile {\r\n    display: none !important;\r\n  }\r\n}","$container-desktop-width: 1600;\r\n$container-laptop-width: 1280;\r\n\r\n:root {\r\n  --color-white: #ffffff;\r\n  --color-black: #000000;\r\n\r\n  --color-red-45: #E50000;\r\n  --color-red-50: #FF0000;\r\n  --color-red-55: #FF1919;\r\n  --color-red-60: #FF3333;\r\n  --color-red-80: #FF9999;\r\n  --color-red-90: #FFCCCC;\r\n  --color-red-95: #FFE5E5;\r\n  --color-red-99: #FFFAFA;\r\n\r\n  --color-black-06: #0F0F0F;\r\n  --color-black-08: #141414;\r\n  --color-black-10: #1A1A1A;\r\n  --color-black-12: #1F1F1F;\r\n  --color-black-15: #262626;\r\n  --color-black-20: #333333;\r\n  --color-black-25: #404040;\r\n  --color-black-30: #4C4C4C;\r\n\r\n  --color-gray-60: #999999;\r\n  --color-gray-65: #A6A6A6;\r\n  --color-gray-70: #B3B3B3;\r\n  --color-gray-75: #BFBFBF;\r\n  --color-gray-90: #E4E4E7;\r\n  --color-gray-95: #F1F1F3;\r\n  --color-gray-97: #F7F7F8;\r\n  --color-gray-99: #FCFCFD;\r\n\r\n  --border: var(--border-width-s) solid var(--color-black-15);\r\n\r\n  --border-width-l: 4px;\r\n  --border-width-m: 3px;\r\n  --border-width-s: 1px;\r\n\r\n  --border-radius-l: 12px;\r\n  --border-radius-m: 10px;\r\n  --border-radius-s: 8px;\r\n  --border-radius-xs: 6px;\r\n  --border-radius-xxs: 5px;\r\n  --border-radius-xxxs: 4px;\r\n\r\n  --font-family-base: 'Manrope', sans-serif;\r\n\r\n\r\n  --container-width: #{fluid-to-laptop(\r\n    $container-desktop-width,\r\n    $container-laptop-width\r\n  )};\r\n  --container-padding-x: 16px;\r\n\r\n  --section-padding-y: #{fluid(75, 40)};\r\n\r\n  --transition-duration: 0.2s;\r\n  --transition-duration-longer: 0.4s;\r\n}","@use './fontsAndMedia' as *;\r\n@mixin fluid-text($max: 48, $min: 16) {\r\n  font-size: fluid($max, $min);\r\n}\r\nhtml {\r\n  scroll-behavior: smooth;\r\n\r\n  &.is-lock {\r\n    overflow: hidden;\r\n  }\r\n}\r\n\r\nbody {\r\n  @include fluid-text(18, 14);\r\n\r\n  display: flex;\r\n  flex-direction: column;\r\n  font-family: var(--font-family-base);\r\n  color: var(--color-white);\r\n  background-color: var(--color-gray-95);\r\n}\r\n\r\nmain {\r\n  flex-grow: 1;\r\n}\r\n\r\nh1, .h1,\r\nh2, .h2,\r\nh3, .h3,\r\nh4, .h4,\r\nh5, .h5,\r\nh6, .h6 {\r\n  color: var(--color-white);\r\n}\r\n\r\nh1, .h1 {\r\n  @include fluid-text(58, 28);\r\n\r\n  font-weight: 700;\r\n}\r\n\r\nh2, .h2 {\r\n  @include fluid-text(48, 24);\r\n\r\n  font-weight: 700;\r\n}\r\n\r\nh3, .h3 {\r\n  @include fluid-text(38, 20);\r\n\r\n  font-weight: 700;\r\n}\r\n\r\nh4, .h4 {\r\n  @include fluid-text(24, 18);\r\n\r\n  font-weight: 600;\r\n}\r\n\r\nh5, .h5 {\r\n  @include fluid-text(22, 18);\r\n\r\n  font-weight: 500;\r\n}\r\n\r\nh6, .h6 {\r\n  @include fluid-text(20, 16);\r\n\r\n  font-weight: 600;\r\n}\r\n\r\na,\r\nbutton,\r\nlabel,\r\ninput,\r\ntextarea,\r\nselect,\r\nsvg * {\r\n  transition-duration: var(--transition-duration);\r\n}\r\n\r\na {\r\n  color: inherit;\r\n\r\n  @include hover {\r\n    color: rgb(255, 1, 97);\r\n  }\r\n\r\n  &[class] {\r\n    text-decoration: none;\r\n  }\r\n}\r\n\r\n:focus-visible {\r\n  @include focus-visible;\r\n}\r\n\r\n\r\n\r\n",".thankyou {\r\n  width: 100vw;\r\n  height: 100vh;\r\n  background-color: var(--color-black);\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  text-align: center;\r\n\r\n  &__block {\r\n    width: 80%;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-content: flex-end;\r\n    margin: 0 auto;\r\n  }\r\n\r\n  h2 {\r\n    font-size: 36px;\r\n    margin-bottom: 20px;\r\n    color: #9B6D44;\r\n  }\r\n\r\n  p {\r\n    font-size: 18px;\r\n    margin-bottom: 30px;\r\n  }\r\n\r\n  a {\r\n    font-weight: bold;\r\n    text-decoration: underline;\r\n    color: #fff;\r\n  }\r\n}\r\n\r\n",null],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/ThankYou.html":
/*!***************************!*\
  !*** ./src/ThankYou.html ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// Module
var code = `<!doctype html>
<html lang="ua" xmlns="http://www.w3.org/1999/html">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Дякуємо!</title>
</head>
<body>
<section class="thankyou container">
    <div class="thankyou__block">
        <h2>Дякуємо!</h2>
        <p>Ваше повідомлення надіслано. Ми зв’яжемося з вами найближчим часом.</p>
        <a href="/">Повернутися на головну</a>
    </div>
</section>
</body>
</html>`;
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);

/***/ }),

/***/ "./src/fonts/Manrope-Bold.woff2":
/*!**************************************!*\
  !*** ./src/fonts/Manrope-Bold.woff2 ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fonts/Manrope-Bold.woff2";

/***/ }),

/***/ "./src/fonts/Manrope-Medium.woff2":
/*!****************************************!*\
  !*** ./src/fonts/Manrope-Medium.woff2 ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fonts/Manrope-Medium.woff2";

/***/ }),

/***/ "./src/fonts/Manrope-Regular.woff2":
/*!*****************************************!*\
  !*** ./src/fonts/Manrope-Regular.woff2 ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fonts/Manrope-Regular.woff2";

/***/ }),

/***/ "./src/fonts/Manrope-SemiBold.woff2":
/*!******************************************!*\
  !*** ./src/fonts/Manrope-SemiBold.woff2 ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fonts/Manrope-SemiBold.woff2";

/***/ }),

/***/ "./src/img/fairy.png":
/*!***************************!*\
  !*** ./src/img/fairy.png ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/fairy.png";

/***/ }),

/***/ "./src/img/hot1.jpg":
/*!**************************!*\
  !*** ./src/img/hot1.jpg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/hot1.jpg";

/***/ }),

/***/ "./src/img/hot2.jpg":
/*!**************************!*\
  !*** ./src/img/hot2.jpg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/hot2.jpg";

/***/ }),

/***/ "./src/img/hot3.jpg":
/*!**************************!*\
  !*** ./src/img/hot3.jpg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/hot3.jpg";

/***/ }),

/***/ "./src/img/hot4.jpg":
/*!**************************!*\
  !*** ./src/img/hot4.jpg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/hot4.jpg";

/***/ }),

/***/ "./src/img/logo.png":
/*!**************************!*\
  !*** ./src/img/logo.png ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/logo.png";

/***/ }),

/***/ "./src/index.html":
/*!************************!*\
  !*** ./src/index.html ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// Imports
var ___HTML_LOADER_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../static/apple-touch-icon.png */ "./static/apple-touch-icon.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../static/favicon-32x32.png */ "./static/favicon-32x32.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../static/favicon-16x16.png */ "./static/favicon-16x16.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ./img/logo.png */ "./src/img/logo.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ./img/hot1.jpg */ "./src/img/hot1.jpg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! ./img/hot2.jpg */ "./src/img/hot2.jpg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_6___ = new URL(/* asset import */ __webpack_require__(/*! ./img/hot3.jpg */ "./src/img/hot3.jpg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_7___ = new URL(/* asset import */ __webpack_require__(/*! ./img/hot4.jpg */ "./src/img/hot4.jpg"), __webpack_require__.b);
// Module
var code = `<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Чисто Тут</title>
    <link rel="apple-touch-icon" sizes="180x180" href="${___HTML_LOADER_IMPORT_0___}"/>
    <link rel="icon" type="image/png" sizes="32x32" href="${___HTML_LOADER_IMPORT_1___}"/>
    <link rel="icon" type="image/png" sizes="16x16" href="${___HTML_LOADER_IMPORT_2___}"/>

</head>
<body>

<header id="header">
    <div class="header container">

        <button
                class="burger-button visible-tablet"
                type="button"
                aria-label="Open menu"
                title="Open menu"
                data-js-overlay-burger-button=''
        >
            <svg class="burger-button__svg" width="30" height="30" viewBox="0 0 100 100">
                <path class="burger-button__line burger-button__line--1"
                      d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058"/>
                <path class="burger-button__line burger-button__line--2" d="M 20,50 H 80"/>
                <path class="burger-button__line burger-button__line--3"
                      d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942"/>
            </svg>
        </button>

        <div class="header__wrapper">

            <div class="header__wrapper-left">
                <div class="header__wrapper-left__logo">
                    <img src="${___HTML_LOADER_IMPORT_3___}" alt="logo"/>
                </div>

                <div class="header__wrapper-left__time-work">
                    <p>Графік роботи: <br/>
                        з 10:00 до 21:00</p>
                </div>

                <div class="header__wrapper-left__social">
                    <a href="https://invite.viber.com/?g2=AQAev2wayRoYZEvVqoUcMpP18uwJuoIccSIgziqIjPG2uMVyr3mNPn9ySdIyyDIF"
                       target='_blank'>
                        <svg width="30" height="30" viewBox="0 0 30 30" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <path
                                    d="M22.1985 17.2384C22.14 17.2104 19.9529 16.1334 19.5643 15.9935C19.4056 15.9365 19.2357 15.8809 19.0549 15.8809C18.7596 15.8809 18.5115 16.0281 18.3182 16.3172C18.0998 16.6419 17.4384 17.415 17.234 17.646C17.2073 17.6764 17.1709 17.7129 17.1491 17.7129C17.1295 17.7129 16.791 17.5735 16.6886 17.529C14.3424 16.5099 12.5616 14.0591 12.3174 13.6458C12.2826 13.5864 12.2811 13.5594 12.2808 13.5594C12.2894 13.528 12.3683 13.4489 12.409 13.4081C12.5281 13.2902 12.6572 13.1348 12.7821 12.9846C12.8412 12.9134 12.9004 12.8421 12.9585 12.7748C13.1397 12.5641 13.2204 12.4004 13.3139 12.2109L13.3629 12.1124C13.5912 11.6588 13.3962 11.276 13.3332 11.1524C13.2814 11.049 12.358 8.82021 12.2598 8.58605C12.0237 8.02102 11.7117 7.75793 11.2782 7.75793C11.2379 7.75793 11.2782 7.75793 11.1095 7.76504C10.904 7.77371 9.78537 7.92099 9.29076 8.23277C8.76624 8.56345 7.87891 9.61755 7.87891 11.4713C7.87891 13.1397 8.93767 14.715 9.39225 15.3141C9.40355 15.3292 9.4243 15.3599 9.45439 15.4039C11.1953 17.9463 13.3655 19.8305 15.5655 20.7094C17.6835 21.5554 18.6865 21.6532 19.2567 21.6532H19.2568C19.4964 21.6532 19.6882 21.6344 19.8574 21.6177L19.9647 21.6075C20.6964 21.5426 22.3043 20.7095 22.6701 19.6931C22.9582 18.8925 23.0342 18.0178 22.8425 17.7004C22.7112 17.4846 22.4849 17.376 22.1985 17.2384Z"
                                    fill="white"/>
                            <path
                                    d="M15.2663 0C7.14134 0 0.531211 6.56045 0.531211 14.6243C0.531211 17.2325 1.2292 19.7855 2.55144 22.0199L0.0206267 29.4853C-0.0265161 29.6245 0.0085488 29.7784 0.111503 29.8832C0.185822 29.9591 0.286633 30 0.389588 30C0.429036 30 0.468776 29.9941 0.507542 29.9817L8.29196 27.508C10.4222 28.6462 12.8298 29.247 15.2664 29.247C23.3905 29.2471 30 22.6873 30 14.6243C30 6.56045 23.3905 0 15.2663 0ZM15.2663 26.2007C12.9735 26.2007 10.7528 25.5387 8.84394 24.2861C8.77975 24.2439 8.70524 24.2223 8.63024 24.2223C8.59059 24.2223 8.55085 24.2283 8.51219 24.2406L4.61267 25.4801L5.8715 21.7663C5.91222 21.6461 5.89186 21.5135 5.81686 21.411C4.36322 19.4248 3.59482 17.0781 3.59482 14.6243C3.59482 8.24026 8.8306 3.04636 15.2662 3.04636C21.701 3.04636 26.9362 8.24026 26.9362 14.6243C26.9363 21.0076 21.7012 26.2007 15.2663 26.2007Z"
                                    fill="white"/>
                        </svg>
                    </a>
                    <a href="#">
                        <svg width="30" height="30" viewBox="0 0 30 30" fill="white"
                             xmlns="http://www.w3.org/2000/svg">
                            <path
                                    d="M21.7209 0H8.27874C3.71384 0 0 3.71402 0 8.27892V21.7211C0 26.2862 3.71384 30 8.27874 30H21.7209C26.2862 30 30 26.286 30 21.7211V8.27892C30.0002 3.71402 26.2862 0 21.7209 0ZM27.3384 21.7211C27.3384 24.8185 24.8185 27.3383 21.7211 27.3383H8.27874C5.18153 27.3384 2.66175 24.8185 2.66175 21.7211V8.27892C2.66175 5.18171 5.18153 2.66175 8.27874 2.66175H21.7209C24.8183 2.66175 27.3383 5.18171 27.3383 8.27892V21.7211H27.3384Z"
                                    fill="white"/>
                            <path
                                    d="M15.0003 7.27011C10.7377 7.27011 7.27002 10.7378 7.27002 15.0004C7.27002 19.2627 10.7377 22.7302 15.0003 22.7302C19.2628 22.7302 22.7305 19.2627 22.7305 15.0004C22.7305 10.7378 19.2628 7.27011 15.0003 7.27011ZM15.0003 20.0683C12.2056 20.0683 9.93176 17.7948 9.93176 15.0002C9.93176 12.2053 12.2054 9.93168 15.0003 9.93168C17.7951 9.93168 20.0688 12.2053 20.0688 15.0002C20.0688 17.7948 17.7949 20.0683 15.0003 20.0683Z"
                                    fill="white"/>
                            <path
                                    d="M23.0545 5.01312C22.5417 5.01312 22.0379 5.22074 21.6757 5.58451C21.3118 5.94651 21.1025 6.45046 21.1025 6.96507C21.1025 7.47808 21.3119 7.98186 21.6757 8.34563C22.0377 8.70762 22.5417 8.91702 23.0545 8.91702C23.5691 8.91702 24.0713 8.70762 24.435 8.34563C24.7988 7.98186 25.0064 7.4779 25.0064 6.96507C25.0064 6.45046 24.7988 5.94651 24.435 5.58451C24.073 5.22074 23.5691 5.01312 23.0545 5.01312Z"
                                    fill="white"/>
                        </svg>
                    </a>
                </div>
            </div>

            <div class="header__wrapper-right">
                <a
                        href='https://maps.app.goo.gl/penRGVMuGhPfxDhn6'
                        target='_blank'
                        class="header__wrapper-right__address">
                    <svg width="34" height="34" viewBox="0 0 34 34" fill="white"
                         xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_124_185)">
                            <path
                                    d="M17.0002 8.5C15.8794 8.5 14.7838 8.83234 13.8519 9.45501C12.9201 10.0777 12.1937 10.9627 11.7648 11.9981C11.336 13.0336 11.2237 14.173 11.4424 15.2722C11.661 16.3714 12.2007 17.3811 12.9932 18.1736C13.7857 18.9661 14.7954 19.5058 15.8947 19.7245C16.9939 19.9431 18.1333 19.8309 19.1687 19.402C20.2042 18.9731 21.0892 18.2468 21.7118 17.3149C22.3345 16.383 22.6668 15.2874 22.6668 14.1667C22.6668 12.6638 22.0698 11.2224 21.0071 10.1597C19.9444 9.09702 18.5031 8.5 17.0002 8.5ZM17.0002 17C16.4398 17 15.892 16.8338 15.4261 16.5225C14.9601 16.2112 14.597 15.7687 14.3825 15.2509C14.1681 14.7332 14.1119 14.1635 14.2213 13.6139C14.3306 13.0643 14.6004 12.5594 14.9967 12.1632C15.3929 11.7669 15.8978 11.4971 16.4474 11.3878C16.997 11.2785 17.5667 11.3346 18.0844 11.549C18.6022 11.7635 19.0447 12.1266 19.356 12.5926C19.6673 13.0585 19.8335 13.6063 19.8335 14.1667C19.8335 14.9181 19.535 15.6388 19.0036 16.1701C18.4723 16.7015 17.7516 17 17.0002 17Z"
                                    fill="white"/>
                            <path
                                    d="M17 34C15.807 34.0061 14.63 33.7263 13.5675 33.1841C12.5049 32.6418 11.5877 31.8529 10.8927 30.8834C5.49379 23.4359 2.75537 17.8373 2.75537 14.2418C2.75537 10.4639 4.25614 6.84071 6.92751 4.16933C9.59889 1.49796 13.2221 -0.00280762 17 -0.00280762C20.7779 -0.00280762 24.401 1.49796 27.0724 4.16933C29.7438 6.84071 31.2445 10.4639 31.2445 14.2418C31.2445 17.8373 28.5061 23.4359 23.1072 30.8834C22.4122 31.8529 21.495 32.6418 20.4324 33.1841C19.3699 33.7263 18.1929 34.0061 17 34ZM17 3.08978C14.0425 3.09315 11.2072 4.26947 9.11602 6.36068C7.02482 8.45188 5.8485 11.2872 5.84512 14.2446C5.84512 17.0921 8.52687 22.3579 13.3945 29.0714C13.8078 29.6406 14.3499 30.1039 14.9765 30.4233C15.6032 30.7428 16.2966 30.9093 17 30.9093C17.7033 30.9093 18.3967 30.7428 19.0234 30.4233C19.65 30.1039 20.1921 29.6406 20.6054 29.0714C25.473 22.3579 28.1548 17.0921 28.1548 14.2446C28.1514 11.2872 26.9751 8.45188 24.8839 6.36068C22.7927 4.26947 19.9574 3.09315 17 3.08978Z"
                                    fill="white"/>
                        </g>
                        <defs>
                            <clipPath id="clip0_124_185">
                                <rect width="34" height="34" fill="white"/>
                            </clipPath>
                        </defs>
                    </svg>
                    <p> Київ, Кільцева дор., 12<br/> магазин Новус</p>
                </a>
                <a class="header__wrapper-right__phone" href="tel:+380969090877">
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none"
                         xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_124_181)">
                            <path
                                    d="M8.12499 0.624991C8.12499 0.459231 8.19084 0.30026 8.30805 0.183049C8.42526 0.065839 8.58423 -8.97539e-06 8.74999 -8.97539e-06C10.407 0.00181077 11.9957 0.660875 13.1674 1.83258C14.3391 3.00429 14.9982 4.59295 15 6.24999C15 6.41575 14.9341 6.57472 14.8169 6.69193C14.6997 6.80914 14.5408 6.87499 14.375 6.87499C14.2092 6.87499 14.0503 6.80914 13.933 6.69193C13.8158 6.57472 13.75 6.41575 13.75 6.24999C13.7485 4.92437 13.2212 3.65346 12.2839 2.7161C11.3465 1.77874 10.0756 1.25148 8.74999 1.24999C8.58423 1.24999 8.42526 1.18414 8.30805 1.06693C8.19084 0.949722 8.12499 0.790751 8.12499 0.624991ZM8.74999 3.74999C9.41303 3.74999 10.0489 4.01338 10.5178 4.48222C10.9866 4.95106 11.25 5.58695 11.25 6.24999C11.25 6.41575 11.3158 6.57472 11.433 6.69193C11.5503 6.80914 11.7092 6.87499 11.875 6.87499C12.0408 6.87499 12.1997 6.80914 12.3169 6.69193C12.4341 6.57472 12.5 6.41575 12.5 6.24999C12.499 5.25573 12.1036 4.30248 11.4005 3.59944C10.6975 2.89639 9.74425 2.50098 8.74999 2.49999C8.58423 2.49999 8.42526 2.56584 8.30805 2.68305C8.19084 2.80026 8.12499 2.95923 8.12499 3.12499C8.12499 3.29075 8.19084 3.44972 8.30805 3.56693C8.42526 3.68414 8.58423 3.74999 8.74999 3.74999ZM14.4331 10.4619C14.7953 10.8251 14.9987 11.3171 14.9987 11.83C14.9987 12.3429 14.7953 12.8349 14.4331 13.1981L13.8644 13.8537C8.74562 18.7544 -3.71063 6.30124 1.11437 1.16624L1.83312 0.541241C2.19672 0.189164 2.68432 -0.0056033 3.19043 -0.000924699C3.69654 0.0037539 4.18046 0.207502 4.53749 0.566241C4.55687 0.585616 5.71499 2.08999 5.71499 2.08999C6.05863 2.45101 6.24993 2.93057 6.24912 3.42899C6.2483 3.92741 6.05544 4.40635 5.71062 4.76624L4.98687 5.67624C5.3874 6.64944 5.97628 7.53389 6.71968 8.2788C7.46309 9.0237 8.34636 9.61437 9.31874 10.0169L10.2344 9.28874C10.5943 8.94419 11.0732 8.75155 11.5714 8.75085C12.0697 8.75015 12.5491 8.94145 12.91 9.28499C12.91 9.28499 14.4137 10.4425 14.4331 10.4619ZM13.5731 11.3706C13.5731 11.3706 12.0775 10.22 12.0581 10.2006C11.9294 10.0729 11.7554 10.0013 11.5741 10.0013C11.3927 10.0013 11.2188 10.0729 11.09 10.2006C11.0731 10.2181 9.81249 11.2225 9.81249 11.2225C9.72754 11.2901 9.62644 11.3344 9.51915 11.3511C9.41185 11.3677 9.30207 11.3562 9.20062 11.3175C7.9409 10.8485 6.7967 10.1142 5.84551 9.16441C4.89432 8.21463 4.15837 7.07151 3.68749 5.81249C3.64574 5.70965 3.63213 5.59755 3.64806 5.4877C3.66398 5.37786 3.70888 5.27424 3.77812 5.18749C3.77812 5.18749 4.78249 3.92624 4.79937 3.90999C4.92703 3.78123 4.99867 3.60725 4.99867 3.42593C4.99867 3.24461 4.92703 3.07062 4.79937 2.94187C4.77999 2.92312 3.62937 1.42624 3.62937 1.42624C3.49868 1.30906 3.32812 1.2463 3.15265 1.25083C2.97717 1.25536 2.81008 1.32684 2.68562 1.45062L1.96687 2.07562C-1.55938 6.31562 9.23499 16.5112 12.9506 13L13.52 12.3437C13.6534 12.2202 13.7336 12.0495 13.7435 11.8679C13.7534 11.6863 13.6923 11.508 13.5731 11.3706Z"
                                    fill="white"/>
                        </g>
                        <defs>
                            <clipPath id="clip0_124_181">
                                <rect width="15" height="15" fill="white"/>
                            </clipPath>
                        </defs>
                    </svg>
                    096 909 08 77
                </a>

            </div>
        </div>
    </div>


    <dialog class="header__dialog" data-js-overlay-dialog=''>
        <nav class="header__menu">
            <a href="#slider" class="header__menu-item">Головна</a>
            <a href="#AbotUs" class="header__menu-item"> Про нас</a>
            <a href="#goods" class="header__menu-item">Товари</a>
            <a href="#contact" class="header__menu-item">Замовити</a>
        </nav>
    </dialog>
</header>

<section id="slider" class="slider container">
    <div class="container"></div>
    <div class="slider__wrapper">
        <img src="${___HTML_LOADER_IMPORT_4___}" class="slider__image active" alt="slide 1"/>
        <img src="${___HTML_LOADER_IMPORT_5___}" class="slider__image" alt="slide 2"/>
        <img src="${___HTML_LOADER_IMPORT_6___}" class="slider__image" alt="slide 3"/>
        <img src="${___HTML_LOADER_IMPORT_7___}" class="slider__image" alt="slide 4"/>
    </div>
    </div>
</section>

<section
        id="AbotUs"
        class="about container">
    <h1 class="about__title">Чисто ТуТ</h1>
    <p class="about__description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum, error est,
        exercitationem facere facilis harum ipsa ipsam labore nobis odio, officia quos rem sed ullam voluptas.
        Inventore magni maxime similique!</p>
</section>

<section
        id="goods"
        class="goods container">
    <h3 class="goods__title">Продукція</h3>

    <div class="goods__button-wrapper">
        <div class="button _1">
            <span>Моющие стредства</span>
            <div class="back"></div>
        </div>
        <div class="button _2">
            <span>Стриральные порошки</span>
            <div class="back"></div>
        </div>
        <div class="button _3">
            <span>Зубные пасты</span>
            <div class="back"></div>
        </div>
        <div class="button _4">
            <span>Вся продукция</span>
            <div class="back"></div>
        </div>
    </div>

    <div class="goods__catalog-wrapper"></div>
    <div class="goods__catalog-wrapper__pagination">
        <button class='goods__catalog-wrapper__pagination-prev' id="prev">&laquo;</button>
        <span class='goods__catalog-wrapper__pagination-info' id="page-info"></span>
        <button class='goods__catalog-wrapper__pagination-next' id="next">&raquo;</button>
    </div>
</section>

<section
        id="contact"
        class="contact__form container">
    <h4 class="contact__form-title">Зробити замовлення</h4>
    <form
            class="contact__form-form"
            action="https://formsubmit.co/apxeu@i.ua"
            method="POST"
    >

        <label>
            <input type="text" name="firstName" placeholder="Имя" required/>
        </label>
        <label>
            <input type="text" name="lastName" placeholder="Фамилия"/>
        </label>
        <label>
            <input type="email" name="email" placeholder="Email" required/>
        </label>
        <label>
            <input
                    type="tel"
                    name="phone"
                    placeholder="+380"
                    required
                    minLength="10"
                    maxLength="13"
                    pattern="\\+?[0-9\\s\\-]{10,13}"
            />
        </label>
        <label>
            <textarea name="message" placeholder="Ваше сообщение"></textarea>
        </label>

        <label class="contact__form-form-checkbox">
            <input type="checkbox" name="consent" required/>
            <span>Соглашаюсь на обработку персональных данных</span>
        </label>

        <input type="hidden" name="_captcha" value="false"/>
        <input type="hidden" name="_next" value="ThankYou.html" />

        <button type="submit">Замовити</button>
    </form>
</section>

<section class="map container">
    <iframe   src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2542.8682202584187!2d30.395791576554583!3d50.40629347158371!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4cbde929be62f%3A0x8872ff5670c19215!2z0JrQvtC70YzRhtC10LLQsNGPINC00L7RgC4sIDEyLCDQmtC40LXQsiwgMDMxMzQ!5e0!3m2!1sru!2sua!4v1744119878961!5m2!1sru!2sua"
            width="100%"
            height="300"
            style='border: 0'
            allowFullScreen
            loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"></iframe>
</section>

<section class="marquee-wrap">
    <div class="marquee-row">
        <div class="marquee-row-item" data-name="axe +">axe</div>
        <div class="marquee-row-item" data-name="+">+</div>
        <div class="marquee-row-item" data-name="always +">always</div>
        <div class="marquee-row-item" data-name="+">+</div>
        <div class="marquee-row-item" data-name="ariel +">ariel</div>
        <div class="marquee-row-item" data-name="+">+</div>
        <div class="marquee-row-item" data-name="fairy  +">fairy</div>
        <div class="marquee-row-item" data-name="+">+</div>
        <div class="marquee-row-item" data-name="colgate +">colgate</div>
        <div class="marquee-row-item" data-name="+">+</div>
        <div class="marquee-row-item" data-name="domestos +">domestos</div>
        <div class="marquee-row-item" data-name="+">+</div>
    </div>
    <div class="marquee-row">
        <div class="marquee-row-item" data-name="axe +">axe</div>
        <div class="marquee-row-item" data-name="+">+</div>
        <div class="marquee-row-item" data-name="always +">always</div>
        <div class="marquee-row-item" data-name="+">+</div>
        <div class="marquee-row-item" data-name="ariel +">ariel</div>
        <div class="marquee-row-item" data-name="+">+</div>
        <div class="marquee-row-item" data-name="fairy  +">fairy</div>
        <div class="marquee-row-item" data-name="+">+</div>
        <div class="marquee-row-item" data-name="colgate +">colgate</div>
        <div class="marquee-row-item" data-name="+">+</div>
        <div class="marquee-row-item" data-name="domestos +">domestos</div>
        <div class="marquee-row-item" data-name="+">+</div>
    </div>

</section>

<footer class="footer">

    <div class="footer__wrapper">

        <div class="footer__wrapper-left__logo">
            <img src="${___HTML_LOADER_IMPORT_3___}" alt="logo"/>
        </div>

        <div class="footer__wrapper-center__description">
            <p>© 2025 магазин «Чисто ТУТ» — затишок вашої оселі — використовується на підставі ліцензії
                правовласника</p>
        </div>

        <div class="footer__wrapper-right__social">
            <a href="https://invite.viber.com/?g2=AQAev2wayRoYZEvVqoUcMpP18uwJuoIccSIgziqIjPG2uMVyr3mNPn9ySdIyyDIF"
               target='_blank'>
                <svg width="30" height="30" viewBox="0 0 30 30" fill="none"
                     xmlns="http://www.w3.org/2000/svg">
                    <path
                            d="M22.1985 17.2384C22.14 17.2104 19.9529 16.1334 19.5643 15.9935C19.4056 15.9365 19.2357 15.8809 19.0549 15.8809C18.7596 15.8809 18.5115 16.0281 18.3182 16.3172C18.0998 16.6419 17.4384 17.415 17.234 17.646C17.2073 17.6764 17.1709 17.7129 17.1491 17.7129C17.1295 17.7129 16.791 17.5735 16.6886 17.529C14.3424 16.5099 12.5616 14.0591 12.3174 13.6458C12.2826 13.5864 12.2811 13.5594 12.2808 13.5594C12.2894 13.528 12.3683 13.4489 12.409 13.4081C12.5281 13.2902 12.6572 13.1348 12.7821 12.9846C12.8412 12.9134 12.9004 12.8421 12.9585 12.7748C13.1397 12.5641 13.2204 12.4004 13.3139 12.2109L13.3629 12.1124C13.5912 11.6588 13.3962 11.276 13.3332 11.1524C13.2814 11.049 12.358 8.82021 12.2598 8.58605C12.0237 8.02102 11.7117 7.75793 11.2782 7.75793C11.2379 7.75793 11.2782 7.75793 11.1095 7.76504C10.904 7.77371 9.78537 7.92099 9.29076 8.23277C8.76624 8.56345 7.87891 9.61755 7.87891 11.4713C7.87891 13.1397 8.93767 14.715 9.39225 15.3141C9.40355 15.3292 9.4243 15.3599 9.45439 15.4039C11.1953 17.9463 13.3655 19.8305 15.5655 20.7094C17.6835 21.5554 18.6865 21.6532 19.2567 21.6532H19.2568C19.4964 21.6532 19.6882 21.6344 19.8574 21.6177L19.9647 21.6075C20.6964 21.5426 22.3043 20.7095 22.6701 19.6931C22.9582 18.8925 23.0342 18.0178 22.8425 17.7004C22.7112 17.4846 22.4849 17.376 22.1985 17.2384Z"
                            fill="white"/>
                    <path
                            d="M15.2663 0C7.14134 0 0.531211 6.56045 0.531211 14.6243C0.531211 17.2325 1.2292 19.7855 2.55144 22.0199L0.0206267 29.4853C-0.0265161 29.6245 0.0085488 29.7784 0.111503 29.8832C0.185822 29.9591 0.286633 30 0.389588 30C0.429036 30 0.468776 29.9941 0.507542 29.9817L8.29196 27.508C10.4222 28.6462 12.8298 29.247 15.2664 29.247C23.3905 29.2471 30 22.6873 30 14.6243C30 6.56045 23.3905 0 15.2663 0ZM15.2663 26.2007C12.9735 26.2007 10.7528 25.5387 8.84394 24.2861C8.77975 24.2439 8.70524 24.2223 8.63024 24.2223C8.59059 24.2223 8.55085 24.2283 8.51219 24.2406L4.61267 25.4801L5.8715 21.7663C5.91222 21.6461 5.89186 21.5135 5.81686 21.411C4.36322 19.4248 3.59482 17.0781 3.59482 14.6243C3.59482 8.24026 8.8306 3.04636 15.2662 3.04636C21.701 3.04636 26.9362 8.24026 26.9362 14.6243C26.9363 21.0076 21.7012 26.2007 15.2663 26.2007Z"
                            fill="white"/>
                </svg>
            </a>
            <a href="#">
                <svg width="30" height="30" viewBox="0 0 30 30" fill="white"
                     xmlns="http://www.w3.org/2000/svg">
                    <path
                            d="M21.7209 0H8.27874C3.71384 0 0 3.71402 0 8.27892V21.7211C0 26.2862 3.71384 30 8.27874 30H21.7209C26.2862 30 30 26.286 30 21.7211V8.27892C30.0002 3.71402 26.2862 0 21.7209 0ZM27.3384 21.7211C27.3384 24.8185 24.8185 27.3383 21.7211 27.3383H8.27874C5.18153 27.3384 2.66175 24.8185 2.66175 21.7211V8.27892C2.66175 5.18171 5.18153 2.66175 8.27874 2.66175H21.7209C24.8183 2.66175 27.3383 5.18171 27.3383 8.27892V21.7211H27.3384Z"
                            fill="white"/>
                    <path
                            d="M15.0003 7.27011C10.7377 7.27011 7.27002 10.7378 7.27002 15.0004C7.27002 19.2627 10.7377 22.7302 15.0003 22.7302C19.2628 22.7302 22.7305 19.2627 22.7305 15.0004C22.7305 10.7378 19.2628 7.27011 15.0003 7.27011ZM15.0003 20.0683C12.2056 20.0683 9.93176 17.7948 9.93176 15.0002C9.93176 12.2053 12.2054 9.93168 15.0003 9.93168C17.7951 9.93168 20.0688 12.2053 20.0688 15.0002C20.0688 17.7948 17.7949 20.0683 15.0003 20.0683Z"
                            fill="white"/>
                    <path
                            d="M23.0545 5.01312C22.5417 5.01312 22.0379 5.22074 21.6757 5.58451C21.3118 5.94651 21.1025 6.45046 21.1025 6.96507C21.1025 7.47808 21.3119 7.98186 21.6757 8.34563C22.0377 8.70762 22.5417 8.91702 23.0545 8.91702C23.5691 8.91702 24.0713 8.70762 24.435 8.34563C24.7988 7.98186 25.0064 7.4779 25.0064 6.96507C25.0064 6.45046 24.7988 5.94651 24.435 5.58451C24.073 5.22074 23.5691 5.01312 23.0545 5.01312Z"
                            fill="white"/>
                </svg>
            </a>
        </div>
    </div>
</footer>


</body>
</html>`;
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_group_css_media_queries_loader_lib_index_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_5_index_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!../node_modules/group-css-media-queries-loader/lib/index.js!../node_modules/resolve-url-loader/index.js!../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[5]!./index.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/group-css-media-queries-loader/lib/index.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[5]!./src/index.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_group_css_media_queries_loader_lib_index_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_5_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_group_css_media_queries_loader_lib_index_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_5_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_group_css_media_queries_loader_lib_index_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_5_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_group_css_media_queries_loader_lib_index_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_5_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/products.js":
/*!*************************!*\
  !*** ./src/products.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _img_fairy_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./img/fairy.png */ "./src/img/fairy.png");

const products = [{
  url: _img_fairy_png__WEBPACK_IMPORTED_MODULE_0__,
  title: 'Fairy',
  description: 'Моющее средство для посуды',
  price: '200 UAH'
}, {
  url: _img_fairy_png__WEBPACK_IMPORTED_MODULE_0__,
  title: 'Fairy',
  description: 'Моющее средство для посуды',
  price: '300 UAH'
}, {
  url: _img_fairy_png__WEBPACK_IMPORTED_MODULE_0__,
  title: 'Fairy',
  description: 'Моющее средство для посуды',
  price: '400 UAH'
}, {
  url: _img_fairy_png__WEBPACK_IMPORTED_MODULE_0__,
  title: 'Fairy',
  description: 'Моющее средство для посуды',
  price: '500 UAH'
}, {
  url: _img_fairy_png__WEBPACK_IMPORTED_MODULE_0__,
  title: 'Fairy',
  description: 'Моющее средство для посуды',
  price: '600 UAH'
}, {
  url: _img_fairy_png__WEBPACK_IMPORTED_MODULE_0__,
  title: 'Fairy',
  description: 'Моющее средство для посуды',
  price: '700 UAH'
}, {
  url: _img_fairy_png__WEBPACK_IMPORTED_MODULE_0__,
  title: 'Fairy',
  description: 'Моющее средство для посуды',
  price: '800 UAH'
}, {
  url: _img_fairy_png__WEBPACK_IMPORTED_MODULE_0__,
  title: 'Fairy',
  description: 'Моющее средство для посуды',
  price: '900 UAH'
}, {
  url: _img_fairy_png__WEBPACK_IMPORTED_MODULE_0__,
  title: 'Fairy',
  description: 'Моющее средство для посуды',
  price: '1000 UAH'
}, {
  url: _img_fairy_png__WEBPACK_IMPORTED_MODULE_0__,
  title: 'Fairy',
  description: 'Моющее средство для посуды',
  price: '200 UAH'
}, {
  url: _img_fairy_png__WEBPACK_IMPORTED_MODULE_0__,
  title: 'Fairy',
  description: 'Моющее средство для посуды',
  price: '300 UAH'
}, {
  url: _img_fairy_png__WEBPACK_IMPORTED_MODULE_0__,
  title: 'Fairy',
  description: 'Моющее средство для посуды',
  price: '400 UAH'
}, {
  url: _img_fairy_png__WEBPACK_IMPORTED_MODULE_0__,
  title: 'Fairy',
  description: 'Моющее средство для посуды',
  price: '500 UAH'
}, {
  url: _img_fairy_png__WEBPACK_IMPORTED_MODULE_0__,
  title: 'Fairy',
  description: 'Моющее средство для посуды',
  price: '600 UAH'
}, {
  url: _img_fairy_png__WEBPACK_IMPORTED_MODULE_0__,
  title: 'Fairy',
  description: 'Моющее средство для посуды',
  price: '700 UAH'
}, {
  url: _img_fairy_png__WEBPACK_IMPORTED_MODULE_0__,
  title: 'Fairy',
  description: 'Моющее средство для посуды',
  price: '800 UAH'
}, {
  url: _img_fairy_png__WEBPACK_IMPORTED_MODULE_0__,
  title: 'Fairy',
  description: 'Моющее средство для посуды',
  price: '900 UAH'
}, {
  url: _img_fairy_png__WEBPACK_IMPORTED_MODULE_0__,
  title: 'Fairy',
  description: 'Моющее средство для посуды',
  price: '1000 UAH'
}, {
  url: _img_fairy_png__WEBPACK_IMPORTED_MODULE_0__,
  title: 'Fairy',
  description: 'Моющее средство для посуды',
  price: '200 UAH'
}, {
  url: _img_fairy_png__WEBPACK_IMPORTED_MODULE_0__,
  title: 'Fairy',
  description: 'Моющее средство для посуды',
  price: '300 UAH'
}, {
  url: _img_fairy_png__WEBPACK_IMPORTED_MODULE_0__,
  title: 'Fairy',
  description: 'Моющее средство для посуды',
  price: '400 UAH'
}, {
  url: _img_fairy_png__WEBPACK_IMPORTED_MODULE_0__,
  title: 'Fairy',
  description: 'Моющее средство для посуды',
  price: '500 UAH'
}, {
  url: _img_fairy_png__WEBPACK_IMPORTED_MODULE_0__,
  title: 'Fairy',
  description: 'Моющее средство для посуды',
  price: '600 UAH'
}, {
  url: _img_fairy_png__WEBPACK_IMPORTED_MODULE_0__,
  title: 'Fairy',
  description: 'Моющее средство для посуды',
  price: '700 UAH'
}, {
  url: _img_fairy_png__WEBPACK_IMPORTED_MODULE_0__,
  title: 'Fairy',
  description: 'Моющее средство для посуды',
  price: '800 UAH'
}, {
  url: _img_fairy_png__WEBPACK_IMPORTED_MODULE_0__,
  title: 'Fairy',
  description: 'Моющее средство для посуды',
  price: '900 UAH'
}, {
  url: _img_fairy_png__WEBPACK_IMPORTED_MODULE_0__,
  title: 'Fairy',
  description: 'Моющее средство для посуды',
  price: '1000 UAH'
}, {
  url: _img_fairy_png__WEBPACK_IMPORTED_MODULE_0__,
  title: 'Fairy',
  description: 'Моющее средство для посуды',
  price: '200 UAH'
}, {
  url: _img_fairy_png__WEBPACK_IMPORTED_MODULE_0__,
  title: 'Fairy',
  description: 'Моющее средство для посуды',
  price: '300 UAH'
}, {
  url: _img_fairy_png__WEBPACK_IMPORTED_MODULE_0__,
  title: 'Fairy',
  description: 'Моющее средство для посуды',
  price: '400 UAH'
}, {
  url: _img_fairy_png__WEBPACK_IMPORTED_MODULE_0__,
  title: 'Fairy',
  description: 'Моющее средство для посуды',
  price: '500 UAH'
}, {
  url: _img_fairy_png__WEBPACK_IMPORTED_MODULE_0__,
  title: 'Fairy',
  description: 'Моющее средство для посуды',
  price: '600 UAH'
}, {
  url: _img_fairy_png__WEBPACK_IMPORTED_MODULE_0__,
  title: 'Fairy',
  description: 'Моющее средство для посуды',
  price: '700 UAH'
}, {
  url: _img_fairy_png__WEBPACK_IMPORTED_MODULE_0__,
  title: 'Fairy',
  description: 'Моющее средство для посуды',
  price: '800 UAH'
}, {
  url: _img_fairy_png__WEBPACK_IMPORTED_MODULE_0__,
  title: 'Fairy',
  description: 'Моющее средство для посуды',
  price: '900 UAH'
}, {
  url: _img_fairy_png__WEBPACK_IMPORTED_MODULE_0__,
  title: 'Fairy',
  description: 'Моющее средство для посуды',
  price: '1000 UAH'
}, {
  url: _img_fairy_png__WEBPACK_IMPORTED_MODULE_0__,
  title: 'Fairy',
  description: 'Моющее средство для посуды',
  price: '200 UAH'
}, {
  url: _img_fairy_png__WEBPACK_IMPORTED_MODULE_0__,
  title: 'Fairy',
  description: 'Моющее средство для посуды',
  price: '300 UAH'
}, {
  url: _img_fairy_png__WEBPACK_IMPORTED_MODULE_0__,
  title: 'Fairy',
  description: 'Моющее средство для посуды',
  price: '400 UAH'
}, {
  url: _img_fairy_png__WEBPACK_IMPORTED_MODULE_0__,
  title: 'Fairy',
  description: 'Моющее средство для посуды',
  price: '500 UAH'
}, {
  url: _img_fairy_png__WEBPACK_IMPORTED_MODULE_0__,
  title: 'Fairy',
  description: 'Моющее средство для посуды',
  price: '600 UAH'
}, {
  url: _img_fairy_png__WEBPACK_IMPORTED_MODULE_0__,
  title: 'Fairy',
  description: 'Моющее средство для посуды',
  price: '700 UAH'
}, {
  url: _img_fairy_png__WEBPACK_IMPORTED_MODULE_0__,
  title: 'Fairy',
  description: 'Моющее средство для посуды',
  price: '800 UAH'
}, {
  url: _img_fairy_png__WEBPACK_IMPORTED_MODULE_0__,
  title: 'Fairy',
  description: 'Моющее средство для посуды',
  price: '900 UAH'
}, {
  url: _img_fairy_png__WEBPACK_IMPORTED_MODULE_0__,
  title: 'Fairy',
  description: 'Моющее средство для посуды',
  price: '1000 UAH'
}];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (products);

/***/ }),

/***/ "./static/apple-touch-icon.png":
/*!*************************************!*\
  !*** ./static/apple-touch-icon.png ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/apple-touch-icon.png";

/***/ }),

/***/ "./static/favicon-16x16.png":
/*!**********************************!*\
  !*** ./static/favicon-16x16.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/favicon-16x16.png";

/***/ }),

/***/ "./static/favicon-32x32.png":
/*!**********************************!*\
  !*** ./static/favicon-32x32.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/favicon-32x32.png";

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
/******/ 			id: moduleId,
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _products__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./products */ "./src/products.js");
/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.html */ "./src/index.html");
/* harmony import */ var _ThankYou_html__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ThankYou.html */ "./src/ThankYou.html");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index.scss */ "./src/index.scss");





/**Burger menu START*/
const menuBurgerButtonElement = document.querySelector('[data-js-overlay-burger-button]');
const menuDialogElement = document.querySelector('[data-js-overlay-dialog]');
const headerMenuElement = document.querySelector('.header__menu');
menuBurgerButtonElement.addEventListener('click', () => {
  menuBurgerButtonElement.classList.toggle('is-active');
  menuDialogElement.open = !menuDialogElement.open;
});
headerMenuElement.addEventListener('click', e => {
  if (e.target.classList.contains('header__menu-item')) {
    menuBurgerButtonElement.classList.toggle('is-active');
    menuDialogElement.open = !menuDialogElement.open;
  }
});
/**Burger menu END*/

/**Slider START*/

const slides = document.querySelectorAll('.slider__image');
let currentSlide = 0;
setInterval(() => {
  // Снять класс active у текущего
  slides[currentSlide].classList.remove('active');

  // Перейти к следующему
  currentSlide = (currentSlide + 1) % slides.length;

  // Добавить класс active новому
  slides[currentSlide].classList.add('active');
}, 4000); // каждые 3 секунды
/**Slider END*/

/**Render Product STAR*/
let perPage = 8;
if (window.screen.width > 821) {
  perPage = 9;
}
if (window.screen.width > 1091) {
  perPage = 8;
}
if (window.screen.width > 1361) {
  perPage = 10;
}
if (window.screen.width > 1631) {
  perPage = 12;
}
const productWrapperElement = document.querySelector('.goods__catalog-wrapper');
const scrollToElement = document.querySelector('.goods__button-wrapper');
let currentPage = 1;
const totalPages = Math.ceil(_products__WEBPACK_IMPORTED_MODULE_0__["default"].length / perPage);
const pageInfo = document.getElementById('page-info');
const renderProductCardElement = productData => {
  productData.forEach(product => {
    const {
      url,
      title,
      description,
      price
    } = product;
    const item = `
          <div class="goods__catalog-wrapper-item">
                    <div class="goods__catalog-wrapper-item__image">
                        <img src='${url}' alt="goods"/>
                    </div>
                    <div class="goods__catalog-wrapper-item__info">
                    <h4 class="goods__catalog-wrapper-item__title">${title}</h4>
                    <p class="goods__catalog-wrapper-item__description">${description}</p>
                    <p class="goods__catalog-wrapper-item__price">${price}</p>
                    <button class="goods__catalog-wrapper-item__button">Замовити</button>
                    </div>
                </div>
        `;
    productWrapperElement.insertAdjacentHTML('beforeend', item);
  });
};
function renderPage(page) {
  productWrapperElement.innerHTML = '';
  const start = (page - 1) * perPage;
  const end = start + perPage;
  const currentProducts = _products__WEBPACK_IMPORTED_MODULE_0__["default"].slice(start, end);
  renderProductCardElement(currentProducts);
  pageInfo.innerHTML = `Сторінка <span class="page-current">${currentPage}</span> з <span class="page-total">${totalPages}</span>`;
}
document.getElementById('prev').addEventListener('click', () => {
  if (currentPage > 1) {
    currentPage--;
    renderPage(currentPage);
  }
  scrollToElement.scrollIntoView({
    behavior: 'smooth'
  });
});
document.getElementById('next').addEventListener('click', () => {
  if (currentPage < totalPages) {
    currentPage++;
    renderPage(currentPage);
    scrollToElement.scrollIntoView({
      behavior: 'smooth'
    });
  }
});
renderPage(currentPage);

/**Render Product End*/

/** Add to Card START*/

const formTextareaElement = document.querySelector('textarea');
productWrapperElement.addEventListener('click', e => {
  const element = e.target.classList.contains('goods__catalog-wrapper-item__button');
  if (!element) {
    return;
  }
  const itemInfoWrapperElement = e.target.closest('.goods__catalog-wrapper-item__info');
  const productName = itemInfoWrapperElement.querySelector('.goods__catalog-wrapper-item__title').textContent;
  // const productDescription = itemInfoWrapperElement.querySelector('.goods__catalog-wrapper-item__description').textContent;
  const productPrice = itemInfoWrapperElement.querySelector('.goods__catalog-wrapper-item__price').textContent;
  const order = `
    Замовлення: 
        назва - ${productName}
        ціна - ${productPrice}
        кількість - 1   
    `;
  formTextareaElement.value += order;
});
/** Add to Card END*/
})();

/******/ })()
;
//# sourceMappingURL=main.68f3f52b2048467cc8f5.js.map