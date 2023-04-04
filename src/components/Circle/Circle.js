import './Circle.css'
const Circle = ({color,onClick,className}) => {

    return <div 
        className={`Circle ${color || 'transparent'} ${onClick ? 'pointer' : ''} ${className || ''}`}
        onClick={onClick}    
    />
} 

export default Circle