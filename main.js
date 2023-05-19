const wrapper = document.querySelector('.wrapper');
let page = document.querySelectorAll('.page');
let indicator = document.querySelector('#indicator');
let indicatorLi = document.querySelectorAll('li');

let yDeg = 0;                       // 페이지 회전 각도 변수
let indicatorNum = 1;               // 현재 페이지의 번호 
let indicatorLength = page.length;  // 인디케이터 갯수
let w = page[0].offsetWidth;        // 현재 페이지의 폭
let pageAngle = 0;                  // 각도 정의를 위한 변수

function initPage() {
  w = page[0].offsetWidth;
  for (let i = 0; i < page.length; i++){
    page[i].style.transform = `rotateY(${pageAngle}deg) translateZ(${w / 2}px)`;
    pageAngle += 90;
  }
  wrapper.style.transform = `translateZ(${-w/2}px) rotateY(${yDeg}deg)`
}

function initIndicator() {
  for (let i = 0; i < indicatorLength; i++){
    indicator.innerHTML += `<li>${i+1}</li>`
  }
  indicatorLi = indicator.querySelectorAll('li');
  changePage(indicatorNum)
}

function changePage(inum) {
  indicatorLi[inum - 1].setAttribute('class', 'active');
  yDeg = -90 * (inum - 1);
  wrapper.style.transform = `translateZ(${-w / 2}px) rotateY(${yDeg}deg)`
  for (let i = 0; i < indicatorLi.length; i++){
    indicatorLi[i].removeAttribute('class');
  }
  indicatorLi[inum - 1].setAttribute('class', 'active');
}

initPage();
initIndicator();

const newIndicator = [...indicatorLi];
newIndicator.map(indicator => indicator.addEventListener('click', (e) => {
  indicatorNum = parseInt(e.target.textContent)
  changePage(indicatorNum)
}))