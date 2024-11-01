"use client";

// pages/index.js
import { useState } from 'react';
import Head from 'next/head';
import styles from '../styles/Quote.module.css';

export default function Home() {
  const [quote, setQuote] = useState({ original: '', twisted: '' });

  // Sample quotes with twisted versions (keep these original and non-copyrighted)
  const quotes = [
    {
      original: "Be yourself; everyone else is already taken.",
      twisted: "Be a unicorn; all the horses are already boring."
    },
    {
      original: "Two roads diverged in a wood",
      twisted: "Two pizzas diverged in my fridge"
    },
    {
      original: "Knowledge is power",
      twisted: "Napping is power"
    }
  ];

  const getRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[randomIndex]);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Quirky Quote Twister</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>🎭 Quirky Quote Twister 🎭</h1>
        
        <div className={styles.quoteContainer}>
          <div className={styles.quoteBox}>
            <h3>Original Quote:</h3>
            <p>{quote.original || "Click the button to get started!"}</p>
          </div>
          
          <div className={styles.arrow}>➡️</div>
          
          <div className={styles.quoteBox}>
            <h3>Twisted Version:</h3>
            <p>{quote.twisted || "Waiting to twist your quote..."}</p>
          </div>
        </div>

        <button 
          className={styles.button}
          onClick={getRandomQuote}
        >
          Generate Random Quote! 🎲
        </button>
      </main>
    </div>
  );
}