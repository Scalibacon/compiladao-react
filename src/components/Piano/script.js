let importedAudios = importAudios(require.context('../../audio/notas-piano/', false, /\.wav/));
let pianoAudios = {};
let pressedPianoKeys = [];

//pianoKey é o id gerado pras teclas do piano e também o id dos áudios
const keyToPianoKey = {
    'Q':0,'A':1,'W':2,'S':3,'E':4,'D':5,'R':6,'F':7,'T':8,'G':9,
    'Y':10,'H':11,'U':12,'J':13,'I':14,'K':15,'O':16,'L':17,'P':18,'Ç':19
}

export function startPiano(){ 

    for(let i in importedAudios){
        const audio = new Audio(importedAudios[i].default)
        audio.volume = 1;
        pianoAudios[i.replace('.wav', '')] = audio;
    }

    document.addEventListener('keydown', handlePianoKeyDown);
    document.addEventListener('keyup', handlePianoKeyUp);
}

export function endPiano(){
    document.removeEventListener('keydown', handlePianoKeyDown);
    document.removeEventListener('keyup', handlePianoKeyUp);
}

function handlePianoKeyDown(e){    
    const key = e.key.toUpperCase();
    const pianoKey = keyToPianoKey[key];

    if(!pianoAudios[pianoKey] || pressedPianoKeys[pianoKey]){
        return false;
    }

    playNote( pianoKey );
}

export function playNote(pianoKey){
    pressedPianoKeys[pianoKey] = true;
    pianoAudios[pianoKey].load();
    pianoAudios[pianoKey].play();

    const domPianoKey = document.querySelector(`#piano #tecla${pianoKey}`);
    if(!domPianoKey){
        return false;
    }

    if(domPianoKey.className.split(' ')[0] === 'teclaBranca'){
        domPianoKey.style.backgroundColor = 'rgba(0,220,220,1)';
    }
}

function handlePianoKeyUp(e){
    const key = e.key.toUpperCase();
    const pianoKey = keyToPianoKey[key];
    releaseNote( pianoKey );    
}

export function releaseNote(pianoKey){
    pressedPianoKeys[pianoKey] = false;
    const domPianoKey = document.querySelector(`#piano #tecla${pianoKey}`);
    if(!domPianoKey){
        return false;
    }

    if(domPianoKey.className.split(' ')[0] === 'teclaBranca'){
        domPianoKey.style.backgroundColor = 'snow';
    }
}

function importAudios(source) {
    let audios = {};
    source.keys().map((item, index) => audios[item.replace('./', '')] = source(item) );
    return audios;
}