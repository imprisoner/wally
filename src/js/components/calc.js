export default function initCalc() {
  const fieldId = {
    cost: "#cost",
    amount: "#amount",
    retail: "#retail",
    profit: "#profit",
  };

  const form = document.querySelector("#calc");
  const fieldset = form.querySelector("fieldset");
  // set validation on inputs

  Array.from(fieldset.elements).forEach((input) => {
    if (input.hasAttribute("readonly")) {
      return;
    }

    
    let value = "";
    input.addEventListener("input", (e) => {
      console.log(e);
      const isDigit = /\d/.test(e.data);
      
      if (e.inputType === "deleteContentBackward") {
        return value[value.length - 1].replace("");
      }
      
      if (!isDigit) return (input.value = value);

      value += e.data;
      
      if(input.classList.contains("textfield--invalid")) {
        const errorMessageElement = input.closest("div").nextElementSibling;
        input.classList.remove("textfield--invalid")
        errorMessageElement.classList.remove("calc-group__error--visible");
      }
    });
  });

  // calculate

  const resultInput = fieldset.querySelector(fieldId.profit);

  const calculate = ({ cost, amount, retail }) => (retail - cost) * amount;
  const findInvalidFields = (fieldContainerElement) => {
    const fields = Array.from(fieldContainerElement.elements).filter((input) =>
      !input.hasAttribute("readonly")
    );

    return fields.filter((input) => !input.value);
  };

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const values = {
      cost: fieldset.querySelector(fieldId.cost).value,
      amount: fieldset.querySelector(fieldId.amount).value,
      retail: fieldset.querySelector(fieldId.retail).value,
    };

    if (values.amount && values.cost && values.retail) {
      const profit = calculate(values);
      resultInput.value = profit;
      return;
    }

    // highlight invalid fields
    const invalidFields = findInvalidFields(fieldset);
    invalidFields.forEach((input) => {
      const errorMessageElement = input.closest("div").nextElementSibling;
      input.classList.add("textfield--invalid");
      errorMessageElement.classList.add("calc-group__error--visible");
    });
  });
}