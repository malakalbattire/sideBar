const btn = document.querySelector('.sideBarButton');
const overlay = document.querySelector('.overlay');
const colseSide = document.querySelector('.btn-closeSidbar');
btn.onclick = e => {
  overlay.classList.toggle('list');
};
colseSide.onclick = e => {
  overlay.classList.toggle('list');
};
