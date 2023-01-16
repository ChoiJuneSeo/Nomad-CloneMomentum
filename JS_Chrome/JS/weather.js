
const API_KEY = "c0b22c4ba28c04bfb68a7e1a783829db";

function onGeoOk(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    console.log(url)
    fetch(url)
    .then((response) => response.json())
    .then((data) => {
        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");
        city.innerText = data.name;
        weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
    });
}

function onGeoError(){
    alert('위치 정보를 불러오는데 실패했습니다. 날씨 정보를 불러올 수 없습니다.')
}

navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError)