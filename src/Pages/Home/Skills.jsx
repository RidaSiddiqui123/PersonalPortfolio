
import data from "../../data/data.json";

import image from "./me.PNG";

export default function Skills() {
    return (
        <section id="skills" className="skills-section">
            
            <div className="skills-container">
                    <p className="section-title">My Skills</p> 
                    <h1 className="skills-section-heading">My Expertise</h1>
            </div>
            <div className="skills-section-container">
                {data.skills.map((item, index) => (
                    <div key={index} className="skills-section-card">
                        <h3 className="skill-title">{item}</h3>
                    </div>
                ))}

            </div>
            

        </section>
    )
    
}