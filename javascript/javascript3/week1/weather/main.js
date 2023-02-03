function getCurrentPosition() {
  navigator.geolocation.getCurrentPosition((position) => {
    latitude = position.coords.latitude
    longitude = position.coords.longitude
  })
}

function error(err) {
  console.warn(`ERROR(${err.code}): ${err.message}`)
}

// https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=93480a67f260c97b3cde833ec545cecc,
