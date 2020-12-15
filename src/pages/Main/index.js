import React from 'react';
import './style.css';

import Header from '../../components/Header';
import Summary from '../../components/Summary';

function Main(){
    return (
        <>
            <Header/>
            <div className='mainContainer'>            
                <h1>Que site é este?</h1>
                <p>
                    Eu uso este site para testar alguns conhecimentos e técnicas de JavaScript/React 
                    no front-end. Às vezes também deixo os testes disponíveis aqui caso precise
                    consultar o código em algum momento. Para acessar os conteúdos basta navegar pelos
                    tópicos localizados um pouco mais abaixo. Também pode acessá-los pelo menu localizado
                    no canto esquerdo do header.
                </p>
                {/* <h1>Tópicos</h1> */}
                <div className='summaryContainer'>
                    <Summary/>
                </div>
            </div>
        </>
    )
}

export default Main;