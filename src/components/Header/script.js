let showingTopics = false;

export function addCloseOnClick(){
    window.addEventListener('click', handleClick);
    closeTopics();
}

export function removeCloseOnClick(){
    window.removeEventListener('click', handleClick);
    closeTopics();
}

function handleClick(e){
    if(!document.querySelector('.theHeader + .fixedTopics').contains(e.target) 
      && e.target !== document.querySelector('.theHeader .menuIcon') 
      && !document.querySelector('.theHeader .menuIcon').contains(e.target)){
        closeTopics();
    }    
}

export function resetToggle(){    
    showingTopics = false;
}

export function toggleTopics(){    
    if(showingTopics){
        closeTopics();
    } else {
        openTopics();
    }    
}

function closeTopics(){
    const topicDiv = document.querySelector('.theHeader + .fixedTopics');
    topicDiv.style.display = 'none';
    showingTopics = false;
}

function openTopics(){
    const topicDiv = document.querySelector('.theHeader + .fixedTopics');
    topicDiv.style.display = 'block';
    showingTopics = true;
}