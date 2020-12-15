import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './style.css';
import { toggleTopics, resetToggle } from './script';

import saladLogo from '../../assets/logo.png';
import { FiMenu } from 'react-icons/fi';
import Summary from '../../components/Summary';

function Header(){
    useEffect(() => {
        resetToggle();
    },[]);

    return(
        <>
            <header className='theHeader'>
                <FiMenu className='menuIcon' size='35' 
                    color='rgb(255,255,255)' alt='Menu'
                    onClick={e => toggleTopics()}
                />
                <span className='headerIcon'>
                    <Link to='/'><img src={saladLogo} alt='logo'/></Link>
                </span>
                <nav>
                    <Link to='/'><div>Principal</div></Link>
                    <Link to='/another'><div>Outra</div></Link>                              
                </nav>            
            </header>
            <section className='fixedTopics'>
                <Summary color='white'/>
            </section>
        </>
    )
}

export default Header;