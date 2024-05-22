const apiKey = "0f0c3e06a7195d6ce03803f9ebb4a8c5";

export function getGeoLocation() {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
}

export async function fetchWeatherReport({ latitude, longitude }) {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}`
    );
    const weatherReport = await response.json();
    const filteredReport = {
      temparature: weatherReport.main.temp,
      main: weatherReport.weather[0].main,
      description: weatherReport.weather[0].description,
      city: weatherReport.name,
      humidity: weatherReport.main.humidity,
      windSpeed: weatherReport.wind.speed,
    };

    return { success: true, data: filteredReport };
  } catch (error) {
    alert("Failed to fetch weather report");
    return { success: false };
  }
}
