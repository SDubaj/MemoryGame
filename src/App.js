import React, { useState } from 'react';
import Flashcards from './Flashcards';
import './App.css';

function App() {
  const [isShown,setIsShown] = useState(false);
  return (
    <div className="container">
      <img src="title4.png" alt="Title" className="titleImg" />
      { !isShown ?
      <button className="button" onClick={e => setIsShown(true)}> START ! </button> :
      <Flashcards function={setIsShown}/>}
    </div>
  );
}

export default App;
