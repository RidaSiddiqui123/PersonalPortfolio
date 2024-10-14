import Lottie from 'lottie-react';
import animationData from '../../images/emailAnimation.json';
import { useState} from 'react';
export default function ContactMe() {


    const [isAnimationTime, setIsAnimationTime] = useState(false);
    const [showPlaceholder, setShowPlaceholder] = useState(false);

    const handleClick = () => {
        
    }

    const handleAnimationComplete = () => {
        setIsAnimationTime(false);
        setShowPlaceholder(true);

        console.log("animation complete")
        setTimeout(() => {
            //After 1 second the form will come back
            setShowPlaceholder(false);
        }, 1000);
        
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("submitted");
        setIsAnimationTime(true);

        
    }

    return (
        <section id="contactSection" className="contact-section">
            <div className="contact-heading-container">
                <h1 className="contact-section-heading">Connect with Me</h1>
            </div>
            <div className="contact">
                <form className="contact-form-container" onSubmit = {handleSubmit}>
                    {isAnimationTime ? (
                        <div className="contact-animation-container">
                        <Lottie
                            animationData={animationData}
                            loop={false}
                            autoplay={true}
                            style={{height: '476.5px', width: '500px'}}
                            onComplete={handleAnimationComplete}
                        />                     
                    </div>
                    ) : (
                        <div>
                            {showPlaceholder ? (
                                <div
                                    style={{height: '476.5px', color: 'blue'}}>
                                    
                                </div>
                            ) : (
                                <div className="container">
                                    <label htmlFor="first-name"
                                    className="contact-label">
                                        <span className="text-md">First Name</span>
                                        <input 
                                            type="text"
                                            className="contact-input text-md"
                                            name="first-name"
                                            id="first-name"
                                            //placeholder="First Name"
                                            required/>
                                    </label>
                                    <label htmlFor="last-name"
                                    className="contact-label">
                                        <span className="text-md">Last Name</span>
                                        <input 
                                            type="text"
                                            className="contact-input text-md"
                                            name="last-name"
                                            id="last-name"
                                            //placeholder="Last Name"
                                            required/>
                                    </label>
                                    <label htmlFor="email"
                                    className="contact-label">
                                        <span className="text-md">Email Address</span>
                                        <input 
                                            type="email"
                                            className="contact-input text-md"
                                            name="email"
                                            id="email"
                                            //placeholder="@gmail.com"
                                            required/>
                                    </label>
                                    <label htmlFor="message"
                                    className="contact-label">
                                        <span className="text-md">Message</span>
                                        <textarea
                                            className="contact-input text-md"
                                            id="message"
                                            rows="8"
                                            //placeholder="Type your message..."
                                            required/>
                                    </label>
                                    <div>
                                        <button type="submit" className="btn contact-label-btn" >Submit</button>
                                    </div>
                                </div>
                            )}
                        </div>
                    
                    )}
                    
                    
                    
                </form>
                
            </div>
        </section>
    )
}