const axios = require('axios');


const getClima = async(lat, lng) => {


    axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lng }&appid=46d6465a5da745651c59fec7dda2ddf1`)
}