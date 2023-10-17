setViewportHeightVariable();

let rAF: number;
window.addEventListener('resize', () => {
  cancelAnimationFrame(rAF);
  rAF = requestAnimationFrame(setViewportHeightVariable);
});

function setViewportHeightVariable() {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
}