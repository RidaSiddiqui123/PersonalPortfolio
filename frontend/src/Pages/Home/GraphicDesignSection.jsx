
import data from "../../data/data.json";
import { useState } from "react";
import EastIcon from '@mui/icons-material/East';
import ArrowIcon from '@mui/icons-material/ArrowCircleRight';
import { useNavigate, Link } from 'react-router-dom';



import "../../cssFiles/modern-normalize.css"
import "../../cssFiles/style.css"
import "../../cssFiles/projects-section.css"
import "../../cssFiles/utils.css"

export default function ProjectsSection() {
    const [isHovered, setIsHovered] = useState(null);

    // const navigate = useNavigate();

    // const routeToProjectPage = (id) => {
    //     navigate(`/graphic_design/${id}`);

    // }


    return (
        <div className="projects-section-container">
            {data.graphic_design_projects.map((item, index) => (
                <div key={index} className={`projects-section-card ${item.id % 2 === 1 ? "default" : "reverse"}`}>
                    <div className="projects-section-card-content">
                        <div className="projects-section-skills-container">
                            {item.skills.map((skill, index) => (
                                <div key={index} className="projects-section-skills-card">
                                    <h3 className={"project-section-skill-title"}>{skill}</h3>
                                </div>
                            ))}
                        </div>
                        <h3 className="position-title">{item.industry}</h3>
                        <h2 className="projects-section-title">{item.projectTitle}</h2>

                        <div className="projects-section-img-active">
                            <Link to={`/graphic_design/${item.id}`}>
                                <img className="preview-img-active" src={item.image_src}></img>
                            </Link>
                        </div>

                        <p className="projects-section-description">{item.description}</p>
                        {/* <button className="btn btn-viewProject " onClick={() => routeToProjectPage(item.id)}>Explore Project</button> */}
                        <Link to={`/graphic_design/${item.id}`} className="btn btn-viewProject" >Explore Project</Link>
                    </div>
                    <div className="projects-section-img">
                        <Link to={`/graphic_design/${item.id}`}>
                            <img className="preview-img" src={item.image_src}></img>
                        </Link>
                    </div>
                </div>
            ))}

        </div>

    )
}