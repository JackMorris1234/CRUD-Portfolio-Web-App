
import Button from './Button'
import Dropdown from './DropDown'
import{useState} from 'react'
import SignIn from './SignIn'
const Header=({user, setUser})=>{
    const [visibleSignIn, setVisibleSignIn]=useState(false)

    const toggleSignIn=()=>{
        setVisibleSignIn(!visibleSignIn)
    }


    return(
        <div className="OuterHeader">
            <Dropdown/>
            <h1 >Jack Morris' Resume Portfolio</h1>
            <Button text='Sign In' handleClick={toggleSignIn}/>
            {visibleSignIn && <SignIn toggleSignIn={toggleSignIn} setUser={setUser}/>}
        </div>
    )
}
export default Header