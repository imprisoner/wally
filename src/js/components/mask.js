import IMask from "../vendor/imask/index.js";

const maskOptions = {
  phone: {
    mask: "+{7}(000)000-00-00",
    lazy: false,
  },
  email: {
    mask: function (value) {
      if (/^[a-z0-9_\.-]+$/.test(value)) return true;
      if (/^[a-z0-9_\.-]+@$/.test(value)) return true;
      if (/^[a-z0-9_\.-]+@[a-z0-9-]+$/.test(value)) return true;
      if (/^[a-z0-9_\.-]+@[a-z0-9-]+\.$/.test(value)) return true;
      if (/^[a-z0-9_\.-]+@[a-z0-9-]+\.[a-z]{1,4}$/.test(value)) return true;
      if (/^[a-z0-9_\.-]+@[a-z0-9-]+\.[a-z]{1,4}\.$/.test(value)) return true;
      if (/^[a-z0-9_\.-]+@[a-z0-9-]+\.[a-z]{1,4}\.[a-z]{1,4}$/.test(value))
        return true;
      return false;
    },
    lazy: false,
  },
};

export default function initMask() {
  const inputs = document.querySelectorAll("[data-id]");

  inputs.forEach((input) => {
    console.log(input.dataset.id)
    new IMask(input, maskOptions[input.dataset.id]);
  });
}
