 
// -------------script for   modal for Ice-coffe   menu------------------
(() => {
    const refs = {
      openProducts2Btn: document.querySelector("[data-products-2-open]"),
      closeProducts2Btn: document.querySelector("[data-products-2-close]"),
      products2: document.querySelector("[data-products-2]"),
      body: document.querySelector("body"),
    };
  
    refs.openProducts2Btn.addEventListener("click", toggleProducts2);
    refs.closeProducts2Btn.addEventListener("click", toggleProducts2);
  
    function toggleProducts2() {
      refs.products2.classList.toggle("is-hidden");
      refs.body.classList.toggle("no-scroll");
    }
  })();
 