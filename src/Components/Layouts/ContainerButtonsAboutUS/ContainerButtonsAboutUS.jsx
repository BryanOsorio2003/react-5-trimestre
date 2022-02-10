import React,{useState, useEffect} from 'react';
import { ButtonAboutUS } from '../../UI/ButtonAboutUS/ButtonAboutsUS';


export const ContainerButtonsAboutUS = () => {

    const [counter, setCounter] = useState(0);

    const add = () =>{
      setCounter(counter +10)
    }
  
    const reset = () =>{
      setCounter(0)
    }
  
    const substracting = () =>{
      setCounter(counter -10)
    }
  
    useEffect(()=>{
      const prueba = document.getElementById('imgGame')
      if(counter<100){
          prueba.style.filter = 'opacity(100%)'
    }
    else{
          prueba.style.filter = "grayscale(60%)"
      }
    })

  return (<div>
      <p>{counter}</p>
      <ButtonAboutUS OnClick={add} text="+"/>
      <ButtonAboutUS OnClick={reset} text="Reset"/>
      <ButtonAboutUS OnClick={substracting} text="-"/>
  </div>)
};
