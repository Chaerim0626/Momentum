//업데이트하고싶으면 let을 사용
//document : html을 가리키는 객체
//querySelector는 element를 css방식으로 검색


const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden"; //string포함된 변수는 대문자로 표기



function onLoginSubmit(event) {
    //console.log(loginInput.value); input 내용 가져오기
    
    event.preventDefault(); //브라우저 기본동작 막기
    
    loginForm.classList.add(HIDDEN_CLASSNAME); 
    const username = loginInput.value; //입력한 값을 username 변수에 넣기
    
    greeeting.innerText = `Hello ${username}`; //greeting id에 text추가
    greeeting.classList.remove(HIDDEN_CLASSNAME);
}

loginForm.addEventListener("submit", onLoginSubmit);