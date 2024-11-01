"use client";
// components/FakeNewsGenerator.js
import { useState } from 'react';
import styles from '../styles/FakeNewsGenerator.module.css';


const FakeNewsGenerator = () => {
  const [headline, setHeadline] = useState('');

  // Pre-defined fake news headlines
  const fakeNews = [
    'Aliens Land in Central Park, Demand Pizza!',
    'Cat Graduates College, Claims Degree in Human Studies!',
    'Local Man Discovers Time Machine Made from a Toaster!',
    'Squirrels Plan Takeover of the City Council!',
    'Dog Elected as Mayor, Promises More Parks and Treats!',
    'World’s First Invisible Car Hits the Streets!',
    'Scientists Announce Discovery of Fountain of Youth in Backyard!',
    'Penguins Organize International Ice-Skating Championship!',
    'Giant Spaghetti Monster Sighted over the Grand Canyon!',
    'Robots Declare Independence, Start New Nation of Automatia!',
  ];

  const generateFakeNews = () => {
    const randomIndex = Math.floor(Math.random() * fakeNews.length);
    const randomHeadline = fakeNews[randomIndex];
    setHeadline(randomHeadline);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}> News Paper</h1>
      <button onClick={generateFakeNews} className={styles.button}>
        See Today's News
      </button>
      {headline && <h2 className={styles.headline}>{headline}</h2>}
      <div className={styles.newsContainer}>
        <h2>More Ridiculous News:</h2>
        <ul className={styles.newsList}>
          {fakeNews.map((news, index) => (
            <li key={index} className={styles.newsItem}>
              {news}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FakeNewsGenerator;
