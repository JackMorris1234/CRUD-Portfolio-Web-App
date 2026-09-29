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
    return(
        <form>



        </form>

    )
}
export default newProject