import React, { useEffect } from 'react';
import './style.css';
import { canvasStart, canvasStop } from './script';

function Gravidade(){
    useEffect( () => {
        canvasStart();

        return () => {
            canvasStop();
        }
    },[]);

    return (
        <section className='subtopicSection' id='gravidadeSection'>
            <div className='subtopicTitle'>
                <h2>Gravidade</h2>                
            </div>
            <p>Para ver a gravidade em ação, arraste a bolinha para o alto e solte.</p>
            <canvas id='gravidadeCanvas' width='500' height='350'></canvas>
        </section>
    )
}

export default Gravidade;