import './App.css';
import { useEffect } from 'react';
import React, {useState} from 'react';
import axios from "axios";




function App() {

  const [appState, setAppState] = useState();
  const [error, setError] = useState();

    useEffect(() => {
    const apiUrl = 'http://worldtimeapi.org/api/timezone/Europe/Moscow';
    axios.get(apiUrl)
    .then((resp) => {
      const times = resp.data;
      setAppState(times);
    })
    .catch(er=>{
      setError('Попробуйте снова')
    })
  }, [setAppState, appState]);

  const deg = 6;
  
  const hr = document.querySelector('#hr');
  const sc = document.querySelector('#sc');
  const min = document.querySelector('#mn');


  // setInterval(() => {
    let day = new Date(`${appState?.datetime}`);
    // let day = new Date();

    console.log('day=====', day);
let hh = day.getHours() * 30;
let mm = day.getMinutes() * deg;
let ss = day.getSeconds() * deg;

hr && (hr.style.transform = `rotateZ(${(hh) + (mm/12)}deg)`)
min && (min.style.transform = `rotateZ(${mm}deg)`)
sc && (sc.style.transform = `rotateZ(${ss}deg)`)

// }, 1000)

  return (
  <>
  {!error ?
  <div className="clock">
        <div className="hour">
            <div className="hr" id="hr"></div>
        </div>
        <div className="min">
            <div className="mn" id="mn"></div>
        </div>
        <div className="sec">
            <div className="sc" id="sc"></div>
        </div>
    </div>
  :
  <div style={{color: 'white'}}>{error}</div>
  }
  </> 
  );
}
export default App;
