
import FrontToBack from "../BackendCommunication/ProjectsBackend"
import { useState } from "react"
import { useNavigate, Link } from "react-router-dom"
import "./NewProject.css"

const NewProject = () => {
  const navigate = useNavigate()

  const [newProject, setNewProject] = useState({
    Title: "",
    body: "",
    Goal: "",
    Outcomes: "",
    card_blurb: "",
    github: ""
  })

  const handleSubmit = async (event) => {
    event.preventDefault()
    await FrontToBack.create(newProject)
    navigate("/")
  }

  const handleFormChange = (event) => {
    const { name, value } = event.target
    setNewProject(prev => ({ ...prev, [name]: value }))
  }

  return (
    <main className="NewProject">
      <header className="NewProjectHeader">
        <h1 className="NewProjectTitle">Create a Project</h1>
        <p>Share something you've built, learned, or accomplished.</p>
      </header>

      <form className="NewProjectForm" onSubmit={handleSubmit}>
        <div className="NewProjectField">
          <label htmlFor="new-title">Project Title</label>
          <input
            id="new-title"
            type="text"
            name="Title"
            value={newProject.Title}
            onChange={handleFormChange}
            placeholder="Enter your project title"
            required
          />
        </div>

        <div className="NewProjectField">
          <label htmlFor="new-card-blurb">Short Description</label>
          <textarea
            id="new-card-blurb"
            name="card_blurb"
            value={newProject.card_blurb}
            onChange={handleFormChange}
            placeholder="A short summary displayed on your project card"
            rows="2"
          />
        </div>

        <div className="NewProjectField">
          <label htmlFor="new-body">Project Description</label>
          <textarea
            id="new-body"
            name="body"
            value={newProject.body}
            onChange={handleFormChange}
            placeholder="Describe your project, the technologies used, and how it works"
            rows="5"
          />
        </div>

        <div className="NewProjectField">
          <label htmlFor="new-goal">Project Goal</label>
          <textarea
            id="new-goal"
            name="Goal"
            value={newProject.Goal}
            onChange={handleFormChange}
            placeholder="What were you trying to achieve?"
            rows="3"
          />
        </div>

        <div className="NewProjectField">
          <label htmlFor="new-outcomes">Outcomes</label>
          <textarea
            id="new-outcomes"
            name="Outcomes"
            value={newProject.Outcomes}
            onChange={handleFormChange}
            placeholder="What did you accomplish or learn?"
            rows="3"
          />
        </div>

        <div className="NewProjectField">
          <label htmlFor="new-git">GitHub URL</label>
          <input
            id="new-git"
            type="url"
            name="github"
            value={newProject.github}
            onChange={handleFormChange}
            placeholder="https://github.com/username/project"
          />
        </div>

        <div className="NewProjectActions">
          <button className="NewProjectSubmit" type="submit">
            Create Project
          </button>

          <Link className="NewProjectCancel" to="/">
            Cancel
          </Link>
        </div>
      </form>
    </main>
  )
}

export default NewProject
