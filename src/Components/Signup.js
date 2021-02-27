import { Button, Divider, Grid, Paper, TextField, Typography } from '@material-ui/core';
import React,{useState} from 'react';
import { Link } from 'react-router-dom';


const Signup = () => {

 
   const [name,setName]=useState('')
   const [email,setEmail]=useState('')
   const [password,setPassword]=useState('')


   let ab=[name,email,password];
  
  let handle=()=>{
    const name=ab[0]
    const email=ab[1]
    const pass=ab[2]
   
    localStorage.setItem('Name',name)
    localStorage.setItem('Email', email);
    localStorage.setItem('Password', pass);
  }

  let emp= localStorage.setItem('Email', email);
  handle();

  let authen=()=>{
    if(emp==email )
    {
        alert('Customer Already Exist')
        window.location.reload(false);
        
    }
   else{
       alert('Signup Successful')
       
   }

  }

  console.log(ab[0],'hehe')
  console.log(name,email,password)
  
    return ( 
        <Grid container>
            <Grid item md={3} sm={2}></Grid>

            <Grid item md={6} sm={8} xs={12}>
                <br/>
                <br/>
                <Paper elevation={3}>
                    <div style={{textAlign:'center',backgroundColor:'#5993f0',color:'white'}}>
                        <Typography variant="h5" style={{marginBottom:'10px',paddingTop:'10px'}}>
                            Register now
                        </Typography>
                        <Divider/>
                    </div>
                    <br/>
                   <div style={{display:'flex',width:'100%'}}>
                       <div style={{width:'100%',textAlign:'center'}}>
                      Enter your Name
                      <div></div>
                      <TextField 
                      name="name"
                      value={name}
                      onChange={e => setName(e.target.value)}
                      style={{width:'80%'}}/>
                      </div>
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
                      type="number"
                      value={password}
                      onChange={e => setPassword(e.target.value)}
                      style={{width:'80%'}}/>
                      </div>
                   </div>
                   <br/>
                   <div style={{display:'flex',width:'100%',justifyContent:'center'}}>
                   <Link to="/login">
                           <Button onClick={()=>authen()}  style={{marginBottom:'20px',backgroundColor:'#5993f0',color:'white'}} variant="contained"
                           
                           >Register</Button> 
                           </Link>
                           
                       
                   </div>
                </Paper>
            </Grid>

            <Grid item md={3} sm={2}></Grid>
        </Grid>
     );
}
 
export default Signup;