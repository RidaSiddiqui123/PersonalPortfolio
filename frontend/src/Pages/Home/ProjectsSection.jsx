
import data from "../../data/data.json";
import { useState} from "react";
import EastIcon from '@mui/icons-material/East';
import ArrowIcon from '@mui/icons-material/ArrowCircleRight';
import { useNavigate } from 'react-router-dom';



import "../../cssFiles/modern-normalize.css"
import "../../cssFiles/style.css"
import "../../cssFiles/projects-section.css"
import "../../cssFiles/utils.css"

export default function ProjectsSection() {
    const [isHovered, setIsHovered] = useState(null);

    const navigate = useNavigate();

    const routeToProjectPage = (id) => {
        localStorage.setItem("lastVisitedProjectId", id);
        navigate(`/project/${id}`);
    }


    return (
        <section id="projectsSection" className="container-projects">
            <section className="projects-section">
                    <div className="projects-container">
                        <h1 className="projects-section-heading">My Projects</h1>
                    </div>
                    <div className="projects-section-container">
                        {data.projects.map((item, index) => (
                            <div key={index} className={`projects-section-card ${item.id % 2 === 1 ? "default" : "reverse"}`}>
                                <div className="projects-section-card-content">
                                    <div className="projects-section-skills-container">
                                        {item.skills.map((skill, index) => (
                                            <div key={index} className="projects-section-skills-card">
                                            <h3 className={"project-section-skill-title"}>{skill}</h3>
                                            </div>        
                                        ))}
                                    </div>
                                    <h3 className="position-title">{item.positionTitle}</h3>
                                    <h2 className="projects-section-title">{item.projectTitle}</h2>
                                    
                                    <div className="projects-section-img-active">
                                        <img src = {item.image_src} onClick={() => routeToProjectPage(item.id)}></img>
                                    
                                    </div>
                                    
                                    <p className="projects-section-description">{item.description}</p>
                                    <button className="btn btn-viewProject" onClick={() => routeToProjectPage(item.id)}>Explore Project</button>
                                </div>
                                <div className="projects-section-img">
                                    <img src = {item.image_src} onClick={() => routeToProjectPage(item.id)}></img>
                                    
                                </div>


                                
                            </div>
                        ))}

                    </div>
            </section>
       </section>
    )
}