// Page.tsx
import React from 'react';
import "./styles.css";
import {FlipWords} from "./flip-words"

const StartScreen: React.FC = () => {
    const words = ["Neera", "नीरा", "نیلا", "ਨੀਲਾ"];
  return (
    <>
      <div className="box">
      <FlipWords className='flipWords' words={words} /> <br />
      </div>
    </>
  );
};

export default StartScreen;
