const WeatherAuto = ({
  city,
  clouds,
  temp,
  country,
  humidity,
  pressure,
  wind,
}) => {
  return (
    <div className='flex flex-col items-center mb-8 py-4 text-2xl rounded-2xl border-2 text-center'>
      <p>
        Ваш населенный пункт: {city}, {country}
      </p>
      <p>Температура: {temp} °C</p>
      <p>Облачность: {clouds}</p>
      <p>Ветер: {Math.round((wind * 1000) / 3600)} м/c</p>
      <p>Влажность: {humidity}%</p>
      <p>Давление: {pressure} рт.ст.</p>
    </div>
  );
};

export { WeatherAuto };
