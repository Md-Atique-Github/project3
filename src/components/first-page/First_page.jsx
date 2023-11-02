import React from 'react'
import './First_page.css'
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';



const First_page = () => {
    return (
        <>

            <Container className='first_container'>
                <div className='center_container'>
                    <h1 className='dice_game'>DICE GAME</h1>
                    <Link to="/2nd">
                        <button style={{
                            background: '', color: 'white', borderRadius: '5px', padding: '10px 18px', minWidth: '220px', border: 'none', fontSize: '16px',
                        }} className='btn_1'>
                            Play Now
                        </button>
                    </Link>
                </div>
                <div>
                    <img src='/images/dices 1.png' alt='dices' />
                </div>
            </Container >
        </>
    )
}

export default First_page