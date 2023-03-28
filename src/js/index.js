import initModal from "./components/modal.js";
import initCalc from "./components/calc.js";

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

modalSelectors.forEach((selectors) => {
  initModal(selectors);
});

// turn off categories-modal 



initCalc();
