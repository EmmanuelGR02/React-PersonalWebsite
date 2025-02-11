import meImage from "../../assets/Images/me.jpeg";
import "animate.css";
import "./Home.css";
import Footer from "../../Footer/Footer";
import axios from "axios";
import { useEffect, useState } from "react";

// Define a type for weather data
type WeatherData = {
  name: string;
  weather: { description: string }[];
  main: { temp: number };
};

function Home() {
  const [time, setTime] = useState(new Date());
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [error, setError] = useState("");

  useEffect(() => {
    // Update time every second
    const interval = setInterval(() => setTime(new Date()), 1000);

    // Clean up interval on component unmount
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Fetch user's location and weather data
    const fetchWeather = async () => {
      if (!navigator.geolocation) {
        setError("Geolocation is not supported by your browser.");
        return;
      }

      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const lat = position.coords.latitude;
          const lon = position.coords.longitude;

          try {
            const apiKey = "f9649f8b582b368959ad95e8662a664b";
            const response = await axios.get(
              `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`
            );
            setWeather(response.data);
          } catch (err) {
            setError("Unable to fetch weather data.");
          }
        },
        (err) => {
          setError("Unable to retrieve your location.");
        }
      );
    };

    fetchWeather();
  }, []);

  function celToFa(celsius: number) {
    return Math.round(celsius * 9 / 5 + 32);
  }

  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
      />
      <div className="main-container">
        <div className="img-container animate__animated animate__backInLeft">
          <img className="me-img" src={meImage} alt="Me"></img>
        </div>

        <div className="introText-container animate__animated animate__backInRight">
          <h4 className="hello-text">Hello,</h4>
          <h2 className="name-text">I'm Emmanuel Gutierrez Rivera.</h2>
          <h5 className="student-text">Computer Science Student</h5>
        </div>

        <div className="welcomeMessage-container animate__animated animate__backInLeft">
          <p className="welcome-message">
            Welcome to my website! Thanks for visiting. Please take your time to
            explore my work. If you have any questions or would like to connect,
            feel free to reach out. Happy browsing!
          </p>
        </div>

        <div className="widget-container animate__animated animate__backInRight">
          <h3 className="widget-title">Widgets</h3>
          {/* Time */}
          <div className="widget-time">
            <p>
              {time.toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
                hour12: true,
              })}
            </p>
          </div>

          {/* Date */}
          <div className="widget-date">
            <p>{time.toLocaleDateString()}</p>
          </div>

          {/* Weather */}
          <div className="widget-weather">
            {weather ? (
              <p>
                {weather.name}: {weather.weather[0].description},{" "}
                {celToFa(weather.main.temp)}°
              </p>
            ) : error ? (
              <p>{error}</p>
            ) : (
              <p>Loading...</p>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;
