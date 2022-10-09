const frame = document.querySelector('section');
const visualSection = document.createElement('section');
const footerElement = document.querySelector('footer');

for (let i = 0; i <= 200; i += 1) {
  let img = `<img src="../img/pic${i}.jpg">`;

  visualSection.insertAdjacentHTML('beforeend', img);
}

footerElement.insertAdjacentElement('beforebegin', visualSection);

const imgNodes = document.querySelectorAll(`section img`);
let count = 0;
const imgLoadPercent = document.querySelector('aside');
const progressElement = document.querySelector('progress');
const delay = convertSpeed("aside");

function convertSpeed(el) {
  let item = document.querySelector(el);
  let duration = getComputedStyle(item).transitionDuration;
  return parseFloat(duration) * 1000
}


imgNodes.forEach((el, i) => {
  el.onload = () => {
    count++;

    let percent = Math.round(count / 201 * 100);
    imgLoadPercent.querySelector("span").textContent = percent;
    progressElement.value = percent;

    if (percent === 100) imgLoadPercent.classList.add("off"); 

    setTimeout(() => {
      imgLoadPercent.remove();
    }, delay)
  }
})

window.addEventListener('mousemove', (e) => {
  let percent = e.pageX / document.documentElement.clientWidth;
  let idx = Math.rou`nd(percent * 200);

  imgNodes.forEach(el => {
    el.style.display = 'none';
  });

  imgNodes[idx].style.display = 'block';
});






// collectionButton.addEventListener('keydown', (e) => {
//   if (e.key === 'Escape') {
//     collectionContainer.classList.remove('open');
//     collectionButton.setAttribute('aria-expanded', 'false');
//     collectionButton.setAttribute('aria-hidden', 'true');
//   }

//   if (e.key === 'Enter' && collectionContainer.classList.contains('open')) {
//     collectionContainer.classList.remove('open');
//     collectionButton.setAttribute('aria-expanded', 'false');
//     collectionButton.setAttribute('aria-hidden', 'true');
//   } else if (
//     e.key === 'Enter' &&
//     !collectionContainer.classList.contains('open')
//   ) {
//     collectionContainer.classList.add('open');
//     collectionButton.setAttribute('aria-expanded', 'true');
//     collectionButton.setAttribute('aria-hidden', 'false');
//   }
// });
