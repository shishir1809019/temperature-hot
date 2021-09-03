const spinner = document.getElementById("spinner");
const loadCityWeather = () => {
  const cityNameText = document.getElementById("input-field");
  const cityName = cityNameText.value;
  cityNameText.value = "";
  document.getElementById("weather-container").textContent = "";
  console.log(cityName);

  if (cityName == "") {
    //
  } else {
    spinner.removeAttribute("hidden");

    fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${"c4e705f458c9c6f55f91e0029eaea0eb"}&units=metric`
    )
      .then((res) => res.json())
      .then((data) => {
        spinner.setAttribute("hidden", "");
        displayCityWeather(data);
      });
  }
};

const displayCityWeather = (data) => {
  console.log(data);
  const weatherContainer = document.getElementById("weather-container");
  // weatherContainer.textContent = "";
  const div = document.createElement("div");
  div.innerHTML = `
      <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}.png" alt="" />
          <h1 >${data.name}</h1>
          <h3><span>${data.main.temp}</span>&deg;C</h3>
          <h1 class="lead">${data.weather[0].main}</h1>
      `;
  weatherContainer.appendChild(div);
};
