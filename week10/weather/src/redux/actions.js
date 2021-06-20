export const ENTER_TEXT = 'ENTER_TEXT';
export const FETCH_AUTOCOMPLETE = 'FETCH_AUTOCOMPLETE';
export const SET_SELECTION = 'SET_SELECTION';
export const FETCH_CURRENT_CONDITIONS = 'FETCH_CURRENT_CONDITIONS';
export const FETCH_FIVE_DAY = 'FETCH_FIVE_DAY';

const key = 'sWPoFAiWzkPJqczo3ykGNDa0BUOMuc3G';

export const enterText = (string) => {
	return {
		type: ENTER_TEXT,
		payload: string
	}
}


export const fetchAutocomplete = (text) => async (dispatch) => {
	const url = "http://dataservice.accuweather.com/locations/v1/cities/autocomplete";

	if (localStorage.getItem("autocomplete")) {
		let autocomplete = await JSON.parse(localStorage.getItem("autocomplete"));
		dispatch ({
			type: FETCH_AUTOCOMPLETE,
			payload: autocomplete
		});
	} 
	else {
		try{
			let res = await fetch(`${url}?apikey=${key}&q=${text}`);
			let data = await res.json();
			localStorage.setItem("autocomplete",JSON.stringify(data));
			dispatch ({
				type: FETCH_AUTOCOMPLETE,
				payload: data
			});
		} catch(err) {
			console.log(err);
		}
	}
}


export const setSelection = (locationKey,locationName) => {
	return {
		type: SET_SELECTION,
		locationKey,
		locationName
	}
}


export const fetchCurrentConditions = (locationKey) => async (dispatch) => {
	const url = "http://dataservice.accuweather.com/currentconditions/v1/";
	if (localStorage.getItem("currentConditions")) {
		let currentConditions = await JSON.parse(localStorage.getItem("currentConditions"));
		dispatch ({
			type: FETCH_CURRENT_CONDITIONS,
			payload: currentConditions
		});
	}
	else {
		try{
			let res = await fetch(`${url}${locationKey}?apikey=${key}`);
			let data = await res.json();
			localStorage.setItem("currentConditions",JSON.stringify(data));
			dispatch ({
				type: FETCH_CURRENT_CONDITIONS,
				payload: data
			});
		} catch(err) {
			console.log(err);
		}
	}
}

export const fetchFiveDay = (locationKey) => async (dispatch) => {
	const url = "http://dataservice.accuweather.com/forecasts/v1/daily/5day/";
	if (localStorage.getItem("fiveDay")) {
		let fiveDay = await JSON.parse(localStorage.getItem("fiveDay"));
		dispatch ({
			type: FETCH_FIVE_DAY,
			payload: fiveDay
		});
	}
	else {
		try{
			let res = await fetch(`${url}${locationKey}?apikey=${key}`);
			let data = await res.json();
			localStorage.setItem("fiveDay",JSON.stringify(data));
			dispatch ({
				type: FETCH_FIVE_DAY,
				payload: data
			});
		} catch(err) {
			console.log(err);
		}
	}
}


// export const search = (string) => async (dispatch) => {


// }