import { Button, Divider, Grid, Paper, Typography } from '@material-ui/core';
import React, { useState } from 'react';
import Head from './Bar'
const Second = () => {
    document.title="Fun Technology"
    const [tech,setTech]=useState(['React','Node','MongoDB']);
    const [more,setMore]=useState(false);
    const [detail,setDetail]=useState(['React: Frontend Library to build SPA','Author: Jordan Walke',
    'Node: Javascript runtime engine, fast performance','Author: Ryan Dahl','MongoDB: No SQL Database, more secure'
,'Author:  Dwight Merriman, Eliot Horowitz and Kevin Ryan']);
    return ( 
        <div>
            <Head/>
            <Grid container>
                <Grid item md={4} sm={3}></Grid>
                <Grid item md={4} sm={6}>
                    <br/>
                    <Paper style={{maxWidth:'500px',textAlign:'center'}}>
                        <div style={{backgroundColor:'#5993f0',color:'white'}}>
       <Typography style={{paddingTop:'12px',marginTop:'20px'}}>Fun Technology</Typography>
       <br/>
       </div>
      
       <Divider/>
       <br/>
       {tech.map(e=>
       <Typography>{e}</Typography>

       )}
       <br/>
              <Button variant="contained" onClick={()=>setMore(!more)}>{more?'View less':'View More'}</Button>
              {console.log(more)}
              <br/>
              <br/>
              {more && detail.map(k=> <Typography>{k}</Typography>
              )}
              
              <br/>
              <Divider/>
              <Typography style={{fontStyle:'italic'}}>React Node Mongo (MERN stack) is most in demand and perfect stack well optimized and high performance technologies to build applications</Typography>
              </Paper>
              </Grid>
              <Grid item md={4} sm={3}></Grid>
              </Grid>
        </div>

        
     );
}
 
export default Second;