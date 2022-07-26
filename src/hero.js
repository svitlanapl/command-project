(() => {
  const heroMoreBtn = document.querySelector('.hero__more-btn');
  const heroText = document.querySelector('.hero__text');
  const heroGiphy = document.querySelector('.hero__giphy');

  heroMoreBtn.addEventListener('click', toggleMore);
  window.addEventListener('load', windoLoad);

  function toggleMore() {
    heroMoreBtn.classList.toggle('is-show');
    heroText.classList.toggle('is-show');
    heroGiphy.classList.toggle('is-show');
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

    printText(text, heroTitle, 300);
    document.getElementById('heroTitle').style.color = '#d41443';
    setTimeout(function () {
      document.getElementById('heroTitle').style.color = '#ffffff';
    }, 1000);
    // document.getElementById('heroTitle').style.transition = 'color 3000';

    animateIcecreame(35, 1, 250);
    animateCounters(cafes, valueCafes, 200);
    animateCounters(trucks, valueTrucks, 150);
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
  }, 8000);
})();
