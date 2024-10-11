import Lottie from 'lottie-react';
import animationData from '../../images/emailAnimation.json';

export default function ContactMe() {
    return (
        <section id="contactSection" className="contact-section">
            <div className="contact-heading-container">
                <h1 className="contact-section-heading">Connect with Me</h1>
            </div>
            
            <form className="contact-form-container">
                
                <div className="container">
                    <label htmlFor="first-name"
                    className="contact-label">
                        <span className="text-md">First Name</span>
                        <input 
                            type="text"
                            className="contact-input text-md"
                            name="first-name"
                            id="first-name"
                            placeholder="First Name"
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
                            placeholder="Last Name"
                            required/>
                    </label>
                    <label htmlFor="email"
                    className="contact-label">
                        <span className="text-md">Email</span>
                        <input 
                            type="email"
                            className="contact-input text-md"
                            name="email"
                            id="email"
                            placeholder="Email"
                            required/>
                    </label>
                    <label htmlFor="message"
                    className="contact-label">
                        <span className="text-md">Message</span>
                        <textarea
                            className="contact-input text-md"
                            id="message"
                            rows="8"
                            placeholder="Type your message..."
                            required/>
                    </label>
                    <div>
                        <button className="btn contact-label-btn">Submit</button>
                    </div>

                </div>
                
            </form>
        </section>
    )
}