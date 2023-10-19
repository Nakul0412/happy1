import React, { useEffect, useState,useRef } from 'react'
import './Post2.css'
import dance from './dance.mp4'
const Post2 = () => {
    const [check,setcheck]=useState("true")
    const videoRef = useRef(null);
    useEffect(()=>{
      
        setTimeout(()=>{
                setcheck("false")
                if (videoRef.current) {
                  // Request fullscreen mode
                  if (videoRef.current.requestFullscreen) {
                    videoRef.current.requestFullscreen().catch(err => {
                      console.log('Request for fullscreen failed:', err);
                    });
                  } else if (videoRef.current.mozRequestFullScreen) {
                    videoRef.current.mozRequestFullScreen();
                  } else if (videoRef.current.webkitRequestFullscreen) {
                    videoRef.current.webkitRequestFullscreen();
                  }
            
                  // Play the video
                  videoRef.current.play().catch(err => {
                    console.log('Autoplay failed:', err);
                  });
                }
        },10000)
    })
  return (
       <>
       {check=="true"?
       <div class="cont">
       <div class="spinner"></div>
       <span class="number"></span>
     </div >:<div style={{width:"100vw",height:"100vh"}}>
     <video width="100%" height="100%" controls  autoPlay  ref={videoRef}>
  <source src={dance} type="video/mp4"/>
  {/* <source src="movie.ogg" type="video/ogg"> */}
  {/* Your browser does not support the video tag. */}
</video></div>}
       </>
      )
}

export default Post2