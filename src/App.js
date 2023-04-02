import { useReducer } from 'react';
import './App.css';
import Board from './components/Board/Board'
import GameEnds from './components/GameEnds/GameEnds'

import { reducer } from './reducer/reducer'
import AppContext from './contexts/Context'
import { initGameState } from './constants';


const App = () =>{
    const [appState, dispatch ] = useReducer(reducer,initGameState);
    
    const providerState = {
        appState,
        dispatch
    }

    return <AppContext.Provider value={providerState} >
        <div className="App">
            <Board/>
            <GameEnds/>
        </div>
    </AppContext.Provider>
}
export default App;
