
import data from "../../data/data.json";

import image from "../../images/grad-pic.jpg";

export default function Skills() {
    return (
        <section id="skillsSection" className="skills-section">
            
            <div className="skills-container">
                    <h1 className="skills-section-heading">Skills and Background</h1>
            </div>
            <div className="skills-section-content-container">
                <div className="skills-section-content">
                    <div className="skills-box-container">
                        {data.skills.map((item, index) => (
                            <div key={index} className="skills-section-card">
                                <h3 className="skill-title">{item}</h3>
                            </div>
                        ))}
                        
                    </div>
                    <p className="background-description">
                        I recently graduated from <strong><mark style={{backgroundColor: '#fac089', color: '#0a3c3d'}}>California State Polytechnic University Pomona</mark></strong> with 
                        a Bachelor of Science in Computer Science.
                        I'm a passionate software developer with a love for exploring and creating user-friendly content for the web. 
                        My goal is to combine my programming knowledge with my creative design skills to craft a beautiful but functional website.
                        My interest in this field originally started in middle school when I was introduced to building a simple HTML website. 
                        Ever since then I've been poking me head in all sorts of technologies, ulitmately bringing my back to where I started—websites!

                    </p>
                    <p className="background-description">
                        I also have a keen interest in stop-motion and hand-drawn animation, which I hope to incorporate into my future work. 

                    </p>
                </div>
                <div className="skills-section-img">
                    <img src={image}></img>
                </div>
            </div>
            

        </section>
    )
    
}