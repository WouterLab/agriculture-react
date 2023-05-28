import { useContext, useEffect } from "react";
import { useState } from "react";
import { Layout } from "../shared/Layout";
import { PageTitle } from "../components/PageTitle";
import { WeatherAuto } from "../components/WeatherAuto";
import { WeatherBlock } from "../components/WeatherBlock";
import { Button } from "../shared/Button";
import { LoginContext } from "../context";

const WeatherPage = () => {
  const state = {
    temp: undefined,
    city: undefined,
    country: undefined,
    wind: undefined,
    humidity: undefined,
    pressure: undefined,
    clouds: undefined,
    error: undefined,
  };
  const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;
  const [info, setInfo] = useState(state);
  const [autoWeather, setAutoWeather] = useState(state);
  const [city, setCity] = useState("");
  const getWeather = (e) => {
    fetch(
      `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${API_KEY}`,
    )
      .then((res) => res.json())
      .then((data) => {
        fetch(
          `https://api.openweathermap.org/data/2.5/weather?lat=${data[0].lat}&lon=${data[0].lon}&units=metric&lang=ru&appid=${API_KEY}`,
        )
          .then((weather) => weather.json())
          .then((data) => {
            if (data.name) {
              setInfo({
                temp: data.main.temp,
                city: data.name,
                country: data.sys.country,
                wind: data.wind.speed,
                humidity: data.main.humidity,
                pressure: data.main.pressure,
                clouds: data.weather[0].description,
                error: undefined,
              });
            } else {
              setInfo({ ...info, error: "enter valid city" });
            }
          });
      });
  };
  const isLogged = useContext(LoginContext);

  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=55.75&lon=37.61&units=metric&lang=ru&appid=${API_KEY}`,
    )
      .then((res) => res.json())
      .then((data) => {
        setAutoWeather({
          temp: data.main.temp,
          city: data.name,
          country: data.sys.country,
          wind: data.wind.speed,
          humidity: data.main.humidity,
          pressure: data.main.pressure,
          clouds: data.weather[0].description,
          error: undefined,
        });
      });
  }, [API_KEY]);

  return (
    <Layout>
      <div className='flex flex-col items-center'>
        <PageTitle title='ПОГОДА' />
        <p className='w-3/5 text-center text-xl mb-12'>
          Будьте в курсе текущих погодных условий для вашей фермы, включая
          температуру, скорость ветра и видимость. Эта страница также содержит
          24-часовой и 7-дневный прогноз.
        </p>
        <div className='w-3/5 flex flex-col'>
          <h3 className='text-xl mb-2'>Поиск по населенным пунктам:</h3>
          <input
            type='text'
            placeholder='Введите название...'
            value={city}
            onChange={(e) => setCity(e.target.value)}
            onKeyPress={(e) => {
              if (e.key === "Enter") {
                getWeather();
              }
              return;
            }}
            className='text-2xl focus:outline-none bg-white text-neutral-700 px-8 py-4 placeholder:text-neutral-700 rounded-xl mb-8 focus:border-green-600 border-green-400 border-2 transition-all duration-300'
          />
          <Button onClick={getWeather}>Подтвердить</Button>

          {info.error && <h2>{info.error}</h2>}
          {!info.error && info.city && (
            <WeatherBlock
              city={info.city}
              clouds={info.clouds}
              temp={info.temp}
              country={info.country}
              humidity={info.humidity}
              pressure={Math.round(info.pressure * 0.750062)}
              wind={info.wind}
            />
          )}
          {isLogged && (
            <WeatherAuto
              city={autoWeather.city}
              clouds={autoWeather.clouds}
              temp={autoWeather.temp}
              country={autoWeather.country}
              humidity={autoWeather.humidity}
              pressure={autoWeather.pressure}
              wind={autoWeather.wind}
            />
          )}
          {!isLogged && (
            <h2 className='text-center text-2xl mb-8'>
              Выполните регистрацию или авторизуйтесь, чтобы автоматически
              узнавать погодные условия в вашем регионе
            </h2>
          )}
        </div>
      </div>
    </Layout>
  );
};

export { WeatherPage };
