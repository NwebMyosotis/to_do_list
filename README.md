# Cafe To do : 노마드코더 바닐라 JS 실습

---

프로젝트 이름: Cafe To Do<br />
제작기간: 2022.08.31 ~ 2022.09.05<br />
사용언어: HTML, CSS, Javascript

---

## 프로젝트 설명

![투두리스트 시안.png](/%ED%88%AC%EB%91%90%EB%A6%AC%EC%8A%A4%ED%8A%B8%20%EC%8B%9C%EC%95%88.png)
Cafe To Do 홈페이지는 학습 목적으로 제작된 To Do List 홈페이지입니다. <b>카페 메뉴판</b>을 컨셉으로 제작하였으며, 위의 이미지는 제작에 들어가기 앞서 adobe xd로 단순하게 디자인 해 본 시안입니다. 각각의 설명은 다음과 같습니다.<br />

> - 배경 이미지는 새로고침 할 때마다 4개의 이미지가 랜덤으로 출력됩니다.
> - 가장 위에 오게되는 Hello, Myosotis!은 유저 이름이 오는 위치입니다. 이름을 클릭할 경우 로그아웃됩니다.
> - 흰색 박스 위에는 현재 날짜와 시간이 오게됩니다.
> - 박스 안은 본격적인 할 일(to do list)를 작성하는 창입니다.
> - 체크 박스를 클릭할 경우 할 일 리스트가 제거됩니다.
> - 밑줄은 새로운 텍스트를 입력하는 창입니다. 입력 후 버튼을 누르면 할 일 리스트에 추가됩니다.
> - 박스 아래에는 현재 위치와 날씨, 기온이 오게됩니다.
> - 화면의 우측 위에는 명언을 볼 수 있는 버튼이 오게됩니다. 마우스가 올라가면 명언이 출력됩니다.

이외에도 별도의 로그인 창이 존재하며, 로그인 창은 로고와 페이지 이름, 유저 이름을 적는 입력창과 버튼으로 구분되어있습니다.

본 프로젝트는 노마드 코더의 '코코아톡 클론코딩'과 '바닐라 JS로 크롬 앱 만들기'의 복습을 목적으로 시작되었습니다. 여러 코드를 일부러 시도해보고 지우고를 반복해야하는 만큼 학습상의 편의를 위해 파일간 디테일한 구분에는 다소 소홀한 면이 있습니다.

특히 css파일의 경우 screen, component 구분 없이 [style.css](./css/style.css)에 모두 묶여있으니 참고 바랍니다.

또한 깃 허브 첫 업로드는 9월 2일로 제작 중반부터 업로드된 만큼 프로젝트의 모든 변화과정이 담겨있지는 않다는 점 역시 참고 바랍니다. 다음은 각 파일에 대한 간략한 설명과 해당 파일을 제작할 때 필자가 중요하게 여겼던 부분에 대한 개략적인 설명입니다.

---

# HTML

본 프로젝트에서 제작한 html 파일에는 [index.html](./index.html) 파일이 있습니다.

## index.html

index.html파일은 페이지의 전체적인 레이아웃을 구상하며 작성되었습니다. index.html의 각 구역을 살펴보기 수월하도록 나누면 다음과 같이 나눌 수 있습니다.

> - #splash-container
>   - #splash_logo
>   - #splash_question
> - #backgrund
> - main
>   - #name-container
>   - #clock-container
>   - #todobox-container
>   - #weather-container
> - aside
>   - #quotes-container

이를 기준으로 코드를 확인한다면 조금 더 수월하게 확인할 수 있으리라 생각합니다.

