import React from 'react';
import './style.css';

import Header from '../../components/Header';
import Viewport from '../../components/Viewport';
import Gravidade from '../../components/Gravidade';
import Sprites from '../../components/Sprites';
import BoardGame from '../../components/BoardGame';

function Canvas(){
    return(
        <>
            <Header/>
            <div className='mainContainer'>
                <h1>Canvas</h1>
                <p>Essa página é usada para testar alguns macetes e truques feitos com Canvas.</p>
                <Viewport/>
                <Gravidade/>
                <Sprites/>
                <BoardGame/>
            </div>
        </>
    )
}

export default Canvas;