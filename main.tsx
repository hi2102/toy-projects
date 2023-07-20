function calendar(newYear: number, newMonth: number) {
	const d = new Date(newYear, newMonth)
	const monthLength = new Date(newYear, newMonth, 0).getDate();
	let date = d.getDate();
	let day = d.getDay();
	
	// 캡션 선택 및 날짜 지정
	const captionYear = document.getElementById('year');
	const captionMonth = document.getElementById('month');
	captionYear!.textContent = String(newYear);
	captionMonth!.textContent = String(newMonth);
	
	// init table
	const startDay = document.querySelectorAll('tr td');
	for (let i = 0; i < startDay.length; i++) {
		startDay[i].innerHTML = '&nbsp';
	}
	// set days
	for (let i = day; i < day + monthLength; i++) {
		if (typeof date === 'number') {
			const changeType = String(date)
			startDay[i].innerHTML = changeType;
			date++;
		}
	}
}

function calInit() {
	const prevBtn = document.getElementById('prev_btn')
	const todayBtn = document.getElementById('today_btn')
	const nextBtn = document.getElementById('next_btn')
	
	const d = new Date()
	const year = d.getFullYear()
	const month = d.getMonth()
	let currentYear = year
	let currentMonth = month + 1

	calendar(currentYear, currentMonth);

	const goToPrevMonth = () => {
		if (currentMonth === 1) {
			currentYear -= 1
			currentMonth = 13
			calendar(currentYear, --currentMonth)
		} else {
			calendar(currentYear, --currentMonth)
		}
	}
	const goToNextMonth = () => {
		(currentMonth === 12)
		?(currentYear += 1,
			currentMonth = 0,
			calendar(currentYear, ++currentMonth))
		: calendar(currentYear, ++currentMonth)
	}
	const goToThisMonth = () => {
		currentYear = year
		currentMonth = month + 1
		calendar(currentYear, currentMonth)
	} 

	prevBtn?.addEventListener('click', goToPrevMonth)
	todayBtn?.addEventListener('click', goToThisMonth)
	nextBtn?.addEventListener('click', goToNextMonth)
}

calInit();
