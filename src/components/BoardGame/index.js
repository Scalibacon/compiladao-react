import React, { useEffect } from 'react';
import { startCanvas, stopCanvas } from './script';

function BoardGame(){
    useEffect(() => {
        startCanvas();

        return () => {
            stopCanvas();
        }
    },[]);

    return(
        <section className='subtopicSection' id='boardgameSection'>
            <div className='subtopicTitle'>
                <h2>Board Game</h2>                
            </div>
            <p>Clique no canvas e faça algo que eu não sei ainda, pois não programei :P</p>
            <canvas id='boardgameCanvas' width='500' height='350'></canvas>
        </section>
    )
}

export default BoardGame;