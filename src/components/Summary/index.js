import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

import { FiCornerDownRight } from "react-icons/fi";

function Summary(props){
    return(
        <span className='summary' style={{color: props.color}}>
            <dl>
                <dt>API</dt>
                <dd><Link to='/api'><FiCornerDownRight size='15'/>Correios</Link></dd>
                <dd><FiCornerDownRight size='15'/>Pokedex</dd>

                <dt>Canvas</dt>
                <dd><FiCornerDownRight size='15'/>Viewport</dd>
                <dd><FiCornerDownRight size='15'/>Gravidade</dd>
                <dd><FiCornerDownRight size='15'/>Hitbox</dd>

                <dt>CSS</dt>
                <dd><FiCornerDownRight size='15'/>Animation</dd>

                <dt>React</dt>
                <dd><FiCornerDownRight size='15'/>Context</dd>
                <dd><FiCornerDownRight size='15'/>Router</dd>
            </dl>
        </span>
    )
}

export default Summary;