import { color_options } from "../../constants"
import Circle from "../Circle/Circle"
import './Colors.css'
import { useAppContext }from '../../contexts/Context'
import { setColor } from '../../reducer/actions';

const Colors = () => {
    const [appState, dispatch] = useAppContext();
    const onClick = color => dispatch(setColor(color))

    return <div className="Colors">
    {color_options.map (color => <div className="item" key={color} >
        <Circle
            className={appState.currentColor === color ? 'active' : ''}
            color={color}
            onClick={() => onClick(color)}/>
        </div>)}
    </div>
}

    

export default Colors