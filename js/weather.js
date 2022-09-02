function onGeoOk(postion) {
  const API_KEY = "b3be012008051260d5ac5ba649d32d09";
  const lat = postion.coords.latitude;
  const lon = postion.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url).then((response) => {
    response.json().then((data) => {
      const regionElement = document.querySelector("#region");
      const weatherElement = document.querySelector("#weather");
      regionElement.innerText = `위치: ${data.name}`;
      weatherElement.innerText = `현재날씨: ${data.weather[0].main} / ${data.main.temp}℃`;
    });
  });
}
function onGeoNot() {
  alert("위치 정보를 불러오는데 실패했습니다.");
}
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoNot);
