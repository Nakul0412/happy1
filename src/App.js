import React from 'react';
import {Routes,Route} from 'react-router-dom'
import PlaneAnimation from './PlaneAnimation';
import HappyBirthday from './HappyBirthday';
import Wishes from "./Wishes.jsx"
import Instructions from './Instructions';
import Question1 from './Question1';
import Question2 from './Question2';
import Question3 from './Question3';
import Question4 from './Question4';
import Question5 from './Question5';
import Question6 from './Question6';
import Question7 from './Question7';
import Question8 from './Question8';
import Question9 from './Question9';
import Question10 from './Question10';
import PostCredit from './PostCredit';
import Post from './Post';
import Post2 from './Post2';
function App() {
  return (
    <div>
      <Routes>
    <Route exact path="/" element={<PlaneAnimation/>}/>
    <Route exact path="/happybirthaydudeee" element={<HappyBirthday/>}></Route>
    <Route exact path="/Wishes" element={<Wishes/>}></Route>
    <Route exact path="/Instructions" element={<Instructions/>}></Route>
    <Route exact path="/Question1" element={<Question1/>}></Route>
    <Route exact path="/Question2" element={<Question2/>}></Route>
    <Route exact path="/Question3" element={<Question3/>}></Route>
    <Route exact path="/Question4" element={<Question4/>}></Route>
    <Route exact path="/Question5" element={<Question5/>}></Route>
    <Route exact path="/Question6" element={<Question6/>}></Route>
    <Route exact path="/Question7" element={<Question7/>}></Route>
    <Route exact path="/Question8" element={<Question8/>}></Route>
    <Route exact path="/Question9" element={<Question9/>}></Route>
    <Route exact path="/Question10" element={<Question10/>}></Route>
    <Route exact path="/PostCredit" element={<PostCredit/>}></Route>
    <Route exact path="/Post" element={<Post/>}></Route>
    <Route exact path="/Post2" element={<Post2/>}></Route>
    </Routes>
    </div>
    
    );
}

export default App;
