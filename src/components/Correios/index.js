import React, { useState } from 'react';
import './style.css';
import { FiSearch } from 'react-icons/fi';

function Correios(){
    const [erro, setErro] = useState('');
    const [cep, setCep] = useState('');
    const [logradouro, setLogradouro] = useState('');
    const [bairro, setBairro] = useState('');
    const [cidade, setCidade] = useState('');
    const [uf, setUf] = useState('');

    function fetchAddress(){
        if(cep.length !== 8 || cep !== cep.replace(/\D/g, "")){
            showError('CEP inválido!');
            return;
        }
        try{
            fetch(`https://viacep.com.br/ws/${cep}/json/`)
            .then(response => response.json())
            .then(data => {
                if(data.erro){
                    showError('CEP inexistente!');
                    return false;
                }
                setLogradouro(data.logradouro);
                setBairro(data.bairro);
                setCidade(data.localidade);
                setUf(data.uf);
            })
            .catch(err => {
                showError('Erro ao buscar CEP :(');
                console.log(`Erro ao buscar pelo CEP: ${err}`);
            })
        } catch(err){
            showError('Erro ao buscar CEP :(');
            console.log(`Erro ao buscar pelo CEP: ${err}`);
        }
    }

    function showError(msg){
        setErro(msg);
        document.querySelector(`#correiosSection .correiosError`).style.display = 'block';
    }

    function hideError(){
        document.querySelector(`#correiosSection .correiosError`).style.display = 'none';
    }

    return(
        <section className='subtopicSection' id='correiosSection'>
            <div className='subtopicTitle'>
                <h2>Correios</h2>
            </div>
            <div>
                <input type='text' className='correiosCep' value={cep} placeholder='Digite o CEP...' 
                    onChange={e => setCep(e.target.value)} onFocus={e => hideError()}
                />
                <button onClick={e => fetchAddress()}><FiSearch/></button>
            </div>  
            <div className='correiosError'>{erro}</div>          

            <input type='text' value={logradouro} disabled placeholder='Logradouro...'/>
            <input type='text' value={bairro} disabled placeholder='Bairro...'/>
            <input type='text' value={cidade} disabled placeholder='Cidade...'/>
            <input type='text' value={uf} disabled placeholder='UF...'/>
        </section>
    )
}

export default Correios;