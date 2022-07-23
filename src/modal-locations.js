(() => {
    const refs = {
      openLocationsBtn: document.querySelector("[data-locations-open]"),
      closeLocationsBtn: document.querySelector("[data-locations-close]"),
      locations: document.querySelector("[data-locations]"),
      body: document.querySelector("body"),
    };
  
    refs.openLocationsBtn.addEventListener("click", toggleLocations);
    refs.closeLocationsBtn.addEventListener("click", toggleLocations);
  
    function toggleLocations() {
      refs.locations.classList.toggle("is-hidden");
      refs.body.classList.toggle("no-scroll");
    }
  })();