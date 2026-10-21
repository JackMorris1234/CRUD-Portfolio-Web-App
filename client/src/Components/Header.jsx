
import Button from './Button'
import Dropdown from './DropDown'
import{useState} from 'react'
import SignIn from './SignIn'
const Header=({user, setUser})=>{
    const [visibleSignIn, setVisibleSignIn]=useState(false)

    const toggleSignIn=()=>{
        setVisibleSignIn(!visibleSignIn)
    }
    const handleSignOut=()=>{
        setUser(null)
        window.localStorage.removeItem('ProjectUser')
    }


    return(
        <div className="OuterHeader">
            <Dropdown/>
            <h1 >Jack Morris' Resume Portfolio</h1>
            {!user && <Button text='Sign In' handleClick={toggleSignIn}/>}
            {user && <Button text='Log Out' handleClick={handleSignOut}/>}
            {visibleSignIn && <SignIn toggleSignIn={toggleSignIn} setUser={setUser}/>}
        </div>
    )
}
export default Header