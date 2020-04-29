const intro = {
    id: 'intro',
    bot: ['Olá, eu sou ARIEL, seu mentor 👋. Eu estou aqui para te ajudar na sua jornada para se tornar uma desenvolvedora front-end.'],
    options: [{
        human: 'Legal, mas como exatamente você pode me ajudar? 🤔',
        bot: 'how'
    }]
}

const how = {
    id: 'how',
    bot: ['<img src=https://media.giphy.com/media/XbxZ41fWLeRECPsGIJ/source.gif />Boa pergunta! Eu posso te ajudar na busca de conteúdo educacional, tirar algumas dúvidas técnicas e de carreiras, te introduzir à desafios emétodos de estudo e te enviar GIFs motivacionais. Vamos começar?'],

    options: [{
            human: 'Vamos! 😃',
            bot: 'go'
        },
        {
            human: 'Talvez depois...',
            bot: 'bye'
        }
    ]
}

const go =  {
    id: 'go',
    bot: ['Perfeito! Agora diz pra mim, sobre o que você quer conversar?'],
    options: [{
            human: 'Tô precisando de motivação...',
            bot: 'inspiration'
        },
        {
            human: 'Eu quero treinar minhas habilidades!',
            bot: 'training'
        },
        {
            human: 'Eu tenho uma dúvida técnica',
            bot: 'tech'
        },
        {
            human: 'Por enquanto nada',
            bot: 'bye'
        }
    ]
}

const tech = {
    id: 'tech',
    bot: ['Diz pra mim sobre o que é a sua dúvida'],
    options: [{
            human: 'CSS',
            bot: 'css'
        },
        {
            human: 'HTML',
            bot: 'html'
        },
        {
            human: 'Outra coisa...',
            bot: 'something-else'
        }
    ]
}

const funFactCss = {
    bot: [randomFunFact('css')]
}

const css = {
    id: 'css',
    bot:['Poxa, CSS pode não fazer sentido nenhum no começo, mas te garanto que com o tempo vocês vão ser melhores amigos 🤗. Diz pra mim, o que você quer saber sobre CSS?'],
    options: [
        {
            human: 'Flexbox',
            bot: 'flexbox'
        },
        {
            human: 'Seletores',
            bot: 'selectors'
        },
        {
            human: 'Design responsivo',
            bot: 'responsive'
        }, 
        {
            human: 'calc()',
            bot: 'calc'
        },
        {
            human: 'Gradientes',
            bot: 'gradients'
        }, 
        {
            human: 'Eu quero receber uma curiosidade',
            bot: 'funFactCss'
        },
        {
            human: 'Outro assunto',
            bot: 'something-else'
        }
    ]
}



const html = {
    id: 'html',
    bot: ['Um HTML semântico e bem estruturado é essencial! O que você quer saber sobre ele?'],
    options: [
        {
            human: 'Quero saber sobre um elemento específico',
            bot: 'elem'
        },
        {
            human: 'Formulários',
            bot: 'form'
        },
        {
            human: 'ARIA',
            bot: 'aria'
        },
        {
            human: 'Eu quero receber uma curiosidade',
            bot: randomFunFact('html')
        },
        {
            human: 'Outro assunto',
            bot: 'something-else'
        }
    ]
}

const somethingElse = {
    id: 'something-else',
    bot: 'Não temos, submete a sua sugestão aqui rsrs'
}


const inspiration = {
    id: 'inpiration',
    bot: [randomInspoQuote()],
    options: [
        {
            human: 'Ainda preciso de motivação...',
            bot: 'inspiration'
        },
        {
            human: 'Por hoje está bom, valeu!',
            bot: 'go'
        }
    ]
}

const training = {
}

const bye = {
    bot: ['Bye!!!']
}



const script = {
    intro,
    how,
    go,
    tech,
    inspiration,
    training,
    css,
    funFactCss,
    html,
    somethingElse,
    bye
}

