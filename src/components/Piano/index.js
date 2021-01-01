import React, { useEffect } from 'react';
import './style.css';
import { endPiano, startPiano, playNote, releaseNote } from './script';

function Piano(){
    const whiteKeys = [], blackKeys = [], maxWhites = 20;

    useEffect(() => {
        startPiano();

        return () => {
            endPiano();
        }
    },[]);

    for(let pianoKey = 0; pianoKey < maxWhites; pianoKey++){
        whiteKeys.push(<div 
                        key={pianoKey} id={`tecla${pianoKey}`} className={`teclaBranca branca${pianoKey}`} 
                        onMouseDown={(e) => playNote(pianoKey)}
                        onMouseUp={(e) => releaseNote(pianoKey)}
                        onMouseLeave={(e) => releaseNote(pianoKey)}
                       />);
    }

    for(let pianoKey = 0; pianoKey < 15; pianoKey++){
        blackKeys.push(<div 
                        key={pianoKey} id={`tecla${pianoKey + maxWhites}`} 
                        className={`teclaPreta preta${pianoKey}`} 
                       />);
    }

    return(
        <section className='subtopicSection' id='pianoSection'>
            <div className='subtopicTitle'>
                <h2>Piano</h2>                                
            </div>
            <p>
                Use as teclas Q ao P e A ao Ç para tocar. Pode usar o mouse também. Não manjo nada de música,
                então só peguei algumas notas de piano e coloquei nas teclas :P
            </p>
            <div id='piano'>
                <section className='enfeitesContainer'>
                    <div className='caixaDeSom'/>
                    <div className='barrinhaDeControle'><div id='pinguelo1'></div></div>
                    <div className='barrinhaDeControle'><div id='pinguelo2'></div></div>
                    <div className='barrinhaDeControle'><div id='pinguelo3'></div></div>
                    <div className='barrinhaDeControle'><div id='pinguelo4'></div></div>
                    <div className='barraBranca'/>
                    <div className='botaoLed ledOn'/>
                    <div className='botaoLed ledOn'/>
                    <div className='botaoLed ledOn'/>
                    <div className='botaoLed ledOff'/>
                    <div className='botaoLed ledOff'/>
                    <div className='botaoLed ledOn'/>
                    <div className='caixaDeSom caixaDireita'/>
                </section>
                <section className='teclasContainer'>                    
                    {whiteKeys}   
                    {blackKeys}                 
                </section>
            </div>
        </section>
    )
}

export default Piano;