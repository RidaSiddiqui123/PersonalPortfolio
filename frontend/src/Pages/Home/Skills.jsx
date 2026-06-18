
import data from "../../data/data.json";

import image from "../../images/profilePicture2.jpg";


import "../../cssFiles/modern-normalize.css"
import "../../cssFiles/style.css"
import "../../cssFiles/skills.css"
import "../../cssFiles/utils.css"

export default function Skills() {
    return (
        <section id="skillsSection" className="container-skills">
            <section className="skills-section">
                <div className="skills-container">
                        <h1 className="skills-section-heading">Skills and Background</h1>
                </div>
                <div className="skills-section-content-container">
                    <div className="skills-section-img">
                        <img src={image}></img>
                    </div>
                    <div className="skills-section-content">
                        <div className="skills-box-container">
                            {data.skills.map((item, index) => (
                                <div key={index} className="skills-section-card">
                                    <h3 className="skill-title">{item}</h3>
                                </div>
                            ))}
                            
                        </div>
                        <p className="background-description">
                            I obtained my <strong><mark style={{backgroundColor: '#fac089', color: '#0a3c3d'}}>Bachelor's in Computer Science</mark></strong> from California State Polytechnic University, Pomona. 
                            I’m a passionate software developer working across web development, UI/UX, and graphic design, with a focus on building user-friendly and visually engaging experiences. 

                            <br></br><br></br>
                            My interest in this field originally began in middle school when I built my first HTML website. 
                            Ever since then, I’ve continued exploring different areas of technology and growing my skills, bringing me to where I am today!

                          
                        </p>
                        
                    </div>
                </div>
                

            </section>
        </section>
    )
    
}