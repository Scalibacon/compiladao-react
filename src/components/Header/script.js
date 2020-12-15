let showingTopics = false;

export function resetToggle(){    
    showingTopics = false;
}

export function toggleTopics(){
    const topicDiv = document.querySelector('.theHeader + .fixedTopics');
    
    if(showingTopics){
        topicDiv.style.display = 'none';
        showingTopics = false;
    } else {
        topicDiv.style.display = 'block';
        showingTopics = true;
    }    
}