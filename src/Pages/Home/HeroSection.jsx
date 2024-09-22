export default function HeroSection() {
    return (
        <section id="heroSection" className="hero-section">
            
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
            <div className="hero-section-img">
                <img src="https://github.com/Ade-mir/react-js-personal-portfolio/blob/main/public/img/hero_img.png?raw=true"></img>
            </div>
            
            
        </section>
        
        );
    
    
}