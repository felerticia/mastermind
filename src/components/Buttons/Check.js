import { useAppContext } from '../../contexts/Context'
import { getHints } from '../../helper'
import { checkRow } from '../../reducer/actions'

const Check = () => {
    const [{secret,currentRow,rows}, dispatch] = useAppContext();

    const isRowComplete = 
        currentRow === 10 ? false : rows[currentRow].every(x => x)

    const onCheck = () => {
        const hints = getHints(secret,rows[currentRow]) 
        dispatch(checkRow(hints))
    }

    return <button className="Button" onClick={onCheck} disabled={!isRowComplete}>
        Check
    </button> 
}


export default Check
