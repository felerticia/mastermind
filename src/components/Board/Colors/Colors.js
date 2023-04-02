import { color_options } from "../../../constants"
import Circle from "../Circle/Circle"
import './Colors.css'

const Colors = ({onClick}) => <div className="Colors">
    {color_options.map (color => <div className="item" key={color} onClick={onClick}>
        <Circle
            color={color}
        />
    </div>)}
    
</div>

export default Colors