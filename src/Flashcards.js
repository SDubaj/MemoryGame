import React, { useState,useEffect}  from 'react';
import Card from './Card';
import Timer from './Timer';

function Flashcards(props) {
        const initialArray = [{value:"1", word:"pen"}, {value:"2", word:"cup"}, {value:"3", word:"desk"},
        {value:"4", word:"printer"},{value:"5", word:"pencil"}];
        const plWords = [{value:"1",word:"pen", image:"https://cdn.shoplo.com/6456/products/th640/akae/35762-c8153ff71acade138e4ae5d242b35f775d9516362b1265-36847198.jpg"},
         {value:"2", word:"kubek",image:"https://www.ikea.com/pl/pl/images/products/dinera-mug-grey-blue__0642544_PE701242_S5.JPG?f=s"}, 
         {value:"3", word:"biurko",image:"https://d.allegroimg.com/s512/039e45/96c2991941c29da10c1246fd7a1d/BIURKO-NAROZNE-KOMPUTEROWE-B20-LEWE-155cm-BIALE"},
        {value:"4", word:"drukarka",image:"https://www.mall.cz/i/42584913/450/450"},
        {value:"5",word:"ołówek", image:"https://strefaucznia.pl/38598-thickbox_default/gruby-olowek-trojkatny-zenith-simple.jpg"}];
        Array.prototype.push.apply(initialArray,plWords)

        const doublingArray = initialArray.flatMap(i => [i]).map((o , i) => ({
          id: i+1,
          value:o.value,
          word:o.word,
          image:o.image
        }));

          for (var i = doublingArray.length - 1; i > 0; i--) {
              var j = Math.floor(Math.random() * (i + 1));
              var temp = doublingArray[i];
              doublingArray[i] = doublingArray[j];
              doublingArray[j] = temp;
          }
        const [cards, setCards ] = useState(doublingArray);
        const [isFlipped, setIsFlipped] = useState(doublingArray);
        const [firstCard,setFirstCard] = useState(null);
        const [secondCard,setSecondCard] = useState(null);
        const [showButton,setShowButton]  = useState(true);
        const [isActive, setIsActive] = useState(true);
        const [seconds, setSeconds] = useState(0);
      const  setCardIsFlipped = (card) => {
           setIsFlipped([...isFlipped,card]);
        }

        useEffect(() => {
          setTimeout(() => {
            setIsFlipped([],null);
         }, 4000);
          console.log("cards");
        },[cards]);

       


     function handleFlip (card) {
      
      if (((firstCard && (card.id === firstCard.id)) || (secondCard && (card.id === secondCard.id))))
         return;
      if((firstCard) && (secondCard))
        return;

       setCardIsFlipped(card);
       
      (firstCard) ? setSecondCard(card) : setFirstCard(card);
      if(initialArray.length=== isFlipped.length+1){
      //props.function(false);
        setIsActive(false);
        setTimeout(() => {
          setShowButton(false);
       }, 1000);
        console.log(isActive);}
      }
      
     

      useEffect(() => {
        
        console.log("ifFirst Card itp");
        if (!firstCard || !secondCard)
          return;
        (firstCard.value === secondCard.value) ? onSuccessGuess() : onFailureGuess();
      });
    
      function onSuccessGuess(){
          console.log("Sukces!");
          resetCards();
      }

      function onFailureGuess(){
         setTimeout(() => {
          resetCards();
       }, 1000);
        isFlipped.pop();
        isFlipped.pop();
      }
      function resetCards(){
          setFirstCard(null);
          setSecondCard(null);
      }
      function show(){
        return <div>
         <h1>Gratulacje! </h1>
         Twój czas to : {seconds}s <br/>
         Klinij, aby wrócic do strony głównej<br/>
        <button className="button" onClick={e => props.function(false)}> Strona Główna </button>
        </div>
      }
      
        return(
          <div>
          { showButton ? 
          <div> Twój czas: <Timer setSeconds={setSeconds} isActive={isActive}/> s
            <div className="cards-container">
            {cards.map(card => <Card onClick={() => handleFlip(card)} 
            value={card.word} image={card.image} isFlipped={isFlipped.includes(card)} key={card.id} />) } 
    <br/> 

      
         </div></div> : show()}
         
         </div>

        )

      }


export default Flashcards;