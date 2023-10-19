import React, { useEffect } from 'react'
import {useNavigate} from "react-router-dom"
import Plane from './Plane';

const PlaneAnimation = () => {
    const navigate = useNavigate(); 
    const changepage=()=>{
       navigate("/happybirthaydudeee");
    }
    useEffect(()=>{
        setTimeout(changepage,8000)
    },[]);
  return (
   <>
   <Plane></Plane></>
  )
}

export default PlaneAnimation