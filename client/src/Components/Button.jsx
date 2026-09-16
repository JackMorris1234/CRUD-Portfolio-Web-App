
const Button=({text, handleClick})=>{

    return(
        <button className='HeaderButton' onClick={handleClick}>
            <h1>{text}</h1>
        </button>

    )
}

export default Button