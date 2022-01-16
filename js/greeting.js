//업데이트하고싶으면 let을 사용
//document : html을 가리키는 객체
//querySelector는 element를 css방식으로 검색


const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden"; //string포함된 변수는 대문자로 표기
const USERNAME_KEY = "username";


function onLoginSubmit(event) {
    //console.log(loginInput.value); input 내용 가져오기
    
    //브라우저 기본동작 막기
    event.preventDefault(); 
    
    //form에 hidden이라는 class 추가, form 숨기기
    loginForm.classList.add(HIDDEN_CLASSNAME); 

    //입력한 값을 username 변수에 넣기
    const username = loginInput.value; 
    
    //입력한 값을 local storage에 존재하게 설정
    localStorage.setItem(USERNAME_KEY, username);

    /*비어있는 h1인 greeting에 text넣기
    greeting.innerText = `Hello ${username}`; 

    h1에서 hidden이라는 클래스 삭제
    greeting.classList.remove(HIDDEN_CLASSNAME); */

    paintGreetings(username);
}

function paintGreetings(username) {

    //text 추가
    greeting.innerText = `Hello ${username}`; 
    //class명 제거
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) { //user정보 없으면

    //form의 hidden class 지우기, 화면에 폼 표시
    loginForm.classList.remove(HIDDEN_CLASSNAME); 
    loginForm.addEventListener("submit", onLoginSubmit);
}
else {
    paintGreetings(savedUsername);
}