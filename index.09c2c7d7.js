!function(){var e=document.querySelector(".header"),t=document.querySelector(".hero"),o=0;function r(){var r=t.offsetHeight,d=e.offsetHeight,n=window.scrollY,s=e.offsetTop;n>o?(e.classList.contains("header--fixed")&&(e.classList.remove("header--fixed"),e.style.top=n+"px"),n>e.offsetTop+d&&(e.style.top=n-d+"px")):(console.log("back"),n<=s&&(e.classList.add("header--fixed"),e.style.top=0)),o=n,n<=r&&n>d?e.classList.add("header--hidden"):e.classList.remove("header--hidden"),n>r?e.classList.add("header--background"):e.classList.remove("header--background")}function d(){var o=scrollY,r=e.offsetHeight,d=t.offsetHeight;o<=d&&o>r?(e.classList.add("header--hidden"),e.style.top=0):e.classList.remove("header--hidden"),o>d?e.classList.add("header--background"):e.classList.remove("header--background")}window.matchMedia("(min-width: 1200px)").addEventListener("change",(function(e){!0===e.matches?(window.removeEventListener("scroll",r),window.addEventListener("scroll",d)):(window.removeEventListener("scroll",d),window.addEventListener("scroll",r))})),window.screen.width>=1200?window.addEventListener("scroll",d):window.addEventListener("scroll",r);var n=document.querySelector("[data-burger-button]"),s=document.querySelector("[data-close-button]"),a=document.querySelector("[data-menu]"),l=document.querySelectorAll(".menu__link"),i=document.querySelector("body"),c=!0,u=!1,f=void 0;try{for(var v,h=l[Symbol.iterator]();!(c=(v=h.next()).done);c=!0)v.value.addEventListener("click",L)}catch(e){u=!0,f=e}finally{try{c||null==h.return||h.return()}finally{if(u)throw f}}function L(){a.classList.remove("is-open"),i.classList.remove("scroll-off")}n.addEventListener("click",(function(){a.classList.add("is-open"),i.classList.add("scroll-off")})),s.addEventListener("click",L);var m=document.querySelectorAll("[data-buy-now]"),y=document.querySelector("[data-franchise]"),w=!0,g=!1,b=void 0;try{for(var E,k=m[Symbol.iterator]();!(w=(E=k.next()).done);w=!0){var p=E.value;p.addEventListener("click",L),p.addEventListener("click",S)}}catch(e){g=!0,b=e}finally{try{w||null==k.return||k.return()}finally{if(g)throw b}}function S(){y.classList.toggle("is-hidden"),document.body.classList.toggle("no-scroll")}}();
//# sourceMappingURL=index.09c2c7d7.js.map
