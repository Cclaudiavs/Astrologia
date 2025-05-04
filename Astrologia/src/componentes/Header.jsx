
import React from 'react';


function Header({ toggleSidebar }) {
    return (
        <header style={{
            backgroundColor: '#4B2A7B',
            color: 'white',
            padding: '2rem',
            position: 'relative'
        }}>
            <h1 style={{
                fontSize: '3rem',
                fontWeight: 'bold',
                textAlign: 'center'
            }}>
                Bienvenido Astrología y Tarot
            </h1>

            <button onClick={toggleSidebar} style={{
                position: 'absolute',
                top: '1rem',
                right: '1rem',
                backgroundColor: '#4B2A7B',
                color: 'white',
                border: 'none',
                fontSize: '1.2rem',
                cursor: 'pointer'
            }}>
                ☰
            </button>
        </header>
    );
}

export default Header;

