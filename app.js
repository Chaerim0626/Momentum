//업데이트하고싶으면 let을 사용
//document : html을 가리키는 객체
//querySelector는 element를 css방식으로 검색


const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");


function onLoginSubmit(event) {
    //console.log(loginInput.value); input 내용 가져오기
    
    event.preventDefault(); //유저가 이름을 form을 통해 제출했을 때 기본동작 막기
    console.log(loginInput.value);

}

loginForm.addEventListener("submit", onLoginSubmit);