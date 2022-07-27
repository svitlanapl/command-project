//    ----------script for modal for ice-cream menu--------------

(() => {
    const refs = {
      openProducts1Btn: document.querySelector("[data-products-1-open]"),
      closeProducts1Btn: document.querySelector("[data-products-1-close]"),
      products1: document.querySelector("[data-products-1]"),
      body: document.querySelector("body"),
    };
  
    refs.openProducts1Btn.addEventListener("click", toggleProducts1);
    refs.closeProducts1Btn.addEventListener("click", toggleProducts1);
  
    function toggleProducts1() {
      refs.products1.classList.toggle("is-hidden");
      refs.body.classList.toggle("no-scroll");
    }
  })();