import React, { useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import Grow from '@material-ui/core/Grow';
import { CircularProgress, TextField } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';



import Videos from './Videos';



import useStyles from './styles';
import axios from 'axios';
import Videopost from './Videopost';
import { getPlaylistItems, getPlaylists } from '../../../actions/sections';



const History = () => {


    const classes = useStyles();
    const dispatch = useDispatch();


    useEffect(() => {  
      dispatch(getPlaylistItems());
    }, []);



    
      return (
        <Grid>
          <Videos/>
        </Grid>
        
      )
  }

export default History; 