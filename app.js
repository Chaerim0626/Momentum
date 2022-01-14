//업데이트하고싶으면 let을 사용
//document : html을 가리키는 객체
//querySelector는 element를 css방식으로 검색


const title = document.querySelector(".hello:first-child h1");



function handleTitleClick() {
    title.style.color = "blue"; //js에서 style 변경하기
    console.log("title was clicked!");
}

function handleMouseEnter() {
    title.innerText = "Mouse is here!";
}

function handleMouseLeave() {
    title.innerText = "Mouse is gone!";
}


title.addEventListener("click", handleTitleClick);
title.addEventListener("mouseenter", handleMouseEnter);
title.addEventListener("mouseleave", handleMouseLeave)