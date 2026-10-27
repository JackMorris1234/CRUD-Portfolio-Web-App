
import FrontToBack from "../BackendCommunication/ProjectsBackend"
import { useState, useEffect } from "react"
import { useNavigate, Link, useParams } from "react-router-dom"
import "./EditProject.css"

const EditProject = ({ projects }) => {
  const { id } = useParams()
  const project = projects.find(project => String(project.id) === id)
  const navigate = useNavigate()

  const [newProject, setNewProject] = useState({
    title: "",
    body: "",
    goal: "",
    outcomes: "",
    card_blurb: "",
    git: ""
  })

  useEffect(() => {
    if (project) {
      setNewProject({
        Title: project.Title ?? project.title ?? "",
        body: project.body ?? "",
        Goal: project.Goal ?? project.goal ?? "",
        Outcomes: project.Outcomes ?? project.outcomes ?? "",
        card_blurb: project.card_blurb ?? "",
        github: project.github ?? project.git ?? ""
      })
    }
  }, [project])

  const handleSubmit = async (event) => {
    event.preventDefault()
    console.log('newproject', newProject)
    await FrontToBack.update(project.id, newProject)
    navigate("/")
  }

  const handleFormChange = (event) => {
    const { name, value } = event.target
    setNewProject(prev => ({ ...prev, [name]: value }))
  }

  if (!project) {
    return (
      <main className="EditProject">
        <h1 className="EditProjectTitle">Project not found</h1>
        <Link className="EditProjectCancel" to="/">
          Back to projects
        </Link>
      </main>
    )
  }

  return (
    <main className="EditProject">
      <header className="EditProjectHeader">
        <h1 className="EditProjectTitle">Edit Project</h1>
        <p>Update your project details below.</p>
      </header>

      <form className="EditProjectForm" onSubmit={handleSubmit}>
        <div className="EditProjectField">
          <label htmlFor="title">Project Title</label>
          <input
            id="Title"
            type="text"
            name="Title"
            value={newProject.Title}
            onChange={handleFormChange}
            placeholder="Enter project Title"
            required
          />
        </div>

        <div className="EditProjectField">
          <label htmlFor="card_blurb">Short Description</label>
          <textarea
            id="card_blurb"
            name="card_blurb"
            value={newProject.card_blurb}
            onChange={handleFormChange}
            placeholder="A short summary for your project card"
            rows="2"
          />
        </div>

        <div className="EditProjectField">
          <label htmlFor="body">Project Description</label>
          <textarea
            id="body"
            name="body"
            value={newProject.body}
            onChange={handleFormChange}
            placeholder="Describe your project"
            rows="5"
          />
        </div>

        <div className="EditProjectField">
          <label htmlFor="goal">Project Goal</label>
          <textarea
            id="Goal"
            name="Goal"
            value={newProject.Goal}
            onChange={handleFormChange}
            placeholder="What were you trying to achieve?"
            rows="3"
          />
        </div>

        <div className="EditProjectField">
          <label htmlFor="outcomes">Outcomes</label>
          <textarea
            id="Outcomes"
            name="Outcomes"
            value={newProject.Outcomes}
            onChange={handleFormChange}
            placeholder="What did you accomplish or learn?"
            rows="3"
          />
        </div>

        <div className="EditProjectField">
          <label htmlFor="git">GitHub URL</label>
          <input
            id="github"
            type="url"
            name="github"
            value={newProject.github}
            onChange={handleFormChange}
            placeholder="https://github.com/username/project"
          />
        </div>

        <div className="EditProjectActions">
          <button className="EditProjectSubmit" type="submit">
            Save Changes
          </button>

          <Link className="EditProjectCancel" to="/">
            Cancel
          </Link>
        </div>
      </form>
    </main>
  )
}

export default EditProject
