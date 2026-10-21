
import Button from '../Button'
import Dropdown from './DropDown'
const Header=({user, setUser, toggleSignIn})=>{
    
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
        </div>
    )
}
export default Header