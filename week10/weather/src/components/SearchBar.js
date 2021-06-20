import React from 'react';
import {connect} from 'react-redux';
import {enterText, fetchAutocomplete, setSelection, fetchCurrentConditions,fetchFiveDay} from '../redux/actions';
import { Autocomplete } from '@material-ui/lab';
import { TextField } from '@material-ui/core';

class SearchBar extends React.Component {
	constructor() {
		super();
		this.state = {
			inputText: ""
		}
	}
	handleChange = (e) => {
		this.props.enterText(e.target.value);
	}
	handleSelectOption = (value) => {
		this.props.enterText("");
		this.setState({inputText:""});
		this.props.setSelection(value.Key,`${value.LocalizedName}, ${value.Country.LocalizedName}`);
		this.props.fetchCurrentConditions(value.Key);
		this.props.fetchFiveDay(value.Key);
	}
	componentDidUpdate = () => {
		if (this.state.inputText !== this.props.enteredText) {
			this.setState({inputText:this.props.enteredText});
			if (this.props.enteredText.length>0) {
				this.props.fetchAutocomplete(this.props.enteredText);
			}
		}
	}
	render () {
		let {enteredText, autocomplete} = this.props;
		return (
			<Autocomplete
			disableClearable={true}
			id="combo-box-demo"
			options={autocomplete}
			onChange={(event, value) => value && this.handleSelectOption(value)}
			inputValue={enteredText}
			getOptionLabel={(option) => `${option.LocalizedName}, ${option.Country.LocalizedName}`}
			style={{ width: 300 }}
			size="small"
			renderInput={(params) => <TextField {...params} label="Search for a city" variant="outlined" onChange={this.handleChange} onKeyUp={this.handleEnter}/>} />
		)
	}
}

const mapStateToProps = (state) => {
	return {
		enteredText: state.enteredText,
		autocomplete: state.autocomplete,
		locationKey: state.locationKey
	}
}

const dispatchStateToProps = (dispatch) => {
	return {
		enterText: (text) => dispatch(enterText(text)),
		fetchAutocomplete: (text) => dispatch(fetchAutocomplete(text)),
		setSelection: (locationKey,locationName) => dispatch(setSelection(locationKey,locationName)),
		fetchCurrentConditions: (locationKey) => dispatch(fetchCurrentConditions(locationKey)),
		fetchFiveDay: (locationKey) => dispatch(fetchFiveDay(locationKey))
	}
}

export default connect(mapStateToProps,dispatchStateToProps)(SearchBar);
