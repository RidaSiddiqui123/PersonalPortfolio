import Lottie from 'lottie-react';
import animationData from '../../images/emailAnimation.json';
import { useState} from 'react';

import "../../cssFiles/modern-normalize.css"
import "../../cssFiles/style.css"
import "../../cssFiles/contact.css"
import "../../cssFiles/utils.css"

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
        const form = document.getElementById("form");
        e.preventDefault();
        console.log("submitted");
        setIsAnimationTime(true);

        // let xhr = new XMLHttpRequest();
        // xhr.open("POST", "/personalPortfolio/contact.php", true);
        // xhr.onload = () => {
        //     if(xhr.readyState == 4 && xhr.status == 200) {
        //         let response = xhr.response;
        //         console.log(response);
        //     }
            
        // }
        // let formData =  new FormData(form);
        // xhr.send(formData);
    }

    return (
        <section id="contactSection" className="container-contact">
            <section className="contact-section">
                <div className="contact-heading-container">
                    <h1 className="contact-section-heading">Chat with Me</h1>
                </div>
                <div className="contact">
                    <form id="form" className="contact-form-container" onSubmit = {handleSubmit}>
                        {isAnimationTime ? (
                            <div className="contact-animation-container">
                                <Lottie
                                    className="animation-style"
                                    animationData={animationData}
                                    loop={false}
                                    autoplay={true}
                                    onComplete={handleAnimationComplete}
                                />                     
                            </div>
                        ) : (
                            <div>
                                {showPlaceholder ? (
                                    <div className="placeholder-style">
                                    </div>
                                ) : (
                                    <div className="form-container">
                                        <label htmlFor="first-name "
                                        className="contact-label">
                                            <span className="text-md">First Name</span>
                                            <input 
                                                type="text"
                                                className="contact-input text-md"
                                                name="first-name"
                                                id="first-name"
                                                //placeholder="First Name"
                                                />
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
                                                //required
                                                />
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
                                               />
                                        </label>
                                        <label htmlFor="message"
                                        className="contact-label">
                                            <span className="text-md">Message</span>
                                            <textarea
                                                className="contact-input text-md"
                                                name="message"
                                                id="message"
                                                rows="8"
                                                //placeholder="Type your message..."
                                                />
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
        </section>
    )
}