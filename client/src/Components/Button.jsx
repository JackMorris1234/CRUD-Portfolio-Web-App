import '../App.css'
const Button=({text, handleClick})=>{

    return(
        <button className='HeaderButton' onClick={handleClick}>{text}</button>

    )
}

export default Button