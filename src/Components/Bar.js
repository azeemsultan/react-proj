import { Button } from '@material-ui/core';
import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import '../App.css'

const Head = () => {

   let [col,setCol]=useState('#5993f0')
   let [f,setF]=useState(false)
   let [s,setS]=useState(false)
   let [t,setT]=useState(false)

   let meth=()=>{
     setF(true);
     setS(false);
     setT(false);
   }
  
    return ( 
        <div style={{display:'flex',marginLeft:'40px'}}>
        <div style={{flex:1}}>
            <Link to="/first">
          <Button className="btn" id="highlight" onClick={()=>meth}>
           First Page
          </Button>
          </Link>
          </div>
          <div style={{flex:1}}>
            <Link to="/second">
          <Button className="btn">
           Second Page
          </Button>
          </Link>
          </div>
          <div style={{flex:1}}>
            <Link to="/third">
          <Button className="btn">
           Third Page
          </Button>
          </Link>
          </div>
          <div style={{flex:1}}>
             
            <Link to="/login">
          <Button >
           Logout
          </Button>
          </Link>
          </div>
      
        </div>
     );
}
 
export default Head;