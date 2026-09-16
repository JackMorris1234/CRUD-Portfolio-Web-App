
import Button from './Button'
import Dropdown from './DropDown'
const Header=()=>{


    return(
        <div className="OuterHeader">
            <Dropdown/>
            <h1 >Jack Morris' Resume Portfolio</h1>
            <Button text='Sign In' handleClick={''}/>
        </div>
    )
}
export default Header