export default function initCalc() {
    console.log('sfsdf')
  const fieldId = {
    cost: "#cost",
    amount: "#amount",
    retail: "#retail",
    profit: "#profit",
  };

  window.addEventListener("DOMContentLoaded", () => {
    console.log('Domloaded')
    const calculator = document.querySelector("#calc");
    const fieldset = calculator.querySelector("fieldset");
    Array.from(fieldset.elements).forEach((input) => {
        console.log(input)
      if (input.getAttribute("readonly") !== null) {
        input.addEventListener("input", (e) => {
          console.log(e);
        });
      }
    });
  });
};
