
const funFacts = {
    'css': ['1', '2', '3', '4'],
    'html': ['z', 'x', 'c', 'v']
}


const inspoQuote = [
    'a',
    'b',
    'c'
]

const randomFunFact = (type) => {
    return funFacts[type][Math.ceil(Math.random() * (funFacts[type].length))]

}

const randomInspoQuote = _ => {
    return inspoQuote[Math.ceil(Math.random() * (inspoQuote.length))]
}