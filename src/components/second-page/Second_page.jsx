import React, { useState } from 'react'
import './Second_page.css'
import TotalScore from './totalScore/TotalScore';
import NumberSelector from './numberSelector/NumberSelector';
import MainDice from './mainDice/MainDice';
import './buttons/Buttons.css';
import Rules from '../third-page/Rules';


const Second_page = () => {

    const [score, setScore] = useState(0);
    const [selectedNum, setSelectedNum] = useState();
    const [currentDice, setCurrentDice] = useState(1);
    const [error, setError] = useState();
    const [showRule, setShowRule] = useState(false);


    const generateRandomNumber = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1) + min);
    };

    const roleDice = () => {
        if (!selectedNum) {
            setError("You have not selected any number")
            return
        };

        const randomNumber = generateRandomNumber(1, 6);
        setCurrentDice(() => randomNumber);


        if (selectedNum === randomNumber) {
            setScore((prev) => prev + randomNumber);
        } else {
            setScore((prev) => prev - 2);
        }

        setSelectedNum(undefined);
    };

    const resetScore = () => {
        setScore(0);
    }

    return (
        <>
            <div className=' vip_top'>
                <div className='top_section'>
                    <TotalScore score={score} />
                    <NumberSelector selectedNum={selectedNum} setSelectedNum={setSelectedNum} error={error} setError={setError} />
                </div>
                <MainDice currentDice={currentDice} roleDice={roleDice} />
            </div>

            <div className="button-container">
                <button style={{
                    backgroundColor: 'white', color: 'grey', border: '1px solid black',
                }} className='btn_2' onClick={resetScore}>Reset Score</button>
                <button onClick={() => setShowRule(prev => !prev)} className='btn_2'>{showRule ? "Hide" : "Show"} Rule</button>
            </div>

            <div>
                {showRule && <Rules />}
            </div>
        </>
    )
}

export default Second_page