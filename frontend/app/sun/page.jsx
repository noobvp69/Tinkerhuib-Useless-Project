"use client";

import { useState, useEffect } from 'react';
import styles from '../styles/Home.module.css';

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.sunEmoji}>☀️</div>
      <div
        className={styles.ray}
        style={{
          left: mousePosition.x - 200,
          top: mousePosition.y - 200,
        }}
      />
      {/* Funny Symbols */}
      <div className={styles.symbolContainer}>
        {['😀', '😂', '😜', '😎', '🤪'].map((symbol, index) => (
          <div key={index} className={styles.symbol}>
            {symbol}
          </div>
        ))}
      </div>
    </div>
  );
}
