import React, { useState } from 'react';
import Flashcards from './Flashcards';
import './App.css';

function App() {
  const [isShown,setIsShown] = useState(false);
  function handleOnClick () {
      setIsShown= (true);
      console.log("ssss")
  }
  return (
    <div className="container">
      <img src="/title3.png"/><br/>
      { !isShown ?
      <button className="button" onClick={e => setIsShown(true)}> START ! </button> :
      <Flashcards function={setIsShown}/>}
    </div>
  );
}

export default App;
