// Get the input element and the submit button
const cityInput = document.querySelector('#city-input')
const submitButton = document.querySelector('#submit-button')
const loadingText = document.querySelector('#loading-text')
const weatherData = document.querySelector('#weather-data')
const cityElement = document.querySelector('#city')
const temperatureElement = document.querySelector('#temperature')
const iconElement = document.querySelector('#icon')
const windSpeedElement = document.querySelector('#wind-speed')
const cloudinessElement = document.querySelector('#cloudiness')
const sunriseElement = document.querySelector('#sunrise')
const sunsetElement = document.querySelector('#sunset')
const mapElement = document.querySelector('#map')
// Define the API key for OpenWeatherMap
const API_KEY = '93480a67f260c97b3cde833ec545cecc'
const API_GOOGLE_KEY = '  '
// Handle the submit button click event
submitButton.addEventListener('click', async (event) => {
  event.preventDefault()
  const city = cityInput.value // Get the city name from the input element
  if (!city) {
    // Check if the city input is not empty
    alert('Please enter a city name.')
    return
  }
  loadingText.style.display = 'block'
  weatherData.style.display = 'none'
  // Fetch the weather data from the API
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
  )
  const data = await response.json()
  if (data.cod !== 200) {
    alert('Could not find weather data for that city. Please try again.')
    loadingText.style.display = 'none'
    return
  }
  loadingText.style.display = 'none'
  weatherData.style.display = 'block'
  cityElement.textContent = data.name
  // ..Getting the temperature in degrees Celsius. Doesn't work yet
  const temperature = data.main.temp
  const temperatureCelsius = ((temperature - 32) * 5) / 9
  temperatureElement.textContent = `Temperature: ${Math.round(
    temperatureCelsius
  )}°C`

  iconElement.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
  windSpeedElement.textContent = `Wind Speed: ${data.wind.speed} m/s`
  cloudinessElement.textContent = `Cloudiness: ${data.clouds.all}%`
  const sunriseTimestamp = data.sys.sunrise
  const sunriseDate = new Date(sunriseTimestamp * 1000)
  sunriseElement.textContent = `Sunrise: ${sunriseDate.toLocaleTimeString()}`
  const sunsetTimestamp = data.sys.sunset
  const sunsetDate = new Date(sunsetTimestamp * 1000)
  sunsetElement.textContent = `Sunset: ${sunsetDate.toLocaleTimeString()}`

  mapElement.innerHTML = `<iframe
      width="600"
      height="450"
      frameborder="0"
      style="border:0"
      src="https://www.google.com/maps/embed/v1/place?key=${API_GOOGLE_KEY}-here&q=${data.name}"
      allowfullscreen
    ></iframe>`
})
// ..Get my Location. Doesn't work yet
const getLocationButton = document.querySelector('#get-location-button')

getLocationButton.addEventListener('click', () => {
  if ('geolocation' in navigator) {
    navigator.geolocation.getCurrentPosition((position) => {
      const latitude = position.coords.latitude
      const longitude = position.coords.longitude

      fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`
      )
        .then((response) => response.json())
        .then((data) => {
          loadingText.style.display = 'none'
          weatherData.style.display = 'block'
          cityElement.textContent = data.name
          const temperature = data.main.temp
          const temperatureCelsius = ((temperature - 32) * 5) / 9
          temperatureElement.textContent = `Temperature: ${Math.round(
            temperatureCelsius
          )}°C`
        })
    })
  } else {
    console.error('Geolocation is not found.')
  }
})

// ..Googlrmaps Doesn't work yet
const latitude = data.coord.lat
const longitude = data.coord.lon

const map = new google.maps.Map(document.getElementById('map'), {
  center: { lat: latitude, lng: longitude },
  zoom: 10,
})

const marker = new google.maps.Marker({
  position: { lat: latitude, lng: longitude },
  map: map,
})
