import React from 'react';
import Header from '../../components/Header';
import Piano from '../../components/Piano';

function Diversificados(){
    return(
        <>
            <Header/>
            <div className='mainContainer'>
                <h1>Diversificados</h1>
                <p>Uso essa página para testar coisas mais variadas, que não se encaixam em outros tópicos.</p>
                <Piano/>
            </div>
        </>
    )
}
export default Diversificados;