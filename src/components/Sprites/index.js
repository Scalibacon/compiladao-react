import React, { useEffect } from 'react';

function Sprites(){
    useEffect( () => {
        
    }, []);

    return(
        <section className='subtopicSection' id='spriteSection'>
            <div className='subtopicTitle'>
                <h2>Sprites</h2>                
            </div>
            <p>Clique no canvas e ande com as setinhas para ver as sprites em movimento.</p>
            <canvas id='spriteCanvas' width='500' height='350'></canvas>
        </section>
    )
}

export default Sprites;