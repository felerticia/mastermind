import './Button.css'

const Button = ({title,onClick,disabled}) => 
    <button className="Button" onClick={onClick} disabled={disabled}>
        {title}
    </button> 

export default Button
