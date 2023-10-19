import {React} from 'react'
import './BirthdayWish.css'
import "./Wishes.css"
import { NavLink } from 'react-router-dom';
import song from './song1.mp3';
import { Howl } from 'howler';
import night from './night.mp3'

import { useState,useEffect,useRef, useMemo} from 'react';
const PostCredit = () => 
{
  var sound
  
useMemo(()=>{ sound=new Howl({
  src:[night],
  loop:true,
  // autoplay:true
})
sound.play();
},[])
  const parentDivRef = useRef(null);
  // Under the stars of destiny and the grand curtains of time, we gather to celebrate a day veiled in secrets and wonders. Happy Birthday, my dear friend! Like a captivating Bollywood thriller, your life unfolds with twists and turns, leaving us in awe of your enigmatic charm. As the pages of your story continue to be written, may each chapter be filled with joy, laughter, and the thrill of new adventures. Let's unveil the mysteries of the future together and dance to the rhythm of happiness, for you are the star of our show! Lights, camera, and a fantastic year ahead!" 
  const divs = ["And Wrapping this up and","presenting dil vicho tere liye ","tym kadke karda mai promise","milan aaunga" ];
  const [currentDiv, setCurrentDiv] = useState(0);
 const [visi,setvisi]=useState("butto");
//  sound.play();

setTimeout(()=>{
    setvisi("butt");
    

  },15000);
  useEffect(() => {
    
    if (currentDiv < divs.length) {
      const animationTimeout = setTimeout(() => {
        setCurrentDiv(currentDiv + 1);
        const parentDiv = parentDivRef.current;
        const d=document.getElementsByClassName("typewriter");
        console.log(d);
        console.log(parentDiv)
        parentDiv.scrollTo(20,0)
        

      }, 5000); // Delay before starting the next div
    
      return () => clearTimeout(animationTimeout);
    }
  }, [currentDiv]);

  return (<>
 
 <NavLink to="/Post2" className={visi} onClick={()=>{sound.stop();}}><p className='boardsign'>&#9992;</p></NavLink>

    <div className="typewriter" ref={parentDivRef} id="style-3">

      {divs.map((text, index) => (
        <div key={index} className={`typewriter-div ${index <= currentDiv ? 'active' : ''}`}>
          {text}
        </div>
      ))}
    </div>
    </>
  );
      }

export default PostCredit