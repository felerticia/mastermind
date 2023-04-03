import './Rows.css'
import Circle from '../Circle/Circle'
import { useAppContext } from '../../../contexts/Context'
import { setSlot } from '../../../reducer/actions'

const Rows = () => {

    const [appState,dispatch] = useAppContext()

    const onClick = col => {
        dispatch(setSlot(col))
    } 
    
    return <div className="Rows">
        {new Array(10).fill()
        .map ((x,i) => <div className="Row" key={i}>
                <div>{i+1}</div>
                <div className='circles'>
                    <Circle onClick={() => onClick(i)} index={i}/>
                    <Circle onClick={() => onClick(i+1)} index={i+1}/>
                    <Circle onClick={() => onClick(i+2)} index={i+2}/>
                    <Circle onClick={() => onClick(i+3)} index={i+3}/>
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