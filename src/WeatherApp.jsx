
import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";


export default function WeatherApp() {
    const [weatherInfo, setWeatherInfo] = useState({
        city: "Delhi",
        feelsLike: 24.84,
        temp: 25.05,
        minTemp: 25.05,
        maxTemp: 25.05,
        humidity: 47,
        weather: "cloudy",
    });

    let updateInfo = (newInfo) => {
        setWeatherInfo(newInfo);
    }

    return (
        <>
            <h2 style={{ textAlign: "center", fontFamily: "monospace", fontSize: "2rem" }}>WEATHER APP</h2>
            < SearchBox updateInfo={updateInfo} />
            < InfoBox info={weatherInfo} />
        </>


    );



}