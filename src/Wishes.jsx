import {React} from 'react'
import './BirthdayWish.css'
import "./Wishes.css"
import { NavLink } from 'react-router-dom';
import song from './song1.mp3';
import { Howl } from 'howler';

import { useState,useEffect,useRef, useMemo} from 'react';
const Wishes = () => 
{
  var sound
useMemo(()=>{ sound=new Howl({
  src:[song],
  loop:true,
  // autoplay:true
})
sound.play();
},[])
  const parentDivRef = useRef(null);
  // Under the stars of destiny and the grand curtains of time, we gather to celebrate a day veiled in secrets and wonders. Happy Birthday, my dear friend! Like a captivating Bollywood thriller, your life unfolds with twists and turns, leaving us in awe of your enigmatic charm. As the pages of your story continue to be written, may each chapter be filled with joy, laughter, and the thrill of new adventures. Let's unveil the mysteries of the future together and dance to the rhythm of happiness, for you are the star of our show! Lights, camera, and a fantastic year ahead!" 
  const divs = ["Under the stars of destiny and ", "the grand curtains of time,", "we gather to celebrate a day ","veiled in secrets and wonders.","Happy Birthday to my fav ","favourite person everrrrrrr.","As the pages of your story","continue to be written, may ","may each chapter be filled ","with joy,laughter and thrill"," of new adventure On this","special  day lets unveil the ","flashes of your most cherished","memories", "Are you ready ??","IAS MEGHNA SINGH"];
  const [currentDiv, setCurrentDiv] = useState(0);
 const [visi,setvisi]=useState("butto");
//  sound.play();

  setTimeout(()=>{
    setvisi("butt");
    

  },70000);
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
    <NavLink to="/Instructions" className={visi} onClick={()=>{sound.stop();}}><p className='boardsign'>&#9992;</p></NavLink>
    <div id="leaves">
  <i></i>
  <i></i>
  <i></i>
  <i></i>
  <i></i>
  <i></i>
  <i></i>
  <i></i>
  <i></i>
  <i></i>
  <i></i>
  <i></i>
  <i></i>
  <i></i>
  <i></i> 
</div>

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

export default Wishes