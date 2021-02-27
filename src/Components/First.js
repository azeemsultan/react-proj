import { Button, Divider, Paper, Typography } from '@material-ui/core';
import React, { useState,useEffect } from 'react';
import { Helmet } from 'react-helmet'

import Head from './Bar'
const TITLE = 'My Page Title'

const First = (props) => {

    let [name,setName]=useState('');
    let [title,setTitle]=useState('');
    let [travel,setTravel]=useState('');
    const [inf,setInf]=useState([]);

    
    let you=localStorage.getItem('Name');
    
    useEffect(()=> {
        const user =  localStorage.getItem('Name');
        const email =  localStorage.getItem('Email');
        document.title='My Playground';
        console.log(user,email,'hehe',you)
        setInf(user);
      })

    let Populate=()=>{
        setName(`Name:`);
        setTitle('Title: Toes in the ocean, seat in the sand"')
        setTravel('Travel:The United Kingdom, made up of England, Scotland, Wales and Northern Ireland, is an island nation in northwestern Europe England – birthplace of Shakespeare and The Beatles – is home to the capital, London, a globally influential centre of finance and culture.') 
        console.log(name,title,travel)
        setClear(false);
        setLit(false);
       
        return(
            <div>
               <Helmet>
          <title>{ TITLE }</title>

        </Helmet>
            <Paper style={{textAlign:'start'}}>
            <ol >
                <li>
                    {name}
                    <br/>
                </li>
                <li>
                    {title}
                    <br/>
                </li>
                <li>
                    {travel}
                    <br/>
                </li>
            </ol>
            <br/>
            </Paper>
            </div>
        )
    }
    let [pop,setPop]=useState(false);
    let Poem=()=>{
        setName('Author: Shakespear');
        setTitle('Title:Fruit of the poisoned tree')
        setTravel('Poem: I was angry with my friend I told my wrath, my wrath did end.I was angry with my foe:I told it not, my wrath did grow')
        console.log(name,title,travel)
        setClear(false);
        setPop(false);
        return(
            <div>
            <Paper style={{textAlign:'start'}}>
            <ol >
                <li>
                    {name}
                    <br/>
                </li>
                <li>
                    {title}
                    <br/>
                </li>
                <li>
                    {travel}
                    <br/>
                </li>
            </ol>
            <br/>
            </Paper>
            </div>
        )
    }
    let [lit,setLit]=useState(false)
    let Clear=()=>{
        setName('')
        setTitle('')
        setTravel('')
        console.log(name,title,travel)
        setLit(false);
        setPop(false);
        return(
            <div></div>
        )
    }
    let [clear,setClear]=useState(false);
    function getCurrentDate(separator='-'){

        let newDate = new Date()
        let date = newDate.getDate();
        let month = newDate.getMonth() + 1;
        let year = newDate.getFullYear();
        
       
        return `${date}${separator}${month<10?`0${month}`:`${month}`}${separator}${year}`
        }
    
    
    return (
        <div>
           <Head/>
            <Typography style={{textAlign:'center',color:'#5993f0',marginTop:'20px'}}>
                 My Playground
            </Typography>
            <br/>
         
            <div style={{display:'flex',justifyContent:'center'}}>
            <Paper style={{width:'150px',height:'120px'}}> 
            <Typography style={{textAlign:'center',backgroundColor:'#5993f0',color:'white'}}>Name </Typography>
            <Divider/>
            <Typography style={{textAlign:'center',paddingTop:'20px',color:'#5993f0'}}>
                {inf}
            </Typography>
            </Paper>
            <Paper style={{marginLeft:'20px',width:'150px',height:'120px'}}> 
            <Typography style={{textAlign:'center',backgroundColor:'#5993f0',color:'white'}}>Course Title </Typography>
            <Divider/>
            <Typography style={{textAlign:'center',paddingTop:'20px',color:'#5993f0'}}>
                Computer Programmer
            </Typography>
            </Paper>
            <Paper style={{marginLeft:'20px',width:'150px',height:'120px'}}> 
            <Typography style={{textAlign:'center',backgroundColor:'#5993f0',color:'white'}}>Course ID </Typography>
            <Divider/>
            <Typography style={{textAlign:'center',paddingTop:'20px',color:'#5993f0'}}>
            CP 430
            </Typography>
            </Paper>
            <Paper style={{marginLeft:'20px',width:'150px',height:'120px'}}> 
            <Typography style={{textAlign:'center',backgroundColor:'#5993f0',color:'white'}}>Date </Typography>
            <Divider/>
            <Typography style={{textAlign:'center',paddingTop:'20px',color:'#5993f0'}}>
            20-02-2021
            </Typography>
            </Paper>
            </div>
            <br/>
            <Divider/>
            <Typography style={{textAlign:'center'}}>Click us once or twice</Typography>
            <br/>
            <div style={{display:'flex',justifyContent:'center'}}>
              
            <Button  color="primary" variant="contained" onClick={()=>alert("Surprise")}>Click Me!</Button>
            <Button style={{marginLeft:'20px'}} color="primary" variant="contained" onClick={()=>setPop(true)} >Adventure</Button>
            <Button style={{marginLeft:'20px'}} color="primary" variant="contained"  onClick={()=>setLit(true)}>Literature</Button>
            <Button style={{marginLeft:'20px'}} color="primary" variant="contained"  onClick={()=>setClear(true)}>Clear</Button>
            </div>
         {pop?  <Populate/>:null}
         {lit?  <Poem/>:null}
         {clear?  <Clear></Clear>:null}
        </div>
      );
}
 
export default First;