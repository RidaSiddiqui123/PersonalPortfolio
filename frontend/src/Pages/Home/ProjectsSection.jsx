
import data from "../../data/data.json";
import { useEffect, useState } from "react";
import EastIcon from '@mui/icons-material/East';
import ArrowIcon from '@mui/icons-material/ArrowCircleRight';
import { useNavigate } from 'react-router-dom';
import { useMediaQuery } from "../../useMediaQuery";

import "../../cssFiles/modern-normalize.css"
import "../../cssFiles/style.css"
import "../../cssFiles/projects-section.css"
import "../../cssFiles/utils.css"
import WebDevSection from "./WebDevSection"
import GraphicDesignSection from "./GraphicDesignSection"

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';



export default function ProjectsSection() {
    const [isHovered, setIsHovered] = useState(null);
    const [projectDisplay, setProjectDisplay] = useState(() => {
        return localStorage.getItem("projectDisplay") || "web dev";
    });
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const isMobile = useMediaQuery("(max-width: 768px)");
    const navigate = useNavigate();

    const routeToProjectPage = (id) => {
        navigate(`/project/${id}`);

    }

    const changeProjectDisplay = () => {
        if (projectDisplay != "graphic design") {
            setProjectDisplay("graphic design")
        }
        else setProjectDisplay("web dev")
    }

    useEffect(() => {
        localStorage.setItem("projectDisplay", projectDisplay);
    }, [projectDisplay]);




    return (
        <section id="projectsSection" className="container-projects">
            <section className="projects-section">
                <div className="projects-container">
                    <h1 className="projects-section-heading">My Projects</h1>
                    {isMobile ? (
                        <div className="dropdown">
                            <div className="dropdown-header" onClick={() => setDropdownOpen(!dropdownOpen)}>
                                <span>
                                    {projectDisplay === "web dev" ? "Web Development" : "Graphic Design"}</span>
                                <ExpandMoreIcon sx={{ backgroundColor: "transparent" }} />
                            </div>
                            {dropdownOpen && (
                                <div className="dropdown-list">
                                    <div className="dropdown-item" onClick={() => { setProjectDisplay("web dev"); setDropdownOpen(false) }} >Web Development</div>
                                    <div className="dropdown-item" onClick={() => { setProjectDisplay("graphic design"); setDropdownOpen(false) }} >Graphic Design</div>
                                </div>

                            )}
                        </div>
                    ) : (
                        <div className="display-button-container">
                            <button className={`btn-display ${projectDisplay === "web dev" ? "active" : ""}`} onClick={() => setProjectDisplay("web dev")}>Web Development</button>
                            <button className={`btn-display ${projectDisplay === "graphic design" ? "active" : ""}`} onClick={() => setProjectDisplay("graphic design")}>Graphic Design</button>
                        </div>)}
                </div>

                {projectDisplay == "web dev" ? (
                    <WebDevSection />
                ) : (
                    <GraphicDesignSection />
                )}

                {/* <div className="projects-section-container">
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

                    </div> */}
            </section>
        </section>
    )
}