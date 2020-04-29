const container = document.querySelector('.container-chat')

const createBubble = ({id, bot, options}) => {


    const bubblesBot = bot.map(bubbleMessage => {
        const bubbleBot = document.createElement('div')
        bubbleBot.classList.add('bubble', 'bot') 
        bubbleBot.id = id
        bubbleBot.innerHTML = bubbleMessage
        return bubbleBot
    })

    displayBubbles(bubblesBot)

    setTimeout(function(){ 
        if(options) {
            const bubblesOptions = options.map(({human, bot, keep}) => {
                const bubbleHuman = document.createElement('button')
                bubbleHuman.innerHTML = human;
                bubbleHuman.classList.add('bubble', 'human', 'option') 
                bubbleHuman.onclick = function(){createBubble(script[bot]); bubbleHuman.classList.add('keep'); scrollToBottom(bubblesBot[0].id); bubbleHuman.disabled = true; hideOtherOptions()}
                return bubbleHuman
            })
           displayBubbles(bubblesOptions)  
            
        }

     }, 1000)

}

const displayBubbles = (bubbles) => {
    bubbles.forEach(bubble => {
        setTimeout(function(){ container.appendChild(bubble); bubble.scrollIntoView() }, 500)
        
    })
}

const scrollToBottom = id => {
    document.getElementById(id).scrollIntoView();
}

const hideOtherOptions = _ => {
    const options = document.querySelectorAll('.option');
    const otherOptions = [...options].filter(option => {
        return (!(option.classList.contains('keep')))
    })

    otherOptions.forEach(option => {
        option.classList.add('d-none');
    })
}

