//업데이트하고싶으면 let을 사용
//document : html을 가리키는 객체
//querySelector는 element를 css방식으로 검색


const title = document.querySelector(".hello:first-child h1");
console.dir(title);
title.innerText = "helloooo";

title.style.color = "blue"; //js에서 style 변경하기