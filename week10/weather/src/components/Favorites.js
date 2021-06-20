import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import {Grid} from '@material-ui/core';
import MiniFavorite from './MiniFavorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';

const Favorites = () => {
	// const selection = useSelector(state => state.selection);
	const favorites = useSelector(state => state.favorites);
	// const dispatch = useDispatch();

	

	// let {WeatherText, WeatherIcon, Temperature} = selection.currentConditions;
	// const handleClick = () => {
	// 	if (favorites.some(city => city.locationKey === selection.locationKey)) {
	// 		dispatch({type:"REMOVE_FAVORITE", locationKey:selection.locationKey})
	// 	} else {
	// 		dispatch({type:"ADD_FAVORITE", locationName:selection.locationName, locationKey:selection.locationKey})
	// 	}
	// }
	// let favorited = (favorites.some(city => city.locationKey === selection.locationKey)) ? "favorited" : "";

	return (
		<Grid
		  container
		  direction="row"
		  justify="center"
		  alignItems="stretch" id="fiveday">
		  
		  {
		  	favorites.map((city,i) => {
		  		return(
	  			<MiniFavorite city={city} key={i}/>
	  			)

		  	})

		  }



		  		{/*<h2>{selection.locationName} <FavoriteBorderIcon id="favoriteicon" onClick={handleClick} className={favorited} /></h2>*/}
		{/*<div id="today">*/}
			{/*<img src={`https://www.accuweather.com/images/weathericons/${WeatherIcon}.svg`} alt="weather icon" />*/}
			{/*<div id="todaytemp">{Temperature.Metric.Value}°C</div>*/}
			{/*<div><p>{WeatherText}</p></div>*/}
		{/*</div>*/}

		</Grid>
	)
}


export default Favorites;


