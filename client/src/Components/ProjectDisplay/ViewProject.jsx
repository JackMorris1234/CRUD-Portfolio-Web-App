
import { useParams } from 'react-router-dom'
import '../../App.css'
const ViewProject = ({ projects }) => {
  const { id } = useParams()
  const project = projects.find(project => project.id === id)

  if (!project) {
    return (
      <section className="ProjectDetail">
        <h1 className="ProjectDetailTitle">Project not found</h1>
        <p className="ProjectDetailText">
          The project you're looking for doesn't exist.
        </p>
      </section>
    )
  }

  return (
    <main className="ProjectDetail">
      <header className="ProjectDetailHeader">
        <h1 className="ProjectDetailTitle">{project.Title}</h1>
        <p className="ProjectDetailBlurb">{project.card_blurb}</p>
      </header>

      <section className="ProjectDetailBody">
        <h2>About the Project</h2>
        <p className="ProjectDetailText">{project.body}</p>
      </section>

      <div className="ProjectDetailContent">
        <section className="ProjectDetailCard">
          <h2>Project Goal</h2>
          <p>{project.Goal}</p>
        </section>

        <section className="ProjectDetailCard">
          <h2>Outcomes</h2>
          <p>{project.Outcomes}</p>
        </section>
      </div>

      {project.github && (
        <footer className="ProjectDetailFooter">
          <a
            className="ProjectLink"
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            View on GitHub ↗
          </a>
        </footer>
      )}
    </main>
  )
}

export default ViewProject

//   Title:String,
//   body:String,
//   Goal:String,
//   Outcomes:String,
//   card_blurb:String,
//   github:String,
//   id:String