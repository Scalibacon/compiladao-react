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
                <dd><Link to='/api'><FiCornerDownRight size='15'/>Pokedex</Link></dd>

                <dt>Canvas</dt>
                <dd><Link to='/canvas'><FiCornerDownRight size='15'/>Viewport</Link></dd>
                <dd><Link to='/canvas'><FiCornerDownRight size='15'/>Gravidade</Link></dd>
                <dd><Link to='/canvas'><FiCornerDownRight size='15'/>Hitbox</Link></dd>
                <dd><Link to='/canvas'><FiCornerDownRight size='15'/>Sprites</Link></dd>                
                <dd><Link to='/canvas'><FiCornerDownRight size='15'/>Board</Link></dd>

                <dt>CSS</dt>
                <dd><FiCornerDownRight size='15'/>Animation</dd>

                <dt>React</dt>
                <dd><FiCornerDownRight size='15'/>Context</dd>
                <dd><FiCornerDownRight size='15'/>Router</dd>

                <dt>Diversificados</dt>
                <dd><Link to='/diversos'><FiCornerDownRight size='15'/>Piano</Link></dd>
            </dl>
        </span>
    )
}

export default Summary;