아이콘을 위해 [Font Awesome](https://fontawesome.com/)을 활용하였으며, 몇몇 아이콘의 경우 [Flaticon](https://www.flaticon.com/)사이트에서 이미지 파일을 다운받아 활용하였습니다.

index.html은 가능한 꼼꼼하게 작성하고자 했지만 제작자의 semantic tag에 대한 이해가 부족해 부적절한 태그가 사용되었을 수 있습니다. 또한 id와 class 이름을 정함에 있어 그 기준이 다소 불분명한 부분이 있습니다. 이로인해 코드를 확인하는데 어려움이 예상됩니다.

---

# CSS

CSS파일은 [style.css](./css/style.css)로 구성되어 있습니다.

## style.css

css파일은 transform, @keyframe 애니메이션을 학습하는 데 주력하였습니다.

여러가지 기능을 활용하며 학습하기 위해서 단일파일로 구성하였다는 점과 html에서 id와 class를 다소 통일성없게 설정한 점 때문에 코드를 훑어보기 난해할 수 있습니다.

이를 조금이나마 보완하기 위해서 각주를 이용하여 크게 구분해두었으니 참고하시면 좋을 것 같습니다. 각주의 종류는 다음과 같습니다.

> - list background
>   - greeting & username
>   - main contents
>     - clock
>     - todolist
>       - todolist-input
>     - weather
> - quotes sidebar
> - login-splash
>   - login-input
> - media query ~800px
> - media query_mobile

Media query의 경우 좌우 길이가 ~800px인 경우와 ~425px인 경우로 구별됩니다. 전자는 페이지를 작게 보는 사람을 위해서, 후자는 모바일을 활용하여 페이지를 살펴보는 경우를 대비하기 위함입니다. 그러나 좌우 길이 400px 이하의 환경에서는 제대로된 동작을 보장하지 않습니다.

---

# Javascript

Javascript파일은 js폴더의 [background.js](/js/backround.js), [clock.js](/js/clock.js), [login-splash.js](/js/login-splash.js), [quotes.js](/js/quotes.js), [todolist.js](/js/todolist.js), [weather.js](/js/weather.js) 6개의 js파일로 나누어집니다.

노마드 코더 사이트의 [바닐라 JS로 구글 앱 만들기](https://nomadcoders.co/javascript-for-beginners) 강의의 내용을 가능한 충실하게 따르는 것을 목적으로 제작되었습니다. 때문에 강의의 내용 대비 큰 변화는 없으나, 이벤트 실행 시 애니메이션이 동작하는 등의 몇 가지 작업이 추가되었습니다.

파일별 내용의 요약은 다음과 같습니다.

---

## [background.js](/js/backround.js)

> [0.jpeg](/img/0.jpeg), [1.jpeg](/img/1.jpeg), [2.jpeg](/img/2.jpeg), [3.jpeg](/img/3.jpeg) 네 개의 이미지 파일 중 하나를 선택하여 body태그에 background-image로서 부여하는 역할을 합니다.

---

## [clock.js](/js/clock.js)

> todo-box위의 #clock과 #date에 현재 날짜와 현재 시간을 부여합니다.

---

## [login-splash.js](/js/login-splash.js)

> 로그인 정보가 input되면 이를 #greeting-span의 유저 이름으로 보내며, 로그인 정보가 입력되는 경우 작동할 애니메이션, splash창의 숨김 처리까지 로그인창의 동작에 대한 전반적인 내용을 관리합니다.

---

## [quotes.js](js/quotes.js)

> 11개 명언 중 랜덤하게 하나를 뽑아 출력합니다. 11개의 명언은 네이버 [명언 정보](https://search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=1&ie=utf8&query=%EB%AA%85%EC%96%B8)에서 11개를 골라 가져왔습니다.

---

## [todolist.js](js/todolist.js)

> 투 두 리스트의 가장 핵심적인 javascript파일로 입력된 값을 저장하고, 리스트에 표시하며, 이를 제거하며, 새로고침을 하더라도 값이 저장되어있도록 하는 모든 과정이 포함되어 있습니다. 가장 관심을 갖고 제작한 파일이지만 localStorage를 다루는 테크닉이 부족해 추가 공부가 가장 필요한 부분이기도 합니다.

---

## [weather.js](/js/weather.js)

> todo-box하단에 위치정보와 날씨, 기온을 추가합니다. [Open Weather Map](https://openweathermap.org/)의 API를 활용하여 제작되었습니다.

---

# 결과물 이미지

![로그인창](/%EA%B2%B0%EA%B3%BC%EC%9D%B4%EB%AF%B8%EC%A7%80.png)
![메인창](/%EA%B2%B0%EA%B3%BC%EC%9D%B4%EB%AF%B8%EC%A7%802.png)
