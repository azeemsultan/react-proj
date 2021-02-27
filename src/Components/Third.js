import { Button, Divider, Grid, Paper, Typography } from '@material-ui/core';
import React, { useState,useEffect } from 'react';
import Head from './Bar'

const Third = () => {

    
  useEffect(()=>{
    navigator.geolocation.getCurrentPosition(function(position) {
      console.log("Latitude is :", position.coords.latitude);
      console.log("Longitude is :", position.coords.longitude);
      document.title="Where am I?"
      setL(position.coords.latitude)
      setLng(position.coords.longitude)
    });
  },[])

  let you=localStorage.getItem('Name');
    const [name,setName]=useState(you)
    const [current,setCurrent]=useState('Home')
    const [auth,setAuth]=useState('Shakespear')
    const [lat,setL]=useState([])
    const [lng,setLng]=useState([])
    const [start,setStart]=useState(false)
  


    return ( 
        <div>
            <Head/>
            <Grid container>
                <Grid item md={4} sm={3}></Grid>
                <Grid item md={4} sm={6}>
                    <br/>
                    <Paper style={{width:'100%'}}>
                        <div style={{color:'white',backgroundColor:'#5993f0',textAlign:'center'}}>
            <Typography style={{paddingTop:'15px'}}>
                Where Am I???
            </Typography>
            <br/>
            </div>
            <Divider/>
            <div style={{display:'flex',justifyContent:'center',marginTop:'20px'}}>
                <br/>
            <Button variant="contained" color="primary" onClick={()=>setStart(!start)}>Start Tracking</Button>
            <Button variant="contained" color="secondary" style={{marginLeft:'20px'}}
            onClick={()=>setStart(!start)}
            >Stop Tracking</Button>
            <br/>
            
            </div>
            <div style={{textAlign:'center'}}>
            <p>Author Name: {name}</p>

            {start? 
            <div>
             <p>Current Location: {current}</p>
             <p>Lat and Lng: {lat}:{lng}</p>
             </div>
            :null
        }
        <br/>
                 </div>
            </Paper>
            </Grid>
            <Grid item md={4} sm={3}></Grid>
            </Grid>
            
        </div>
     );
}
 
export default Third;