import { useEffect, useReducer } from 'react';
import './App.css';

import { reducer } from './reducer/reducer'
import AppContext from './contexts/Context'
import { checkGameState, initGameState } from './helper';
import { setGameState } from './reducer/actions'
import Secret from './components/Secret/Secret'
import Rows from './components/Rows/Rows'
import Colors from './components/Colors/Colors'
import Buttons from './components/Buttons/Buttons'
import GameEnds from './components/GameEnds/GameEnds'

const App = () =>{
    const [appState, dispatch ] = useReducer(reducer,initGameState());

    useEffect(() => {
        const gameState = checkGameState(appState.hints,appState.currentRow-1)
        if (gameState === appState.gameState)
            return
        else    
            dispatch(setGameState(gameState))
    }, [appState.currentRow])

    return <AppContext.Provider value={[appState, dispatch]} >
        <div className="App">
            <div className="board">
                <Secret/> 
                <Rows/>
                <Colors/>
                <Buttons/>
                <GameEnds/>
            </div>
        </div>
    </AppContext.Provider>
}
export default App;
