import React from 'react';
import './style.css';

import Header from '../../components/Header';
import Correios from '../../components/Correios';
import Pokedex from '../../components/Pokedex';

function Api(){
    return(
        <>
            <Header/>
            <div className='mainContainer'>
                <h1>API</h1>
                <p>Uso esta página para testar algumas APIs interessantes.</p>
                <Correios/>
                <Pokedex/>
            </div>
        </>
    )
}

export default Api;