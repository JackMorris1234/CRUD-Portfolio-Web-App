import { useEffect,useState } from "react"
import FrontToBack from "./BackendCommunication"
import ProjectCard from './ProjectCard'
import {FiPlus} from 'react-icons/fi'
const Projects=()=>{
    const [projects, setProjects]=useState([])
    const [displayProjects, setDisplayProjects]=useState(true)

    useEffect(()=>{
        const responseHandler = response =>{
            console.log('projects fetched', response)
            setProjects(response)
            setDisplayProjects(true)
        }
        FrontToBack
            .getAll()
            .then(responseHandler)
    },[])

    const handleAddProject=()=>{
        setDisplayProjects(false)
    }

    const handleBack=()=>{
        setDisplayProjects(true)
    }
    if(displayProjects){
        return(
            <div className="ProjectCards">
            {projects.map(project=>
            <ProjectCard project={project}/>     
            )} 
            <button onClick={handleAddProject} className="ProjectCard">
                <h1 className="ProjectTitle">Add Project</h1>
                <FiPlus className="AddProjectIcon" />
            </button>
        </div>
        )
    }else{

        return(
            <button onClick={handleBack}>Back</button>

        )
    }
}

export default Projects