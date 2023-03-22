import initModal from "./components/modal.js";

const contactsModalSelectors = {
  modal: "#m2",
  trigger: "#m2-trigger",
  close: ".modal-close",
};

initModal(contactsModalSelectors);

export default function initCalc() {
  const fieldId = {
    cost: "#cost",
    amount: "#amount",
    retail: "#retail",
    profit: "#profit",
  };

  const calculator = document.querySelector("#calc");
  const fieldset = calculator.querySelector("fieldset");

  const controlKeys = [
    "Backspace",
    "Tab",
    "ArrowLeft",
    "ArrowUp",
    "ArrowRight",
    "ArrowDown",
  ];

  Array.from(fieldset.elements).forEach((input) => {
    if (input.getAttribute("readonly") == null) {
      input.addEventListener("keydown", function (e) {
        console.log(e)
        const isNumber = !isNaN(+e.key)
        const isControls = controlKeys.includes(e.code);

        console.log(isNumber, '\n', isControls)
        if (!(isNumber||isControls)) {
          e.preventDefault();
        }
      });
    }
  });
}
initCalc();
