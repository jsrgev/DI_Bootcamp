import { useSelector } from "react-redux";

const convertTemp = (fahrenheit) => {
	let celsius =  (fahrenheit -32) * (5/9);
	return celsius.toFixed(0);
}

const MiniForecast = ({index}) => {
	const forecast = useSelector(state => state.selection.fiveDay[index]);
	let date = new Date(forecast.Date);
	let days = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"]
	let day = days[date.getDay()];
	return (
	<div>
	{day}
	<img src={`https://www.accuweather.com/images/weathericons/${forecast.Day.Icon}.svg`} alt="weather icon" />

	<div>{convertTemp(forecast.Temperature.Minimum.Value)} – {convertTemp(forecast.Temperature.Maximum.Value)}</div>
	</div>
	)
}

export default MiniForecast