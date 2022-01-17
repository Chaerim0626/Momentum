const clock = document.querySelector("h2#clock")

function getClock() {
    const date = new Date(); //Date object만들기
   
   //padStart() 가져가야하는 길이 2로 설정하고 아니면 좌측에 0추가
    const hours = String(date.getHours()).padStart(2,"0");
    const minutes = String(date.getMinutes()).padStart(2,"0");
    const seconds = String(date.getSeconds()).padStart(2,"0");
   
   
    clock.innerText = (`${hours}:${minutes}:${seconds}`);

}
   

setInterval(getClock, 1000); //매초마다 시계 실행