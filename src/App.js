import React from "react";
import "./styles.css";
import AppBar from '@material-ui/core/AppBar'
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar'
import {makeStyles} from '@material-ui/core/styles'
const useStyles = makeStyles((theme)=>({
appBar:{
backgroundColor:'#fff'
}
}))
export default function App() {
  const classes = useStyles();
  return (
    <div className="App" >
      <AppBar position="static" className ={classes.appBar}>
        <Toolbar>
          <Typography variant ='h6' color ="primary">
                Blog Website
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
