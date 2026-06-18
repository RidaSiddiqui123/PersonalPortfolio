import React from 'react';
import Lottie from 'lottie-react';
import animationData from '../../../images/hourglassAnimation.json';
import { useState, useEffect } from 'react';
import { useParams} from 'react-router-dom';
import { useLocation} from 'react-router-dom';
import graphicDesignDetails from "../../../data/graphicDesignDetails.json";
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
        const project = data.graphic_design_projects.find(item => item.id === parseInt(id));
        setProjectData(project);
    }, [id]);

    return (
        <section id="projectPage" className="container-projectPage">
            <section className="projectPage">
                <div className="page-container">
                    <h1 className="section-heading">{projectData.projectTitle}</h1>
                </div>
                <div className="project-info-container">
                        {graphicDesignDetails.projects
                            .filter((project) => project.id === id)
                            .map((project, index) => (
                            <div key={index} className="project-info-content">
                                <p className="project-pitch">{project.pitch}</p>
                                <div className="project-website-content">
                                    <div className="project-img">
                                        <img src={project.image_src}></img>
                                    </div>
                                </div>
                                <div className="project-details-content">
                                    <div className="small-info-container">
                                        <div className="technology-section">
                                            <h3 className="technology-title">Services</h3>
                                            <ul className="technology-card-container">
                                                {project.services.map((item, index) => (
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
