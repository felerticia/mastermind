import './Rows.css'

const Rows = () => {
    
    return <div className="Rows">
        {new Array(10).fill()
        .map (x => <div className="Row">
                <div>1</div>
                <div>circles</div>
                <div>hints</div>
            </div>)
        }
    </div>
} 

export default Rows