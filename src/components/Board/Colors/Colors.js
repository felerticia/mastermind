import { color_options } from "../../../constants"
import './Colors.css'

const Colors = () => <div className="Colors">
    {color_options.map (color => <div className="item">
        <div className={`color ${color}`}/>
    </div>)}
    
</div>

export default Colors