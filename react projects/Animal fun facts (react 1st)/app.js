import { animals } from './animals';
import React from 'react';
import { createRoot } from 'react-dom/client';

const container = document.getElementById("app");
const root = createRoot(container);
const title = '';
const background = <img className='background' alt='ocean' src='/images/ocean.jpg'/>;
const images = [];
const showBackground = true;
for(const animal in animals) {
  images.push(
  <img key={animal} className='animal' alt={animal} src={animals[animal].image} aria-label= {animal} role='button' onClick={displayFact}/>)
}

const animalFacts = (
  <div>
   {/*<h1>{title=='' ? 'Click an animal for a fun fact' : title}</h1>;*/}
   <h1>{title || 'Click an animal for a fun fact'}</h1>
   {showBackground && background}
   <p id='fact'></p>
   <div className='animals'>
      {images}
   </div>
  </div>
);

const funFact = (e) => {
  const animalChoosen = e.target.alt;
  const optionIndex = Math.floor(Math.random() * animals[animalChoosen].facts.length);
  const fact = animals[animalChoosen].facts[optionIndex];
  return fact;
}

function displayFact(e) {
  const ele = document.getElementById('fact');
  ele.innerHTML=funFact(e);
}

root.render(animalFacts);