import './Circle.css'
const Circle = ({color,onClick,className}) => {

    return <div 
        className={`circle ${color || 'transparent'} ${onClick ? 'pointer' : ''} ${className || ''}`}
        onClick={onClick}    
    />
} 

export default Circle