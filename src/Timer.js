import { useState,useEffect}  from 'react';

export default function Timer(props) {
  const [counter, setCounter] = useState(0);
  const isActive=props.isActive;

  
  useEffect(() => {
    let interval = null;
    if(isActive){
     interval = setInterval(() => {
      setCounter(counter => counter + 1);
    }, 1000);
  
    console.log("isActive");
  }
    else if (!isActive) {
      
    props.setSeconds(counter);
    }

    return () => {
      clearInterval(interval);
    };
  },[counter]);

  return counter;
};

