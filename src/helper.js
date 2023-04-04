import { color_options,tries } from "./constants"

export const initGameState = () => ({
    currentRow : 0,
    currentColor : color_options[0],
    rows : new Array(tries).fill().map(_ => ['','','','']),
    hints : new Array(tries).fill().map(_ => ['','','','']),
    secret : new Array(4).fill().map(_ => color_options[Math.floor(color_options.length * Math.random())]),
    gameState : ''
})