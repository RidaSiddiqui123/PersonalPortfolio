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

    const handleAnimationComplete = () => {
        setIsAnimationTime(false);
        setShowPlaceholder(true);

        console.log("animation complete")
        setTimeout(() => {
            //After 1 second the form will come back
            setShowPlaceholder(false);
        }, 1000); 
    }

    // Validation Starts //
    
    let isFormValid = false;

    const validateFirstName = () => {
        const first_name = document.getElementById("first-name");
        first_name.nextElementSibling.classList.add("hidden");

        if (!first_name.value) {
            first_name.nextElementSibling.classList.remove("hidden");
            isFormValid = false;
        }
        else isFormValid = true;
    };

    const validateLastName = () => {
        const last_name = document.getElementById("last-name");
        last_name.nextElementSibling.classList.add("hidden");

        if (!last_name.value) {
            last_name.nextElementSibling.classList.remove("hidden");
            isFormValid = false;
        }
        else isFormValid = true;
    };

    const isValidEmail = (email) => {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    };

    const validateEmail = () => {
        const email = document.getElementById("email");
        email.nextElementSibling.classList.add("hidden");

        if (!isValidEmail(email.value)) {
            email.nextElementSibling.classList.remove("hidden");
            isFormValid = false;
        }
        else isFormValid = true;
    };

    const validateMessage = () => {
        const message = document.getElementById("message");
        message.nextElementSibling.classList.add("hidden");

        if (!message.value) {
            message.nextElementSibling.classList.remove("hidden");
            isFormValid = false;
        }
        else isFormValid = true;
    };
    
    // Validation Ends //
    
    const handleSubmit = (e) => {
        const form = document.getElementById("form");
        e.preventDefault();
        validateFirstName();
        validateLastName();
        validateEmail();
        validateMessage();

       
        if (isFormValid) {
            // "https://ridasiddiquipersonalportfoliocontact.onrender.com"
            let xhr = new XMLHttpRequest();
            const baseURL = "https://ridasiddiquipersonalportfolio-backend.onrender.com"; 
            xhr.open("POST", `${baseURL}/contact.php`, true);
            xhr.onload = () => {
                if(xhr.readyState == 4 && xhr.status == 200) {
                            let response = xhr.responseText;
                            console.log(response);
                        }
                        else {
                            console.log("Error: " + xhr.status);
                        }
            };

            let formData =  new FormData(form);

            for (let [key, value] of formData.entries()) {
                console.log(key, value);
            }
            xhr.send(formData);

            console.log("submitted");
            setIsAnimationTime(true);
        }
    };

    

    return (
        <section id="contactSection" className="container-contact">
            <section className="contact-section">
                <div className="contact-heading-container">
                    <h1 className="contact-section-heading">Chat with Me</h1>
                </div>
                <div className="contact">
                    <form id="form" className="contact-form-container" onSubmit = {handleSubmit} noValidate>
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
                                                onChange={validateFirstName}
                                                required
                                                //placeholder="First Name"
                                                />
                                            <div className="error-hint hidden">*First name is required.</div>
                                        </label>
                                        <label htmlFor="last-name"
                                        className="contact-label">
                                            <span className="text-md">Last Name</span>
                                            <input 
                                                type="text"
                                                className="contact-input text-md"
                                                name="last-name"
                                                id="last-name"
                                                onChange={validateLastName}
                                                required
                                                //placeholder="Last Name"
                                                />
                                            <div className="error-hint hidden">*Last name is required.</div>
                                        </label>
                                        <label htmlFor="email"
                                        className="contact-label">
                                            <span className="text-md">Email Address</span>
                                            <input 
                                                type="email"
                                                className="contact-input text-md"
                                                name="email"
                                                id="email"
                                                onChange={validateEmail}
                                                required
                                                //placeholder="@gmail.com"
                                               />
                                            <div className="error-hint hidden">*Email is invalid.</div>
                                        </label>
                                        <label htmlFor="message"
                                        className="contact-label">
                                            <span className="text-md">Message</span>
                                            <textarea
                                                className="contact-input text-md"
                                                name="message"
                                                id="message"
                                                rows="8"
                                                onChange={validateMessage}
                                                required
                                                //placeholder="Type your message..."
                                                />
                                            <div className="error-hint hidden">*Message is required.</div>
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