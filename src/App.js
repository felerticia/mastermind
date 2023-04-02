import { useReducer } from 'react';
import './App.css';
import Board from './components/Board/Board'
import GameEnds from './components/GameEnds/GameEnds'

import { reducer } from './reducer/reducer'
import AppContext from './contexts/Context'
import { initGameState } from './constants';


const App = () =>{
    const [appState, dispatch ] = useReducer(reducer,initGameState);

    return <AppContext.Provider value={[appState, dispatch]} >
        <div className="App">
            <Board/>
            <GameEnds/>
        </div>
    </AppContext.Provider>
}
export default App;
