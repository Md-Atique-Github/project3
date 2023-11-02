import React from 'react'
import './NumberSelector.css'

const NumberSelector = ({ selectedNum, setSelectedNum, error, setError }) => {

    const arrNumber = [1, 2, 3, 4, 5, 6];

    const numberSelectorHandler = (value) => {
        setSelectedNum(value);
        setError("");
    }

    console.log(selectedNum);

    return (
        <main className='help'>
            <p className='error'>{error}</p>
            <div className='selector'>
                <div className='flex'>
                    {arrNumber.map((value, i) => (
                        <p
                            className={value === selectedNum ? 'selected' : 'nonSelected'}
                            key={i}
                            title={value}
                            onClick={() => numberSelectorHandler(value)}
                        >   {value}
                        </p>
                    ))}
                </div>
            </div>
            <div>
                <p className='select-number'>Select a Number</p>
            </div>
        </main>
    )
}

export default NumberSelector