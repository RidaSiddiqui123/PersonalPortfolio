
import data from "../../data/data.json";
import { useState} from "react";
import EastIcon from '@mui/icons-material/East';
import ArrowIcon from '@mui/icons-material/ArrowCircleRight';
import { useNavigate } from 'react-router-dom';

export default function ProjectsSection() {
    const [isHovered, setIsHovered] = useState(null);

    const navigate = useNavigate();

    const routeToProjectPage = (id) => {
        navigate(`/project/${id}`);
    }


    return (
       <section id="projectsSection" className="projects-section">
            <div className="projects-container">
                <h1 className="projects-section-heading">My Projects</h1>
            </div>
            <div className="projects-section-container">
                {data.projects.map((item, index) => (
                    <div key={index} className="projects-section-card">
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
                            
                            <p className="projects-section-description">{item.description}</p>
                            <button className="btn btn-viewProject" onClick={() => routeToProjectPage(item.id)}>View Project</button>
                        </div>
                        <div className="projects-section-img"
                            onMouseEnter={() => setIsHovered(index)}
                            onMouseLeave={() => setIsHovered(null)} 
                            >
                            <img src = {item.image_src}></img>
                            {isHovered === index && (
                                <div className="image-overlay">
                                    <a href="https://www.linkedin.com/in/rida-siddiqui-cs/" target='_blank'>
                                        
                                    </a>
                                    
                                </div>
                            )}
                              
                        </div>


                        
                    </div>
                ))}

            </div>
       </section>
    )
}