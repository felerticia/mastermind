import { useEffect, useReducer } from 'react';
import './App.css';
import Board from './components/Board/Board'
import GameEnds from './components/GameEnds/GameEnds'

import { reducer } from './reducer/reducer'
import AppContext from './contexts/Context'
import { initGameState } from './constants';
import { setGameState } from './reducer/actions'


const App = () =>{
    const [appState, dispatch ] = useReducer(reducer,initGameState);

    const checkGameState = () => {
        if(appState.currentRow === 0)
            return ''

        const row = appState.currentRow - 1
        if (row === 9 && appState.hints[row].some(x => x !== 'black'))
            return 'lost'

        if (appState.hints[row].every(x => x === 'black'))
            return 'won'

        return ''
    }

    useEffect(() => {
        const gameState = checkGameState()
        if (gameState === appState.gameState)
            return
        else    
            dispatch(setGameState(gameState))
    }, [appState.currentRow])

    return <AppContext.Provider value={[appState, dispatch]} >
        <div className="App">
            <Board/>
            <GameEnds/>
        </div>
    </AppContext.Provider>
}
export default App;
