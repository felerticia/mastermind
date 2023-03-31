import './Board.css'
import Secret from './Secret/Secret'
import Rows from './Rows/Rows'
import Colors from './Colors/Colors'

const Board = () => 
<div className="Board">
    <Secret/> 
    <Rows/>
    <Colors/>
    <div className="Buttons">Buttons</div> 
</div>

export default Board