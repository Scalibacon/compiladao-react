import React, { useEffect } from 'react';
import './style.css';
import { canvasStart, canvasStop } from './script';

function Viewport(){
    useEffect( () => {
        canvasStart();

        return () => {
            canvasStop();
        }
    });

    return(
        <section className='subtopicSection' id='viewportSection'>
            <div className='subtopicTitle'>
                <h2>Viewport</h2>                
            </div>
            <div className='viewportContainer'>
                <canvas id='viewportCanvas' width='500' height='350'>                    
                </canvas>
            </div>
        </section>        
    )
}

export default Viewport;