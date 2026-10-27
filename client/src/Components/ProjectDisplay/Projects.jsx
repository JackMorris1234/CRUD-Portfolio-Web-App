import { useEffect,useState } from "react"
import FrontToBack from "../BackendCommunication/ProjectsBackend"
import ProjectCard from './ProjectCard'
import {FiPlus} from 'react-icons/fi'
import { Link } from 'react-router-dom'
const Projects=({user, projects, setProjects})=>{
   
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
    console.log('here1', projects)
    if(displayProjects){
        return(
    <section className="AboutSection">
        <h1 className="AboutHeader">Projects</h1>

        <div className="ProjectCards">
            {projects.map(project=>
            <ProjectCard project={project} user={user}/>     
            )}
            {user && 
            <Link to='/NewProject' className="ProjectCard">
                <h1 className="ProjectTitle">Add Project</h1>
                <FiPlus className="AddProjectIcon" />
            </Link>
            
            }
        </div>
    </section>
        )
    }else{

        return(
            <button onClick={handleBack}>Back</button>

        )
    }
}

export default Projects