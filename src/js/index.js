import initModal from "./components/modal.js";
import initCalc from "./components/calc.js";

const contactsModalSelectors = {
  modal: "#m2",
  trigger: "#m2-trigger",
  close: ".modal-close",
};

initModal(contactsModalSelectors);


initCalc();

