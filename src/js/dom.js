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
            const bubblesOptions = options.map(({human, bot}) => {
                const bubbleHuman = document.createElement('button')
                bubbleHuman.innerHTML = human;
                bubbleHuman.classList.add('bubble', 'human') 
                bubbleHuman.onclick = function(){createBubble(script[bot]); scrollToBottom(bubblesBot[0].id)}
                return bubbleHuman
            })
           displayBubbles(bubblesOptions)  
            
        }

     }, 1000)

}

const displayBubbles = (bubbles) => {
    bubbles.forEach(bubble => {
        setTimeout(function(){ container.appendChild(bubble); bubble.scrollIntoView() }, 1000)
        
    })
}

const scrollToBottom = id => {
    //ta erradissimo kkk
    document.getElementById(id).scrollIntoView();
}