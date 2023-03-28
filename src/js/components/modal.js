const classNames = {
  bodyNoScroll: "no-scroll",
  activeModal: "modal--active",
};

let triggersList = [];

export default function modal(
  selectors = {
    modal: "",
    close: "",
    trigger: "",
  }
) {
  const overlay = document.querySelector(selectors.modal);
  const close = overlay.querySelector(selectors.close);

  overlay.addEventListener("click", (event) => {
    if (event.target !== overlay) return;
    document.body.style.paddingRight = "";
    overlay.classList.remove(classNames.activeModal);
    document.body.classList.remove(classNames.bodyNoScroll);
  });

  close.addEventListener("click", (event) => {
    document.body.style.paddingRight = "";
    overlay.classList.remove(classNames.activeModal);
    document.body.classList.remove(classNames.bodyNoScroll);
  });

  if (!triggersList.length) {
    triggersList = Array.from(document.querySelectorAll(selectors.trigger));
  }

  const filteredList = triggersList.filter((item) => {
    return item.dataset.trigger === selectors.modal;
  });

  

  filteredList.forEach((el) => {
    el.addEventListener("click", (event) => {

      // check if second popup called from another popup and turn it off
      const isCallFromModal = document.body.classList.contains(classNames.bodyNoScroll)
      if(isCallFromModal) {
        document.body.style.paddingRight = "";
        document.body.classList.remove(classNames.bodyNoScroll);
        el.closest(`.${classNames.activeModal}`).classList.remove(classNames.activeModal)
      }

      const scrollBarWidth =
        window.innerWidth - document.documentElement.clientWidth;
      
      document.body.style.paddingRight = `${scrollBarWidth}px`;
      document.body.classList.add(classNames.bodyNoScroll);
      overlay.classList.add(classNames.activeModal);
    });
  });
}
