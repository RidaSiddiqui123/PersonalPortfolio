import React from 'react';
import Lottie from 'lottie-react';
import animationData from '../../../images/hourglassAnimation.json';
import { useState, useEffect } from 'react';
import { useParams} from 'react-router-dom';
import { useLocation} from 'react-router-dom';
import projectDetails from "../../../data/projectDetails.json";
import data from "../../../data/data.json";

import LaunchIcon from '@mui/icons-material/Launch';

import "../../../cssFiles/modern-normalize.css"
import "../../../cssFiles/style.css"
import "../../../cssFiles/projectPage.css"
import "../../../cssFiles/utils.css"

export default function projectpage() {

    const {id} = useParams();
    const [projectData, setProjectData] = useState(0);

    const location = useLocation();

    useEffect(() => {
        // Disable scroll restoration on page load or navigation
        if ('scrollRestoration' in window.history) {
          window.history.scrollRestoration = 'manual';  // Disable restoration
        }
        window.scrollTo(0,0)
    }, []);

    useEffect(()=> {
        const storeId = localStorage.getItem("lastVisitedProjectId");
        const project = data.projects.find(item => item.id === parseInt(storeId));
        setProjectData(project);
    }, []);

    return (
        <section id="projectPage" className="container-projectPage">
            <section className="projectPage">
                <div className="page-container">
                    <h1 className="section-heading">{projectData.projectTitle}</h1>
                </div>
                <div className="project-info-container">
                        {projectDetails.projects
                            .filter((project) => project.id === id)
                            .map((project, index) => (
                            <div key={index} className="project-info-content">
                                <p className="project-pitch">{project.pitch}</p>
                                <div className="project-website-content">
                                    
                                    
                                    <div className="project-link-container">
                                        {project.link ? (
                                            <a href={project.link} className="project-icon-link" target='_blank'>
                                                <h3 className="project-link-title">Explore Site</h3>
                                                <LaunchIcon className="launch-icon"/>
                                            </a>
                                        ) : (
                                            <div className="in-progress-label">
                                                <Lottie className="in-progress-icon"
                                                    animationData={animationData}
                                                    loop={true}
                                                    
                                                />
                                                <h3 className="project-link-title">Deployment in Progress</h3>    
                                            </div> 
                                        )
                                        }
                                        
                                    </div>
                                    <div className="project-img">
                                        <img src={project.image_src}></img>
                                    </div>
                                </div>
                                <div className="project-details-content">
                                    <div className="small-info-container">
                                        <div className="technology-section">
                                            <h3 className="technology-title">Technology</h3>
                                            <ul className="technology-card-container">
                                                {project.technologies.map((item, index) => (
                                                    <li key={index} className="technology-card">{item}</li>
                                                    
                                                    
                                            
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="detailed-info-container">
                                        {project.descriptions.map((projectDescription, index) => (
                                            <div key={index} className="descriptions-section-card">
                                                <h1 className="project-description-title">{projectDescription.title}</h1>
                                                <p className="project-description"
                                                dangerouslySetInnerHTML={{ __html: projectDescription.paragraph }}
                                                ></p>
                                            </div>

                                        ))}
                                    </div>

                                </div>
                            </div>

                        ))}
                </div>
            
            </section>
        </section>
    )
}
