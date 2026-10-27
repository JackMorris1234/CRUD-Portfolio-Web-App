import { Link } from 'react-router-dom'
import Button from '../Button'
import FrontToBack from '../BackendCommunication/ProjectsBackend'
const ProjectCard=({project, user})=>{
    console.log(project)
    const handleDelete=async ()=>{
        await FrontToBack.removeEntry(project.id)

    }



    return(
        <Link to={`/ViewProject/${project.id}`}key={project.Title} className="ProjectCard"> 
                <h1 className="ProjectTitle">{project.Title}</h1>
                <p className="ProjectBlurb">{project.card_blurb}</p>
                <a className="ProjectLink" href={project.github}> Github Link</a>
                {user &&
                <div>
                    <Link className="ProjectLink" to= {`/EditProject/${project.id}`} >Edit Project</Link>
                    <button className="ProjectLink" text="delete" handleClick={handleDelete}>Delete</button>
                </div> }
                
        </Link>
        
    )
}
export default ProjectCard