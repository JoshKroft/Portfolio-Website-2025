import './Contact.css';
import React from 'react';
import Footer from '../../components/Footer';

function Contact() {
    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value.trim();
        const email = form.email.value.trim();
        const message = form.message.value.trim();

        const subject = `Portfolio message from ${name || 'Visitor'}`;
        const body = `Name: ${name}%0D%0AEmail: ${email}%0D%0A%0D%0A${message}`;

        // Open user's email client with prefilled email to littlepostage@gmail.com
        window.location.href = `mailto:littlepostage@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`)}`;
    };

    return(
        <div className="contact-container">
            <div className="contact-title">
                <h1>Woohoo Email!!</h1>
            </div>
            <div className="contact-body">
                <p>Currently looking for co-op/internship opportunities to gain practical experience in as well as new projects!</p>
                <p>So please keep me in touch if any prospects rise up in the future! You can contact me anytime.</p>
            </div>
            <div className="contact-details">
                <div className="contact-email">
                    <p><strong>littlepostage@gmail.com</strong></p>
                </div>
                <div className="contact-phone">
                    <p><strong>(417) 771 - 4040</strong></p>
                </div>
                <div className="contact-location">
                    <p><strong>Springfield, MO</strong></p>
                </div>
            </div>

            <form onSubmit={handleSubmit} className="contact-form">
                <label htmlFor="name">Your Name:</label>
                <input id="name" placeholder="Enter Your Name" type="text" name="name" required />
                <label htmlFor="email">Your Email:</label>
                <input id="email" placeholder="Enter Your Email" type="email" name="email" required />
                <label htmlFor="message">Your Message Here:</label>
                <textarea id="message" placeholder="message" rows="8" name="message" required></textarea>
                <button type="submit" className="contact-submit">Send Message</button>
            </form>
        </div>
    )
}

export default Contact