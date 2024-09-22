
import data from "../../data/data.json";

export default function ProjectsSection() {
    return (
       <section id="projectSection" className="projects-section">
            <div className="projects-container">
                <p className="section-title">Recent Projects</p> 
                <h1 className="projects-section-heading">My Projects</h1>
            </div>
            <div className="projects-section-container">
                {data.projects.map((item, index) => (
                    <div key={index} className="projects-section-card">
                        <div className="projects-section-card-content">
                            <h3 className="position-title">{item.positionTitle}</h3>
                            <h2 className="projects-section-title">{item.projectTitle}</h2>
                            <div className="projects-section-skills-container">
                                {item.skills.map((skill, index) => (
                                    <div key={index} className="projects-section-skills-card">
                                    <h3 className={"project-section-skill-title"}>{skill}</h3>
                                    </div>        
                                ))}
                            </div>
                            <p className="projects-section-description">{item.description}</p>
                            <button>View Project</button>
                        </div>
                        <div className="projects-section-img">
                            <img src = {item.image_src}></img>
                        </div>


                        
                    </div>
                ))}

            </div>
       </section>
    )
}