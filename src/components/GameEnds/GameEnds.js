import './GameEnds.css'
import { useAppContext }from '../../contexts/Context'
import Circle from '../Circle/Circle';
import NewGame from '../Buttons/NewGame';

const GameEnds = () => {
    const [appState] = useAppContext();

    if(!appState.gameState)
        return

    return <div className="GameEnds">
        <p>You {appState.gameState}!</p>
        <p>The secret was:</p>
        <div className='secret'>
            {appState.secret.map(x => <Circle color={x}/>)}
        </div>
        <NewGame/>
    </div>

}

export default GameEnds