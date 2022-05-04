import React from 'react';
import { Routes, Route } from "react-router-dom";
import BidderResponsiveAppBar from '../../Components/BidderNav';
import { motion } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import images from "./Images";
import "./Home.css";

const BidderHome = () => {
  const[width, setWidth] = useState(0);
  const banners = useRef();
  useEffect(()=>{
    setWidth(banners.current.scrollWidth - banners.current.offsetWidth,)
  }, []);
  return (
    <div className='home'>
      
     <BidderResponsiveAppBar/>
     
    <h2><center>You are on the home page!</center></h2>    
      <motion.div ref={banners} className='banners' whileTap={{cursor:"grabbing"}}>
        <motion.div drag="x" dragConstraints={{right:0 , left:-width}} className='inner-banner-class'>
        {images.map(image =>{
            return(
              <motion.div className='item' key={image}>
                <img src={image} alt="image"/>
              </motion.div>
             );
          })}
        </motion.div>
      </motion.div>
        
      
      </div>
  );
};

export default BidderHome;