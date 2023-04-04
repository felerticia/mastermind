import { color_options,tries } from "./constants"

export const initGameState = () => ({
    currentRow : 0,
    currentColor : color_options[0],
    rows : new Array(tries).fill().map(_ => ['','','','']),
    hints : new Array(tries).fill().map(_ => ['','','','']),
    secret : new Array(4).fill().map(_ => color_options[Math.floor(color_options.length * Math.random())]),
    gameState : ''
})

export const getHints = (secret,row) => {
    const secretCopy = [...secret]
    const rowCopy = [...row]
    const hints = []

    for (let i = 3; i >= 0; i--) {
        if (secretCopy[i] === rowCopy[i]) {
            hints.push('black')
            secretCopy.splice(i,1)
            rowCopy.splice(i,1)
        }
    }
  
    for (let i = secretCopy.length; i >= 0; i--) {
        const j = rowCopy.indexOf(secretCopy[i])
        if (j !== -1) {
            hints.push('white')
            secretCopy.splice(i,1)
            rowCopy.splice(j,1)
        }
    }

    return new Array(4).fill('').map((x,i) => hints[i] || '') 
}

export const checkGameState = (hints,row) => {
    if(row === -1)
        return ''

    if (row === 9 && hints[row].some(x => x !== 'black'))
        return 'lost'

    if (hints[row].every(x => x === 'black'))
        return 'won'

    return ''
}