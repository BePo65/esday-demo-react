import { useState } from 'react';
import esdayLogo from './assets/esday.png';
import './App.css';

function App({now, futureDate}) {
  const defaultFutureDate = '??'
  const [future, setFutureDate] = useState(defaultFutureDate);

  const setDate = () => { setFutureDate(futureDate) }
  const resetDate = () => { setFutureDate(defaultFutureDate) }

  return (
    <>
      <header>
        <img class="header-symbol" src={esdayLogo} alt="ESday project icon" />
        <h1 class="header-title">Demo for using the ESday-Library in a basic React app</h1>
      </header>
      <main>
        <p>The <a href="https://github.com/g-mero/esday">ESday library</a> is a direct replacement of <a href="https://momentjs.com/" target="_blank">Moment.js</a> and <a href="https://day.js.org/" target="_blank">dayjs</a> written in typescript as ESModule.</p>
        <p>This demo shows how to use the ESday library in a simple html web page.</p>
        <p>
          <button onClick={setDate} class="button-set">Set future date</button>
          <button onClick={resetDate} class="button-reset">Reset future date</button>
        </p>
        <p>
          <span class="date-now-label">Now it is</span>
          <span id="date-now">{ now }</span>
        </p>
        <p>
          <span class="date-then-label">in 5 days it will be</span>
          <span id="date-then">{ future }</span>
        </p>
      </main>
      <p class="footer">ESday-version 0.5.0</p>
    </>
  )
}

export default App
