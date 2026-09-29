import FrontToBack from "../BackendCommunication"
import { useState,useEffect } from "react"
const newProject=()=>{
    const [newProject, setNewProject]=useState({
        title:'',
        body:'',
        goal:'',
        outcomes:'',
        card:'',
        git:''

    })

    const handleFormChange=(event)=>{
        const {name,value}=event.target
        setNewProject((prev)=>({...prev,[name] : value}))
    }
    return(
        <form>



        </form>

    )
}
export default newProject