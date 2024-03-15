function fetchZipCodeData() {
  const zipCode = document.getElementById("zip-input").value
  const stateImage = document.getElementById("state-image")
  fetch(`http://api.zippopotam.us/us/${zipCode}`)
    .then(response => response.json())
    .then(data => {
      console.log(data)
      if (data["post code"]) {
        stateImage.classList.remove("hidden")
        stateImage.setAttribute('src', `states/${data.places[0]["state abbreviation"]}.svg`)
        document.getElementById("postal-code").innerHTML = data["post code"]
        document.getElementById("city").innerHTML = data.places[0]["place name"]
        document.getElementById("state").innerHTML = data.places[0].state
        document.getElementById("longitude").innerHTML = data.places[0].longitude
        document.getElementById("latitude").innerHTML = data.places[0].latitude

        document.getElementById("zip-label").classList.remove("hidden")
        document.getElementById("city-label").classList.remove("hidden")
        document.getElementById("state-label").classList.remove("hidden")
        document.getElementById("long-label").classList.remove("hidden")
        document.getElementById("lat-label").classList.remove("hidden")
        document.getElementById("error-message").classList.add("hidden")
      } else {
        stateImage.classList.add("hidden")
        document.getElementById("postal-code").innerHTML = ''
        document.getElementById("city").innerHTML = ''
        document.getElementById("state").innerHTML = ''
        document.getElementById("longitude").innerHTML = ''
        document.getElementById("latitude").innerHTML = ''

        document.getElementById("zip-label").classList.add("hidden")
        document.getElementById("city-label").classList.add("hidden")
        document.getElementById("state-label").classList.add("hidden")
        document.getElementById("long-label").classList.add("hidden")
        document.getElementById("lat-label").classList.add("hidden")
        document.getElementById("error-message").classList.remove("hidden")
      }
    });
}