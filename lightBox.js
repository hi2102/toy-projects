const indicator = document.querySelectorAll('.indicator button')
const lightBox = document.getElementById('lightBox')
const backdrop = document.getElementById('block')
const btnClose = document.querySelector('.btn-close')

btnClose.addEventListener('click', lightBoxClose)

function lightBoxOpen(num) {
  lightBox.setAttribute('class', 'active');
  backdrop.setAttribute('class', 'active');
  changeImg(num);
  indicator[num - 1].focus();
}
function lightBoxClose() {
  lightBox.removeAttribute('class');
  backdrop.removeAttribute('class')
}

function changeImg(val) {
  const imgsArr = [...document.querySelectorAll('figure > img')];
  imgsArr.map(img => img.removeAttribute('class'))
  imgsArr[val - 1].setAttribute('class', 'active')
}