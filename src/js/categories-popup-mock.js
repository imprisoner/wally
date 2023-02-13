import initModal from './components/modal.js'
const categoriesModalSelectors = {
  modal: "#m1",
  trigger: "section.categories .card button",
  close: ".modal-close"
}

initModal(categoriesModalSelectors)