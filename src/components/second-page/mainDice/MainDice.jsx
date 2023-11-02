import React, { useState } from 'react';
import './MainDice.css';

const MainDice = ({ currentDice, roleDice }) => {

  return (
    <>
      <div className='mainDice'>
        <div className='dice' onClick={roleDice}>
          <img src={`images/dice_${currentDice}.png`} alt='dice 1' />
        </div>
        <p>Click on Dice to roll</p>
      </div>
    </>
  )
}

export default MainDice