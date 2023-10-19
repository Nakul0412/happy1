
// src/components/Instructions.js


import React, { useEffect,useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './Instructions.css';
import PenAnimation from './PenAnimation';
const Instructions = () => {
	const navigate=useNavigate();
	const [isAirplaneAnimated, setIsAirplaneAnimated] = useState(false);
   const [show,setshow]=useState("false");
  // Function to start the airplane animation
  const startAirplaneAnimation = () => {
	
    setIsAirplaneAnimated(true);
    
    // Remove the animation class after a delay to reset the animation
    setTimeout(() => {
		navigate("/Question1")
      setIsAirplaneAnimated(false);

    }, 4000); // Adjust the duration to match your animation duration
  };
	useEffect(()=>{
		setTimeout(()=>{
			setshow("true");
		},20000)
		const spans = document.querySelectorAll('.word span');

		spans.forEach((span, idx) => {
			span.addEventListener('click', (e) => {
				
				e.target.classList.add('active');
			});
			span.addEventListener('animationend', (e) => {
				e.target.classList.remove('active');
			});
	
			// Initial animation
			setTimeout(() => {
				span.classList.add('active');
			}, 750 * (idx + 1))
		});
	},[])
  
  return (
    <>
    {show=="false"?<PenAnimation/>:
	<> 
	<div class="word" >
	<span>R</span>
	<span>U</span>
	<span>L</span>
	<span>E</span>
	<span>S</span>
  </div>
  <div className='content'>
	  <ul>
		  <li>HEY,DUDEEE THIS IS ME I JUST WANT YOU TO YOUR NOT IN ANY DREAMLAND YOUR ARE JUST IN A SMALL  CREATION OF MINE 
			  SO DONT EXCEPT ANYTHING EXPECTONAL THIS IS JUST A SIMPLE GAME FOR YOU TO SO THAT I CAN TEST YOUR MEMORY WHETHER
			  YOUR REMEMBER EVERYTHING TO DEKHTE HAI AAJ TUNE KITNE BADAM KHAYE HAI.
		  </li>
		  <li>
			  FIRST THINGS FIRST THIS MIGHT GET A LITTLE EMOTIONAL SO DONT START CRYING.
		  </li>
		  <li>THIS IS JUST A QUIZ OF FEW QUESTION WHICH WILL INCLUDE THE MEMORIES OF YOUR PAST BTW I ONLY INCLUDED GOOD MEMORIES
			  JUST LIKE MYSELF😉.
		  </li>
		  <li>AND JUST  I WANT YOU KNOW I AM NOT LOWERING MY STANDARDS 😉</li>
		  <li>READY WHEN YOU ARE 🫡-->    <p className={`letgo boa ${isAirplaneAnimated ? 'animate-airplane' : ''}`}onClick={startAirplaneAnimation}>&#9992;</p>
		  </li>
	  </ul>
  </div>
  </>
  }
	

   
    </>
  )
};

export default Instructions;
