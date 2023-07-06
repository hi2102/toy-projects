function calendar(newYear, newMonth) {
  const d = new Date(newYear, newMonth-1, 1);
  // 당월 총 일수 구하는 공식
  const monthLength = 32 - new Date(newYear, newMonth-1, 32).getDate();
  let year = d.getFullYear();
  let month = d.getMonth();
  let date = d.getDate();
  let day = d.getDay();

  const captionYear = document.getElementById('year');
  const captionMonth = document.getElementById('month');
  // 캡션 날짜 지정
  captionYear.textContent = year;
  captionMonth.textContent = month+1;
  
  // init table
  const startDay = document.querySelectorAll('tr td');
  for (let i = 0; i < startDay.length; i++) {
    startDay[i].innerHTML = '&nbsp';
  }

  for (let i = day; i < day + monthLength; i++) {
    startDay[i].innerHTML = date;
    date++;
  }
}
  
(function () {
  const prev = document.getElementById('prev');
  const next = document.getElementById('next');
  let year = new Date().getFullYear();
  let month = new Date().getMonth() + 1;

  calendar(year, month);

  prev.onclick = function () {
    calendar(year, --month)
  }
  next.onclick = function () {
    calendar(year, ++month)
  }
})();





/* 시간 세부 조정
  const day = d.getDay();
  let hour = d.getHours();
  const minutes = d.getMinutes();
  const seconds = d.getSeconds();
  let today = ''
  let amPm = '오전';
  if (hour > 12) 
    {
      hour -= 12;
      amPm = '오후'
    }
    
  const now = `지금은 ${year}년 ${month + 1}월 ${date}일(${today}) ${amPm} ${hour}시 ${minutes}분 ${seconds}초 입니다.`
  
  console.log(now.toLocaleString('ko-KR', { timeZone: 'UTC' }));
*/
