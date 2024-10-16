

import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailSharpIcon from '@mui/icons-material/MailSharp';
import "../../modern-normalize.css";
import "../../style.css";
import "../../herosection.css";
import "../../utils.css";

import image from "../../images/robot.png";
import pdf from "../../files/resume.pdf"

export default function HeroSection() {
    return (
        <article className="container">
            <section id="heroSection" className="hero-section">
            
            <div className="heroo">

                    <div className="hero-section-img">
                        <img src={image}></img>
                    </div>
                    <div className="hero-section-content">
                        <p className="section-title">Hello, I'm </p> 
                        <h1 className="hero-section-title">
                            <span className="hero-section-title-color">Rida Siddiqui</span>{" "}
                        </h1>
                        
                    
                        <div className="links-container">
                            <a href="https://www.linkedin.com/in/rida-siddiqui-cs/" className="icon-link" target='_blank'>
                                <GitHubIcon className="github-custom-icon"/>
                                </a>
                            <a href="https://www.linkedin.com/in/rida-siddiqui-cs/" className="icon-link" target='_blank'>
                                <LinkedInIcon className="custom-icon"/>
                            </a>
                            <a href="mailto:ridasiddiquicpp@gmail.com" className="icon-link" target='_blank'>
                                <MailSharpIcon className="custom-icon"/>
                            </a>
                        </div>
                        <a href={pdf} download="Rida Siddiqui Resume">
                            <button className="btn btn-resume" data-download="">Download Resume/CV</button>
                        </a>

                        <p className="hero-section-description">
                        I'm excited to apply my skills to real-world projects. 
                        Checkout my portfolio to explore my work and connect with me to collaborate and make an impact!
                    
                        </p>
                    </div>
                    
                    
                    
                    
            </div>
            
            
            
        </section>
        </article>
        
        
        );
    
    
}