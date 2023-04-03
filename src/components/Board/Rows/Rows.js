import './Rows.css'
import Circle from '../Circle/Circle'
import { useAppContext } from '../../../contexts/Context'
import { setSlot } from '../../../reducer/actions'

const Rows = () => {

    const [appState,dispatch] = useAppContext()
    const {rows,currentRow} = appState
    const onClick = col => {
        dispatch(setSlot(col))
    } 
    
    return <div className="Rows">
        {new Array(10).fill()
        .map ((x,i) => <div className={`Row ${i===currentRow ? 'active' : ''}`} key={i}>
                <div>{i+1}</div>
                <div className='circles'>
                    <Circle color={rows[i][0]} onClick={() => onClick(i)} index={i}/>
                    <Circle color={rows[i][1]} onClick={() => onClick(i+1)} index={i+1}/>
                    <Circle color={rows[i][2]} onClick={() => onClick(i+2)} index={i+2}/>
                    <Circle color={rows[i][3]} onClick={() => onClick(i+3)} index={i+3}/>
                </div>
                <div className='hints'>
                    <Circle/>
                    <Circle/>
                    <Circle/>
                    <Circle/>
                </div>
            </div>)
        }
    </div>
} 

export default Rows