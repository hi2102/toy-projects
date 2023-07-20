# calendar

### 바닐라 js로 만든 캘린더
<img src="https://github.com/hi2102/toy-projects/assets/71423455/dc7e6f0d-3e65-46b0-8598-c4880ba789c4" width="100%" alt="calendar gif"/>
<hr />

<br />
<br />
<br />


## Migrate to TypeScript
- 기존 js 파일을 타입스크립트로 마이그레이트 하는 과정 중에 발생한 오류와 수정 사항

#### 캡션
  - 캡션 날짜 지정시에 null일 수 있다는 경고가 발생해 어선셜 연산자(Non-null assertion operator)를 사용했다.

<img width="100%" alt="caption date setting" src="https://github.com/hi2102/toy-projects/assets/71423455/fea4e313-155e-47bf-8407-375973ea247f">

#### 캡션 (날짜 이동) 버튼 및 출력 화면 (달력 날짜) 변경
- 날짜 이동 버튼 선택 시 이전에는 querySelectAll로 선택하고 이벤트 리스너를 달아 사용했는데, 마이그레이션을 하며 역시 아래와 같은 오류가 발생했다.<sup>1)</sup>
- 버튼 마다 이벤트 리스너를 달고 코드를 아래와 같이 수정했다.<sup>2)</sup>

1)<img width="100%" alt="error" src="https://github.com/hi2102/toy-projects/assets/71423455/c85c3a19-aa5f-40fc-ad36-e38d4227811c">

2)<img width="100%" height='160px' alt="calendar init 01" src="https://github.com/hi2102/toy-projects/assets/71423455/76e6ab61-7f0b-4904-b049-ce7edef73969">
<img width="100%" height='160px' alt="event Listener" src="https://github.com/hi2102/toy-projects/assets/71423455/4d98d9c5-47bd-402c-8021-93f9b01e631a">
<img width="33%" height='180px' alt="code change 01" src="https://github.com/hi2102/toy-projects/assets/71423455/659e504d-003d-497a-930c-8fd00149ec66">
<img width="33%" height='180px' alt="code change 02" src="https://github.com/hi2102/toy-projects/assets/71423455/d96b411b-4ae0-4745-b050-f9cb914ed902">
<img width="33%" height='180px' alt="code change 03" src="https://github.com/hi2102/toy-projects/assets/71423455/9d5c6d3d-3ef9-4365-aa32-754bb79eb60e">

#### 달력 날짜 출력
  - js를 사용할때는 문제가 없었으나, ts로 마이그레이트 하면서 형식이 문제가 됐다. type guard로 매개변수 형식을 확인하고 문자열로 변환했다.
  
<img width="100%" alt="type guard" src="https://github.com/hi2102/toy-projects/assets/71423455/01e595f9-8a4e-4c09-9dad-966cfecf9e25">





