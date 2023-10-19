import React from 'react'
import Plane from './Plane'
import { useState,useEffect,useRef,useMemo } from 'react'
import './Question1.css'
import { NavLink } from 'react-router-dom'
import { Howl } from 'howler'
import ticking from './ticking.mp3'
import actual from'./actualfirstimag.jpg';
import fake from './fakefirstimage.jpg'
import fake2 from'./fake2.jpg';
import photo from './hog.jpg'
const Question5 = () => {

  
   
    const [change,setchange]=useState("");
    const [reveal,setreveal]=useState("");
    const [time, setTime] = useState(33 );
    const[stat,setstat]=useState("");
    
       var sound=new Howl({
        src:[ticking],
        loop:false,
        autoplay:true
      })
    
    
   const changeclass=(status)=>{
    if(status=="correct"){
       setstat("correct");
    }
    else{
      setstat("wrong");
    }

   sound.stop();
   setreveal('true')
   setRunning(false);
   

   }
    useEffect(()=>{
        setTimeout(()=>{
           setchange("yes")
          //  sound.play();
        },8000)
    },[])
   

   
  const [running, setRunning] = useState(true);

  useEffect(() => {
    let timer;
    if (running) {
      timer = setInterval(() => {
        if (time > 0) {
          setTime(time - 1);
        }
        if(time==0){
          changeclass("time");
        }
      }, 1000);
    }

    return () => {
      clearInterval(timer);
    };
  }, [time, running]);


  
    const timerContainerStyle = {
    width: '100px',
    height: '100px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position:'absolute',
    top:'5%',
    left:'90%',


  };

  const timerStyle = {
    width: '100px',
    height: '100px',
    borderRadius: '50%',
    background: `conic-gradient(#007ced ${100 - (time / 30) * 100}%, #fff ${100 - (time / 30) * 100}%)`,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '24px',
  };
  
    
  return (
    
     <div>
     <div class="page">
     
        
    <div className=''>
    <div>
    
    <div className={`${stat=="correct"?"show":"hide"}`}><iframe src="https://lottie.host/?file=e2033aa7-0622-4b74-9936-6fa5a878131e/dUPThnBDU7.json"></iframe></div>
    <div className={`${stat=="wrong"?"show":"hide"}`}><iframe src="https://lottie.host/?file=95e08e8c-8c5c-4e1a-8e52-66b1f9bc5c51/k75DUPenEI.json"></iframe></div>
      <NavLink className="navlink" to="/Question6"><span className={reveal=='true'?'nextques':'hide'}>&#9992;</span></NavLink>
    <div style={timerContainerStyle}>
        <div style={timerStyle}>{time}</div>
      </div>
    </div>


      <div className='colorcodes'>
      <div className='divi'><div className="colorcode correct"></div> <div className='tages'>Correct</div></div>
      <div className='divi'><div className="colorcode wrong"></div><div className='tages'> Wrong</div></div>
      </div>
    <div className="question" >
     THIS WILL NOT ONLY GET TOUGHER NOW WHAT WAS THE ROW NO OF SEATS DURING POPE THE EXORCIST ?(HINT: I HAVE SENT YOU THE TICKETS ONCE)
    </div>

    <div className='set1'>
    <div className={`ques ${reveal=='true'?'cor':''}`} onClick={()=>{changeclass("correct")}} style={{fontSize:"40px"}}>G</div>
    <div className={`ques ${reveal=='true'?'wor':''}`} onClick={()=>{changeclass("wrong")}}>H</div>
    </div>
    <div className='set2'>
    <div className={`ques ${reveal=='true'?'wor':''}`} onClick={()=>{changeclass("wrong")}}>I</div>
    <div className={`ques ${reveal=='true'?'wor':''}`} onClick={()=>{changeclass("wrong")}}>F</div>
    </div>
    
    
</div>
  </div>
  <div id="splash">
    <div class="anim">
      <div id="loader">
        <svg version="1.1" width="60px" height="70px" viewBox="0 0 60 70">
          <defs>
            <filter id="f1" x="0" y="0">
              <feGaussianBlur in="SourceGraphic" stdDeviation="2" />
            </filter>
          </defs>
          <g id="airplane">
            <path fill="#000" d="M0.677,20.977l4.355,1.631c0.281,0.104,0.579,0.162,0.88,0.16l9.76-0.004L30.46,41.58c0.27,0.34,0.679,0.545,1.112,0.541
            h1.87c0.992,0,1.676-0.992,1.322-1.918l-6.643-17.439l6.914,0.002l6.038,6.037c0.265,0.266,0.624,0.412,0.999,0.418l1.013-0.004
            c1.004-0.002,1.684-1.012,1.312-1.938l-2.911-7.277l2.912-7.278c0.372-0.928-0.313-1.941-1.313-1.938h1.017
            c-0.375,0-0.732,0.15-0.996,0.414l-6.039,6.039h-6.915l6.646-17.443c0.354-0.926-0.33-1.916-1.321-1.914l-1.87-0.004
            c-0.439,0.004-0.843,0.203-1.112,0.543L15.677,17.24l-9.765-0.002c-0.3,0.002-0.597,0.055-0.879,0.16L0.678,19.03
            C-0.225,19.36-0.228,20.637,0.677,20.977z" transform="translate(44,0) rotate(90 0 0)" />
          </g>
          <g id="shadow" transform="scale(.9)">
            <path fill="#000" fill-opacity="0.3" d="M0.677,20.977l4.355,1.631c0.281,0.104,0.579,0.162,0.88,0.16l9.76-0.004L30.46,41.58c0.27,0.34,0.679,0.545,1.112,0.541
                h1.87c0.992,0,1.676-0.992,1.322-1.918l-6.643-17.439l6.914,0.002l6.038,6.037c0.265,0.266,0.624,0.412,0.999,0.418l1.013-0.004
                c1.004-0.002,1.684-1.012,1.312-1.938l-2.911-7.277l2.912-7.278c0.372-0.928-0.313-1.941-1.313-1.938h1.017
                c-0.375,0-0.732,0.15-0.996,0.414l-6.039,6.039h-6.915l6.646-17.443c0.354-0.926-0.33-1.916-1.321-1.914l-1.87-0.004
                c-0.439,0.004-0.843,0.203-1.112,0.543L15.677,17.24l-9.765-0.002c-0.3,0.002-0.597,0.055-0.879,0.16L0.678,19.03
                C-0.225,19.36-0.228,20.637,0.677,20.977z" transform="translate(64,30) rotate(90 0 0)" filter="url(#f1)" />
          </g>
        </svg>
      </div>
    </div>
  </div>
</div>
  )
}

export default Question5