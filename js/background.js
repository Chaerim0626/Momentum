const images = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg"];

//images array에서 랜덤하게 length개만큼 추출
const chosenImage = images[Math.floor(Math.random() * quotes.length)];


//js에서 html element 생성
const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;

document.body.appendChild(bgImage);