import React from 'react';
import {BrowserRouter,Link} from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import MaterialUILink from '@material-ui/core/Link';
// import {useStyles} from '../App';

const useStyles = makeStyles((theme) => ({
  '@global': {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: 'none',
    },
  },
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbar: {
    flexWrap: 'wrap',
  },
  toolbarTitle: {
    flexGrow: 1,
  },
  link: {
    margin: theme.spacing(1, 1.5),
  },
}));

const NavBar = () => {
	  const classes = useStyles();
	return (
  	<>
        <AppBar position="static" color="default" elevation={0} className={classes.appBar}>
          <Toolbar className={classes.toolbar}>
            <Typography variant="h6" color="inherit" noWrap className={classes.toolbarTitle}>
              Weather Check
            </Typography>
            <nav>
              <MaterialUILink variant="button" color="textPrimary" className={classes.link}  to="/" component={Link}>
          			Home
              </MaterialUILink>
        			<MaterialUILink variant="button" color="textPrimary" className={classes.link} to="/favorites" component={Link}>
          			Favorites
              </MaterialUILink>
          </nav>
        </Toolbar>
      </AppBar>
    </>
	)
}

export default NavBar;