// OpenWeatherMap API 키 (실제 발급받은 키로 교체)
const apiKey = "eb1246072c1c96b9746f3cbe4100a362";

// 날씨 정보를 업데이트하는 함수
function updateWeather(lat, lon) {
  const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&lang=kr&appid=${apiKey}`;

  fetch(weatherUrl)
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP 오류: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      const city = data.name;
      const country = data.sys.country;
      const temperature = Math.round(data.main.temp);
      const description = data.weather[0].description;

      // 미리 선언된 요소들을 업데이트
      const container = document.getElementById("weather");
      container.querySelector(".weather-city").innerText = `${city}, ${country}`;
      container.querySelector(".weather-temp").innerHTML = `${temperature}&deg;C`;
      container.querySelector(".weather-desc").innerText = description;
    })
    .catch(error => {
      console.error("날씨 정보를 가져오는 중 오류 발생:", error);
      document.getElementById("weather").innerText = "날씨 정보를 불러오지 못했습니다.";
    });
}

// 브라우저의 위치 정보를 사용해 날씨 정보 업데이트
if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(
    (position) => {
      const { latitude, longitude } = position.coords;
      updateWeather(latitude, longitude);
    },
    (error) => {
      document.getElementById("weather").innerHTML = "위치 정보를 불러오지 못했습니다.";
    }
  );
} else {
  document.getElementById("weather").innerHTML = "브라우저가 위치 정보를 지원하지 않습니다.";
}