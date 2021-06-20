import {ENTER_TEXT, FETCH_AUTOCOMPLETE, SET_SELECTION, FETCH_CURRENT_CONDITIONS, FETCH_FIVE_DAY} from './actions';

let initState = {
	enteredText: "",
	autocomplete: [],
	selection: {
		locationName: "",
		locationKey: "",
		currentConditions: [],
		fiveDay: []
	},
	favorites: []
};

export const reducer = (state = initState, action = {}) => {
	switch (action.type) {
		case ENTER_TEXT:
			let engChar = /^[A-Za-z ,]*$/;
			if (engChar.test(action.payload)) {
			return {...state,enteredText:action.payload};
			} else {
			return {...state}
			}
		case FETCH_AUTOCOMPLETE:
			return {...state, autocomplete:action.payload};
		case SET_SELECTION:
			let newSelectionA = {...state.selection,locationName:action.locationName,locationKey:action.locationKey};
			return {...state,
				selection:newSelectionA
		}
		case FETCH_CURRENT_CONDITIONS:
			let newSelectionB = {...state.selection,currentConditions:action.payload[0]};
			return {...state,
				selection:newSelectionB
		}
		case FETCH_FIVE_DAY:
			let newSelectionC = {...state.selection,fiveDay:action.payload.DailyForecasts};
			return {...state,
				selection:newSelectionC
		}
		case 'ADD_FAVORITE':
			let newFavoritesA = [...state.favorites];
			newFavoritesA.push({
				locationName:action.locationName,
				locationKey:action.locationKey
			})
			return {...state,
				favorites:newFavoritesA
			}
		case 'REMOVE_FAVORITE':
			let index = state.favorites.findIndex(city=>city.locationKey === action.locationKey);
			let newFavoritesB = [...state.favorites];
			newFavoritesB.splice(index,1)
			return {...state,
				favorites:newFavoritesB
			}
		default:
			return {...state}
	}

}