const box = document.querySelector('article');
const button = document.querySelector('button');

box.addEventListener('click', (e) => {
  // box.style.backgroundColor = "aqua";
  // box.style.transform = "rotate(45deg)";

  box.style.cssText = `
    background: aqua;
    transform: rotate(45deg);
  `;
});

button.addEventListener('click', (e) => {
  const bg = getComputedStyle(button).getPropertyValue('background-color');
  console.log(bg);
});

box.style.cssText = `
    background: aqua;
    transform: rotate(45deg);
  `;

console.log(getComputedStyle(box).getPropertyValue('transform'));
