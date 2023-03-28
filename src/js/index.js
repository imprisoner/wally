import initModal from "./components/modal.js";
import initCalc from "./components/calc.js";
import initMask from "./components/mask.js"

const modalSelectors = [
  {
    modal: "#m1",
    close: ".modal-close",
    trigger: "[data-trigger]"
  },
  {
    modal: "#m2",
    close: ".modal-close",
    trigger: "[data-trigger]"
  },
];

document.addEventListener('DOMContentLoaded', () => {
  modalSelectors.forEach((selectors) => {
    initModal(selectors);
  });
  initCalc();
  initMask()
})
