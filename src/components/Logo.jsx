import React from 'react'
import '../styles/logo.css'
import logo from '../assets/logo.png';

const Logo = () => {
    return (
        <div className="contenedor-logo">
            <div className="logo-content ">
                
                <img src={logo} alt='firm logo' />
            </div>
        </div>
    )
}


export default Logo