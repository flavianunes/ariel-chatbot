const intro = {
    id: 'intro',
    bot: ['Olá, eu sou ARIEL, seu mentor 👋. Eu estou aqui para te ajudar na sua jornada para se tornar uma desenvolvedora front-end.'],
    options: [{
        human: 'Legal, mas como exatamente você pode me ajudar? 🤔',
        bot: 'how',
        keep: false
    }]
}

const how = {
    id: 'how',
    bot: ['<img src=https://media.giphy.com/media/XbxZ41fWLeRECPsGIJ/source.gif />Boa pergunta! Eu posso te ajudar na busca de conteúdo educacional, tirar algumas dúvidas técnicas e de carreiras, te introduzir à desafios emétodos de estudo e te enviar GIFs motivacionais. Vamos começar?'],

    options: [{
            human: 'Vamos! 😃',
            bot: 'go',
            keep: false
        },
        {
            human: 'Talvez depois...',
            bot: 'bye',
            keep: false
        }
    ]
}

const go =  {
    id: 'go',
    bot: ['Perfeito! Agora diz pra mim, sobre o que você quer conversar?'],
    options: [{
            human: 'Tô precisando de motivação...',
            bot: 'inspiration',
            keep: false
        },
        {
            human: 'Eu quero treinar minhas habilidades!',
            bot: 'training',
            keep: false
        },
        {
            human: 'Eu tenho uma dúvida técnica',
            bot: 'tech',
            keep: false
        },
        {
            human: 'Por enquanto nada',
            bot: 'bye',
            keep: false
        }
    ]
}

const tech = {
    id: 'tech',
    bot: ['Diz pra mim sobre o que é a sua dúvida'],
    options: [{
            human: 'CSS',
            bot: 'css',
            keep: false
        },
        {
            human: 'HTML',
            bot: 'html',
            keep: false
        },
        {
            human: 'Outra coisa...',
            bot: 'something-else',
            keep: false
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
            bot: 'flexbox',
            keep: false
        },
        {
            human: 'Seletores',
            bot: 'selectors',
            keep: false
        },
        {
            human: 'Design responsivo',
            bot: 'responsive',
            keep: false
        }, 
        {
            human: 'calc()',
            bot: 'calc',
            keep: false
        },
        {
            human: 'Gradientes',
            bot: 'gradients',
            keep: false
        }, 
        {
            human: 'Eu quero receber uma curiosidade',
            bot: 'funFactCss',
            keep: false
        },
        {
            human: 'Outro assunto',
            bot: 'something-else',
            keep: false
        }
    ]
}



const html = {
    id: 'html',
    bot: ['Um HTML semântico e bem estruturado é essencial! O que você quer saber sobre ele?'],
    options: [
        {
            human: 'Quero saber sobre um elemento específico',
            bot: 'elem',
            keep: false
        },
        {
            human: 'Formulários',
            bot: 'form',
            keep: false
        },
        {
            human: 'ARIA',
            bot: 'aria',
            keep: false
        },
        {
            human: 'Eu quero receber uma curiosidade',
            bot: randomFunFact('html'),
            keep: false
        },
        {
            human: 'Outro assunto',
            bot: 'something-else',
            keep: false
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
            bot: 'inspiration',
            keep: false
        },
        {
            human: 'Por hoje está bom, valeu!',
            bot: 'go',
            keep: false
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

