import React from 'react';
import Header from '../../components/Header';

function Error404(){
    return (
        <>
            <Header/>
            <div className='mainContainer'>
                <h1>Erro 404: Página não encontrada!</h1>
            </div>            
        </>
    )
}

export default Error404;