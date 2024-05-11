const input = document.querySelector("input")
const form = document.querySelector("form")
const searchBtn = document.querySelector("button")
const currLocation = document.querySelector("#current-location")
const currWeather = document.querySelector("#current-weather")
const currTemp = document.querySelector("#currTem")
const currCloud = document.querySelector("#current-cloud")
const fillsLike = document.querySelector("#fills-like")
const cloud = document.querySelector("#cloud")
const Humidity = document.querySelector("#Humidity")
const Visibilty = document.querySelector("#Visibilty")
const wind_kph = document.querySelector("#wind_kph")
const UV = document.querySelector("#UV")
const body = document.querySelector("#all-container")

// const url = `https://api.weatherapi.com/v1/current.json?key=5b27a6ef3547402582e62007222306&q=${input.value}`

const HandleSubmit = (e) => {
  e.preventDefault()
  showdata(input.value)
}

const showdata = async (input) => {
  try {
    const response = await fetch(
      `https://api.weatherapi.com/v1/current.json?key=5b27a6ef3547402582e62007222306&q=${input}`
    )
    const data = await response.json()
    weather(data)
  } catch (error) {
    alert("Location not found")
  }
}

const weather = (data) => {
  console.log(data)
  console.log(` ${data.current.last_updated}`)
  currLocation.innerHTML = `${data.location.name},${data.location.region},${data.location.country}`
  currWeather.innerHTML = ` Current Weather    ${data.current.last_updated}`
  currTemp.innerHTML = `${data.current.temp_c}C<sup>0</sup>`
  currCloud.innerHTML = `${data.current.condition.text}`
  fillsLike.innerHTML = `Fills Like ${data.current.feelslike_c}<sup>0</sup>`
  cloud.innerHTML = `${data.current.cloud}`
  Humidity.innerHTML = `${data.current.humidity}`
  Visibilty.innerHTML = `${data.current.vis_km}`
  wind_kph.innerHTML = `${data.current.wind_kph}`
  UV.innerHTML = `${data.current.uv}`
  changeback(`${data.current.condition.text}`)
  input.value = ""
}

showdata("shevgaon")
form.addEventListener("submit", HandleSubmit)

const changeback = (Sunny) => {
  if (Sunny === "Mist") {
    body.classList.add("bodyImage")
    body.style.backgroundImage =
      "Url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQry8DUHOkRbymLdjpHz-iR5MvHQv3b4MF0vityjrNBAY4jValjYTBaD3OddlhaNKwCDXE&usqp=CAU')"
  } else if (Sunny === "Sunny") {
    body.classList.add("bodyImage")
    body.style.backgroundImage =
      "Url('https://c8.alamy.com/comp/DM5YYE/partly-sunny-weather-DM5YYE.jpg')"
  } else if (Sunny === "Partly cloudy") {
      body.classList.add("bodyImage")
    body.style.backgroundImage =
      "Url('https://i.pinimg.com/originals/3c/6d/81/3c6d812bd53d19b45202e5483380b97a.gif')"
  } else if (Sunny === " Cloudy") {
      body.classList.add("bodyImage")
    body.style.backgroundImage =
      "Url('https://images.pexels.com/photos/158163/clouds-cloudporn-weather-lookup-158163.jpeg?cs=srgb&dl=pexels-pixabay-158163.jpg&fm=jpg')"
  } else if (Sunny === "Light rain") {
    body.classList.add("bodyImage")
    body.style.backgroundImage =
      "Url('https://media2.giphy.com/media/PbOaO2fedzQLm/giphy.gif?cid=6c09b952xtj2rdhuaaob5w3cssx0b7shozf2a0d9ar01d85x&ep=v1_gifs_search&rid=giphy.gif&ct=g')"
  }
}
