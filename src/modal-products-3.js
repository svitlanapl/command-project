 

// ------------- script for  modal for Milkshakes  menu------------------

  (() => {
    const refs = {
      openProducts3Btn: document.querySelector("[data-products-3-open]"),
      closeProducts3Btn: document.querySelector("[data-products-3-close]"),
      products3: document.querySelector("[data-products-3]"),
      body: document.querySelector("body"),
    };
  
    refs.openProducts3Btn.addEventListener("click", toggleProducts3);
    refs.closeProducts3Btn.addEventListener("click", toggleProducts3);
  
    function toggleProducts3() {
      refs.products3.classList.toggle("is-hidden");
      refs.body.classList.toggle("no-scroll");
    }
  })();