
const ProjectCard=({project})=>{

    const handleClick=()=>{
        
    }

    return(
        <div key={project.Title} className="ProjectCard"> 
                {console.log('here', project.Title, project.card_blurb)}
                <h1 className="ProjectTitle">{project.Title}</h1>
                <p className="ProjectBlurb">{project.card_blurb}</p>
                <a className="ProjectLink" href={project.github}> Github Link</a>
                <button onClick={handleClick}>Edit</button>
        </div>
        
    )
}
export default ProjectCard