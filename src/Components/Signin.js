import { Button, Divider, Grid, Paper, TextField, Typography } from '@material-ui/core';
import React,{useEffect,useState} from 'react';
import { Link } from 'react-router-dom';

const SignIn = () => {

    useEffect(()=> {
        const user =  localStorage.getItem('Name');
        const email =  localStorage.getItem('Email');
        const password= localStorage.getItem('Password')
        console.log(user,email,'hehe')
        setInf(email);
        setPf(password);
      })

      let [inf,setInf]=useState('')
      let [pf,setPf]=useState('')

     let [email,setEmail]=useState('');
     let [password,setPassword]=useState('');
     let flag=0
     let authen=()=>{
       if(inf==email && pf==password)
       {
           alert('Login Successful')
           flag=1;
       }
      else{
        window.location.reload(false);
          alert('Wrong credentials')
          
      }

     }
    
    return ( 
        <Grid container>
        <Grid item md={3} sm={2}></Grid>

        <Grid item md={6} sm={8} xs={12}>
        <br/>
        <Paper elevation={3}>
     
        <div style={{textAlign:'center',backgroundColor:'#5993f0',color:'white'}}>
         
            <Typography variant="h5" style={{marginBottom:'10px',paddingTop:'10px'}}>
                Login now
            </Typography>
            <Divider/>
          
        </div>
        <br/>
    
         
       <div style={{display:'flex',width:'100%'}}>
           <div style={{width:'100%',textAlign:'center'}}>
          Enter your Email/Username
          <div></div>
          <TextField
          name="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        
          style={{width:'80%'}}/>
          </div>
       </div>
       <br/>
       <div style={{display:'flex',width:'100%'}}>
           <div style={{width:'100%',textAlign:'center'}}>
          Enter your Password
          <div></div>
          <TextField
          name="password" 
          value={password}
          type="number"
          onChange={e => setPassword(e.target.value)}
          style={{width:'80%'}}/>
          </div>
       </div>
       <br/>
       <div style={{display:'flex',width:'100%',justifyContent:'center'}}>
         
    <Link to="/first">
               <Button onClick={()=>authen()} style={{marginBottom:'20px',backgroundColor:'#5993f0',color:'white'}} variant="contained">Login</Button> 
               
               </Link>
   
          
       </div>
       <div style={{display:'flex',width:'100%'}}>
       <Typography style={{marginLeft:'auto'}} variant="subtitle2"><Link to="/">Dont have an account?</Link></Typography>  
       </div>  
    </Paper> 
    </Grid>
    <Grid item md={3} sm={2}></Grid>
    </Grid>
     );
}
 
export default SignIn;