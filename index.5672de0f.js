!function(){var e=document.querySelector(".header"),s=document.querySelector(".hero"),t=0;window.addEventListener("scroll",(function(){var i=scrollY,o=e.offsetHeight,l=s.offsetHeight;i<o?(e.classList.remove("is-fixed"),e.classList.remove("show"),e.classList.remove("hide")):i>=o&&i<l-o?(e.classList.add("is-fixed"),e.classList.remove("show"),e.classList.remove("hide")):i>=l-o&&i<l?(e.classList.add("is-fixed"),e.classList.remove("show"),e.classList.add("hide")):i>=l&&(i<t?(e.classList.add("is-fixed"),e.classList.add("show"),e.classList.remove("hide")):(e.classList.add("is-fixed"),e.classList.remove("show"),e.classList.add("hide")));t=i}));var i=document.querySelector("[data-menu-button]"),o=document.querySelector("[data-menu]"),l=document.querySelectorAll(".menu__link"),d=document.querySelector("body"),a=!0,c=!1,r=void 0;try{for(var n,u=l[Symbol.iterator]();!(a=(n=u.next()).done);a=!0){n.value.addEventListener("click",L)}}catch(e){c=!0,r=e}finally{try{a||null==u.return||u.return()}finally{if(c)throw r}}function L(){o.classList.toggle("is-open"),i.classList.toggle("is-open"),d.classList.toggle("scroll-off")}i.addEventListener("click",L)}();
//# sourceMappingURL=index.5672de0f.js.map
