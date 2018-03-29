var axios = require("axios");

async function getMeteoData() {
    try {
        var meteoResult = await axios.get("http://api.apixu.com/v1/current.json?key=a5db5df4bf9a4289ac8194119182603&q=Chisinau");
        console.log("Meteo data: ", meteoResult && meteoResult.data);
    }
    catch (error) {
        console.log("Error while getting meteo data: ", error);
    }
}

getMeteoData();