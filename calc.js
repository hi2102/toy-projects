const calc = document.forms['calc'];
const input = [...calc].map(input => input);
const clsBtn = input[16];
const resultBtn = input[17];

clsBtn.addEventListener('click', () => calc['result'].value = 0);
resultBtn.addEventListener('click', myResult);

function cal(value) {
  if(calc['result'].value === '0') calc['result'].value = ''
  calc['result'].value += value;
}

function myResult() {
  try{
    const result = document.forms['calc']['result'];
    const calculate = eval(result.value);
    calc['result'].value = calculate;
  } catch(err) {
    calc['result'].value = '입력오류';
  }
}

input
  .filter(input => input.value !== '=' && input.value !== 'clear')
  .map(sachick => sachick.addEventListener('click', (e) => {
    cal(e.target.value)
  }));
