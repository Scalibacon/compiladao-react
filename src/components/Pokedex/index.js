import React, { useEffect, useState } from 'react';
import './style.css';

function Pokedex(){
    const [pokeName, setPokeName] = useState('');
    const [pokeTypes, setPokeTypes] = useState([]);
    const [pokeImg, setPokeImg] = useState('');
    const [pokelist, setPokelist] = useState([]);

    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon?limit=151`)
        .then(response => response.json())
        .then(data => {
            data.results.forEach((pokemon, index) => {
                const upperName = firstLetterToUpper(pokemon.name);
                const id = index+1;
                setPokelist(old => [...old, (
                    <div key={id} className='pokelistItem' onClick={e => fetchPokemon(id)}>
                        #{id} {upperName}
                    </div>
                )])                
            });
            fetchPokemon(1);
        });

        return () => {
            setPokelist([]);
        }
        
    },[]);
    
    function fetchPokemon(id){
        fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
        .then(resp => resp.json())
        .then(data => {
            // console.log(data);            
            setPokeName(data.name);
            setPokeTypes(data.types);  
            setPokeImg(`https://pokeres.bastionbot.org/images/pokemon/${id}.png`);
        })
    }

    function firstLetterToUpper(string){
        return string.charAt(0).toUpperCase() + string.slice(1)
    }

    return( 
        <section className='subtopicSection' id='pokedexSection'>
            <div className='subtopicTitle'>
                <h2>Pokedex</h2>                
            </div>
            <div className='pokedexContainer'>
                <div className='pokelist'>
                    {pokelist}
                </div>
                <section className='pokeinfoContainer'>
                    <div className='pokeImg' style={{backgroundImage: `url(${pokeImg})`}}/>
                    <div className='pokeinfo' id='infoNome'>{firstLetterToUpper(pokeName)}</div>
                    <div className='pokeinfo' id='infoTipo1'>
                        {pokeTypes[0] ? firstLetterToUpper(pokeTypes[0].type.name) : ""}
                    </div>
                    <div className='pokeinfo' id='infoTipo2' style={pokeTypes[1] ? {display: 'block'} : {display: 'none'}}>
                        {pokeTypes[1] ? firstLetterToUpper(pokeTypes[1].type.name) : ""}
                    </div>
                </section>                
            </div>
        </section>
        
    )
}

export default Pokedex;