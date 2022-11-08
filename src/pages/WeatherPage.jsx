import { useEffect } from "react";
import { useState } from "react";
import Layout from "../components/Layout";
import PageTitle from "../components/PageTitle";
import WeatherAuto from "../components/WeatherAuto";
import WeatherBlock from "../components/WeatherBlock";

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
    fetch(`http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.location) {
          setInfo({
            temp: data.current.temp_c,
            city: data.location.name,
            country: data.location.country,
            wind: data.current.wind_kph,
            humidity: data.current.humidity,
            pressure: data.current.pressure_mb,
            clouds: data.current.cloud,
            error: undefined,
          });
        } else {
          setInfo({ ...info, error: "enter valid city" });
        }
      });
  };

  useEffect(() => {
    fetch(`http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=auto:ip`)
      .then((res) => res.json())
      .then((data) => {
        setAutoWeather({
          temp: data.current.temp_c,
          city: data.location.name,
          country: data.location.country,
          wind: data.current.wind_kph,
          humidity: data.current.humidity,
          pressure: data.current.pressure_mb,
          clouds: data.current.cloud,
          error: undefined,
        });
      });
  }, [API_KEY]);

  return (
    <Layout>
      <div className='flex flex-col items-center'>
        <PageTitle title='ПОГОДА' />
        <p className='w-3/5 text-center text-xl mb-4'>
          Будьте в курсе текущих погодных условий для вашей фермы, включая
          температуру, скорость ветра и видимость. Эта страница также содержит
          24-часовой и 7-дневный прогноз.
        </p>
        <div className='w-3/5 flex flex-col'>
          <WeatherAuto
            city={autoWeather.city}
            clouds={autoWeather.clouds}
            temp={autoWeather.temp}
            country={autoWeather.country}
            humidity={autoWeather.humidity}
            pressure={autoWeather.pressure}
            wind={autoWeather.wind}
          />
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
          <button
            onClick={getWeather}
            className='rounded-2xl bg-green-400 text-2xl px-14 py-3 text-white hover:text-black hover:bg-white transition-all duration-300 cursor-pointer hover:border-2 border-2 border-green-400 mb-8'>
            Подтвердить
          </button>
          {info.error && <h2>{info.error}</h2>}
          {!info.error && info.city && (
            <WeatherBlock
              city={info.city}
              clouds={info.clouds}
              temp={info.temp}
              country={info.country}
              humidity={info.humidity}
              pressure={info.pressure}
              wind={info.wind}
            />
          )}
          {!info.error && !info.city && (
            <h2 className='text-center text-2xl pb-4'>
              Погода в текущей локации
            </h2>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default WeatherPage;
