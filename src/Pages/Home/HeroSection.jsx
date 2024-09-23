import image from "./image.PNG";
export default function HeroSection() {
    return (
        <section id="heroSection" className="hero-section">
            <div className="hero-section-img-box">
                <div className="name">
                    <span className="hero-section-name-1">RI</span>
                    <span className="hero-section-name-2">DA</span>
                  
                </div>
                
                
            </div>
            <div className="hero-section-content-box">
                <div className="hero-section-content">
                    <p className="section-title">Hello, I'm </p> 
                    <h1 className="hero-section-title">
                        <span className="hero-section-title-color">Rida</span>{" "}
                        <br />
                        Siddiqui
                    </h1>
                    <p className="hero-section-description">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit.       
                        <br/> Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem labore accusantium, eos porro odio suscipit.

                    </p>
                </div>
                <button className="btn btn-resume">Download Resume/CV</button>
            </div> 
        
            
            
        </section>
        
        );
    
    
}