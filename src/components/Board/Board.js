import './Board.css'
import Secret from './Secret/Secret'
import Rows from './Rows/Rows'
import Colors from './Colors/Colors'
import Buttons from './Buttons/Buttons'

const Board = () => 
<div className="Board">
    <Secret/> 
    <Rows/>
    <Colors/>
    <Buttons/>
</div>

export default Board