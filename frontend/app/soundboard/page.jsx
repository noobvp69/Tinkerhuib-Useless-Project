"use client";

import { useState, useEffect } from 'react';
import styled from 'styled-components';

const sounds = [
'https://voca.ro/1bPI4wPGNsvz'];

export default function Home() {
  const [soundDisplay, setSoundDisplay] = useState('Press any key to trigger a dramatic sound!');
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const playRandomSound = () => {
    if (isClient) { // Ensure this runs only on the client
      const randomIndex = Math.floor(Math.random() * sounds.length);
      const selectedSound = new Audio(sounds[randomIndex]);

      setSoundDisplay(`Sound Effect: ${sounds[randomIndex].split('/').pop()}`);
      selectedSound.currentTime = 0;
      selectedSound.play();
    }
  };

  useEffect(() => {
    if (isClient) {
      const handleKeyDown = () => {
        playRandomSound();
      };
      document.addEventListener('keydown', handleKeyDown);

      return () => document.removeEventListener('keydown', handleKeyDown);
    }
  }, [isClient]);

  if (!isClient) {
    return null; // Avoid rendering until client-side rendering is confirmed
  }

  return (
    <Container>
      <Title>Overly Dramatic Typing Soundboard</Title>
      <TypingArea placeholder="Start typing..." />
      <SoundDisplay>{soundDisplay}</SoundDisplay>
    </Container>
  );
}

// Styled Components
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  justify-content: center;
  font-family: Arial, sans-serif;
  background-color: #f0f8ff;
`;

const Title = styled.h1`
  color: #333;
`;

const TypingArea = styled.textarea`
  width: 80%;
  height: 150px;
  margin: 20px 0;
  padding: 10px;
  font-size: 18px;
  resize: none;
  border: 2px solid #ccc;
  border-radius: 10px;
  transition: all 0.3s ease;

  &:focus {
    border-color: #333;
    outline: none;
  }
`;

const SoundDisplay = styled.div`
  font-size: 24px;
  color: #ff4d4d;
  margin-top: 20px;
  text-align: center;
`;
