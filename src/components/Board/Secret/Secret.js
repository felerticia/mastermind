import './Secret.css'
import { useAppContext }from '../../../contexts/Context'

const Secret = () => {
    const { appState, dispatch } = useAppContext();
    
    console.log(appState);
    return <div className="Secret">Mastermind</div>  
}

export default Secret