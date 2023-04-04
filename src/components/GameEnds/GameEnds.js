import './GameEnds.css'
import { useAppContext }from '../../contexts/Context'
import Circle from '../Circle/Circle';
import Button from '../Buttons/Button';
import { newGame } from '../../reducer/actions'

const GameEnds = () => {
    const [appState, dispatch] = useAppContext();

    if(!appState.gameState)
        return

    return <div className="GameEnds">
        <p>You {appState.gameState}!</p>
        <p>The secret was:</p>
        <div className='secret'>
            {appState.secret.map(x => <Circle color={x}/>)}
        </div>
        <Button onClick={() => dispatch(newGame())} title="New Game"/>
            
    </div>

}

export default GameEnds