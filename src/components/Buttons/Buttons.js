import { useAppContext } from '../../contexts/Context'
import { checkRow,newGame } from '../../reducer/actions'
import Button from './Button'
import './Buttons.css'

const Buttons = () => {
    const [{secret,currentRow,rows}, dispatch] = useAppContext();

    const getHints = () => {
        const secretCopy = [...secret]
        const rowCopy = [...rows[currentRow]]
        const hints = []

        for (let i = 3; i >= 0; i--) {
            if (secretCopy[i] === rowCopy[i]) {
                hints.push('black')
                secretCopy.splice(i,1)
                rowCopy.splice(i,1)
            }
        }
      
        for (let i = secretCopy.length; i >= 0; i--) {
            const j = rowCopy.indexOf(secretCopy[i])
            if (j !== -1) {
                hints.push('white')
                secretCopy.splice(i,1)
                rowCopy.splice(j,1)
            }
        }

        return new Array(4).fill('').map((x,i) => hints[i] || '') 
    }

    const isRowComplete = 
        currentRow === 10 ? false : rows[currentRow].every(x => x)

    const onCheck = () => {
        const hints = getHints() 
        dispatch(checkRow(hints))
    }

    return <div className="Buttons">
        <Button onClick={onCheck} disabled={!isRowComplete} title="Check"/>
        <Button onClick={() => dispatch(newGame())} title="New Game"/>
    </div> 
}


export default Buttons
