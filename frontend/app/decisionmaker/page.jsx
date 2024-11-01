"use client";

import React, { useState } from 'react';
import styles from '../styles/DecisionMaker.module.css';

const options = {
  food: [
    { text: 'Pizza with pineapple', image: 'https://example.com/pizza.png' },
    { text: 'Chocolate-covered broccoli', image: 'https://example.com/broccoli.png' },
    { text: 'Spaghetti tacos', image: 'https://example.com/spaghetti.png' },
    { text: 'Invisible sandwich', image: 'https://example.com/invisible_sandwich.png' },
    { text: 'Lasagna with jelly', image: 'https://example.com/lasagna.png' },
  ],
  clothes: [
    { text: 'Socks with sandals', image: 'https://example.com/socks.png' },
    { text: 'A clown costume', image: 'https://example.com/clown_costume.png' },
    { text: 'Your pajamas', image: 'https://example.com/pajamas.png' },
    { text: 'Superhero cape', image: 'https://example.com/cape.png' },
    { text: 'A banana suit', image: 'https://example.com/banana_suit.png' },
  ],
  activities: [
    { text: 'Dance like no one is watching', image: 'https://example.com/dance.png' },
    { text: 'Talk to your pet about politics', image: 'https://example.com/talk_pet.png' },
    { text: 'Binge-watch a soap opera', image: 'https://example.com/soap_opera.png' },
    { text: 'Write a letter to a potato', image: 'https://example.com/potato_letter.png' },
    { text: 'Create a new dance move', image: 'https://example.com/new_dance.png' },
  ],
};

const DecisionMaker = () => {
  const [selectedOption, setSelectedOption] = useState('');

  const makeDecision = (category) => {
    const randomIndex = Math.floor(Math.random() * options[category].length);
    setSelectedOption(options[category][randomIndex]);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Random Decision Maker</h1>
      <div>
        <h2>Choose a category:</h2>
        <button className={styles.button} onClick={() => makeDecision('food')}>
          What to eat?
        </button>
        <button className={styles.button} onClick={() => makeDecision('clothes')}>
          What to wear?
        </button>
        <button className={styles.button} onClick={() => makeDecision('activities')}>
          What to do?
        </button>
      </div>
      {selectedOption && (
        <div className={styles.decision}>
          <h2>Your Random Decision:</h2>
          <p>{selectedOption.text}</p>
          <img src={selectedOption.image} alt={selectedOption.text} style={{ width: '300px', height: 'auto' }} />
        </div>
      )}
    </div>
  );
};

export default DecisionMaker;
