import './Contact.css';

function Contact() {
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
                <form className="contact-form">
                    <label for>Your Name</label>
                    <input placeholder="Enter Your Name" type="text" name="name" required></input>
                    <label for>Your Email</label>
                    <input placeholder="Enter Your Email" type="email" name="email" required></input>
                    <label for>Your Message Here</label>
                    <textarea placeholder="message" rows="8" name="message" required></textarea>
                    <button type="submit" className="contact-submit">Send Message</button>
                </form>
            </div>
        </div>
    )
}

export default Contact