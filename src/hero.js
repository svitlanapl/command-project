(() => {
  const heroMoreBtn = document.querySelector('.hero__more-btn');
  const heroMoreText = document.querySelector('.hero__more-text');

  heroMoreBtn.addEventListener('click', toggleMore);
  window.addEventListener('load', windoLoad);

  function toggleMore() {
    heroMoreText.classList.toggle('is-show');
  }

  function windoLoad() {
    const cafes = document.querySelector('[data-cafes]');
    const trucks = document.querySelector('[data-trucks]');
    const heroTitle = document.querySelector('.passion');

    const valueCafes = parseInt(cafes.innerHTML);
    cafes.innerHTML = 0;
    const valueTrucks = parseInt(trucks.innerHTML);
    trucks.innerHTML = 0;

    const text = heroTitle.innerText;
    heroTitle.innerText = '';

    printText(text, heroTitle, 100);

    animateIcecreame(35, 1, 150);
    animateCounters(cafes, valueCafes, 100);
    animateCounters(trucks, valueTrucks, 75);
  }

  const animateCounters = function (counter, value, delay) {
    const counterValue = parseInt(counter.innerHTML);
    if (counterValue < value) {
      counter.innerHTML = counterValue + 1;
      setTimeout(function () {
        animateCounters(counter, value, delay);
      }, delay);
    }
  };

  const printText = function (text, elem, delay) {
    if (text.length > 0) {
      elem.innerText += text[0];
      setTimeout(function () {
        printText(text.slice(1), elem, delay);
      }, delay);
    }
  };

  const animateIcecreame = function (value, sign, delay) {
    const param = `rotate(${value * sign}deg)`;
    document.getElementById('heroIcecream').style.transform = param;
    if (value > 0) {
      value -= 5;
      setTimeout(function () {
        animateIcecreame(value, -1 * sign, delay);
      }, delay);
    }
  };

  setTimeout(function () {
    document.getElementById('heroIcecream').style.transform =
      'translate(22%,10%)';
  }, 3000);
})();
