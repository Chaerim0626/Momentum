const API_KEY = "af0d4dbfaa9e5b7f0cc12c6a3ab87a1f";

function onGeoOK(position) {
    const lat = position.coords.latitude; //위도
    const lon = position.coords.longitude; //경도

    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    console.log(url);

    fetch(url)
    .then(response => response.json())
    .then(data => {
       /*const city = document.querySelector("#weather span:last-child");
       const weather = document.querySelector("#weather span:first-child");
       const temp = document.querySelectorAll("#weather span");
       const feels_temp = document.querySelector("#weather span"); */
       const info = document.querySelectorAll("#weather span");
       
       info[0].innerText = data.name;
       info[1].innerText = data.weather[0].main;
       info[2].innerText = data.main.temp + "°";

       const iconcode = data.weather[0].icon;
       const iconurl = "http://openweathermap.org/img/w/" + iconcode + ".png";
       
       const img = document.createElement("img");
       img.setAttribute("src", iconurl);
       info[3].appendChild(img);
       

    });

}

function onGeoError() {
    alert("Can't find");
}

navigator.geolocation.getCurrentPosition(onGeoOK,onGeoError);