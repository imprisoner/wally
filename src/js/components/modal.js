const classNames = {
  bodyNoScroll: "no-scroll",
  activeModal: "modal--active"
}

export default function modal(selectors = {
  modal: "",
  trigger: "",
  close: ""
}) {

  const overlay = document.querySelector(selectors.modal)
  const trigger = document.querySelector(selectors.trigger)
  const close = overlay.querySelector(selectors.close)

  console.log(overlay)
  trigger.addEventListener("click", (event) => {
    document.body.classList.add(classNames.bodyNoScroll)
    overlay.classList.add(classNames.activeModal)
  })

  overlay.addEventListener("click", (event) => {
    if (event.target !== overlay) return

    overlay.classList.remove(classNames.activeModal)
    document.body.classList.remove(classNames.bodyNoScroll)
  })

  close.addEventListener("click", (event) => {
    overlay.classList.remove(classNames.activeModal)
    document.body.classList.remove(classNames.bodyNoScroll)
  })
}