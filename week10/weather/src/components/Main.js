import React from 'react';
import { useSelector } from "react-redux";
import SearchBar from './SearchBar'
import WeatherDisplay from './WeatherDisplay'
import {Container} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  '@global': {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: 'none',
    },
  },
  link: {
    margin: theme.spacing(1, 1.5),
  },
  heroContent: {
    padding: theme.spacing(8, 0, 6),
  },
}));

const Main = () => {
	  const currentConditions = useSelector(state => state.selection.currentConditions);
	  const classes = useStyles();
	return (
		<>
      <Container maxWidth="sm" component="main" className={classes.heroContent}>
			<SearchBar />
			{ (currentConditions.Link) ? <WeatherDisplay /> : null}
		</Container>
		</>
	)
}

export default Main;

