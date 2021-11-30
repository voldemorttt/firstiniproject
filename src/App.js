import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import Textform from './components/Textform';
import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {

  const [mode, setmode] = useState('light');

  const togglemode = () => {
    if(mode === 'light'){
      setmode('dark')
      document.body.style.backgroundColor='#040c25';
    }

    else {
      setmode('light')
      document.body.style.backgroundColor='white';

    }
  }

  return (
        <>
          <Router>
          <Navbar title="TextUtils" mode={mode} toggleMode={togglemode} />

          <div className="container" my-3="true">

          <Routes>

          {/* <Textform heading="Enter the text to analyze" mode={mode}/>

                <About /> */}
              
              <Route exact path='/About' element={<About mode={mode}/>}/>


              <Route exact path='/' element={<Textform heading="Enter the text to analyze" mode={mode}/>}/>

        </Routes>  
        </div>
        </Router>
        </>
  );
}

export default App;
