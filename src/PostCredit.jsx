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
  const divs = ["You Already here so how do ", "you liked it  hopefully you ", "also found it mesmerizing and ","hopefully this was able put","a big smile on that beautiful  ","face and if any case you did'nt  ","like it give me some  ","compensation as most of it i ","made with one hand.","Vaise to dekh mai vaha nhi","aa skta but i just hope  ke","ye birthday tere zindagi ka","sabsa acha birthday ho vaise ","to nhi hoga mai ni hu na", "isliye agli baari mereko bhi","bulalio Or By any chance "," tereko aesa to nhi laga na ki","ham baat nhi kar rahe to","is baar mai kuch nhi kar rha","if you thought then buddy","you dont know me yet","AnyWays Happy Birthday Dudee","This is Nakul Grover ","Signing Off"];
  const [currentDiv, setCurrentDiv] = useState(0);
 const [visi,setvisi]=useState("butto");
//  sound.play();

  setTimeout(()=>{
    setvisi("butt");
    

  },90000);
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
    <NavLink to="/Post" className={visi} onClick={()=>{sound.stop();}}><p className='boardsign'>&#9992;</p></NavLink>
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

export default PostCredit