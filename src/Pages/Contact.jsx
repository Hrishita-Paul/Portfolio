import { useState } from "react";
import "./Contact.css";

const Contact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [linkedIn, setLinkedIn] = useState("");
    const [success,setSuccess]=useState(null);
    const [alert, setAlert] = useState(null);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        if (name === "name") {
            setName(value);
        } else if (name === "email") {
            setEmail(value);
        } else if (name === "message") {
            setMessage(value);
        } else if (name === "linkedIn") {
            setLinkedIn(value);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:5000/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name, email, linkedIn, message }),
            });

            if (response.ok) {
                setSuccess('Your message was sent successfully!');
                setName("");
                setEmail("");
                setLinkedIn("");
                setMessage("");
            } else {
                throw new Error('Failed to send message');
            }
        } catch (error) {
            setAlert('Error: Failed to send message');
        }

        // Clear alert after 5 seconds
        setTimeout(() => {
            setAlert(null);
            setSuccess(null);
        }, 4000);
    };

    return (
        <div className="contact-form">
            {success && <div className="success">{success}</div>}
            {alert && <div className="alert">{alert}</div>}
            <h2 className="contact-title">Contact Me</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    className="name"
                    placeholder="Your Name"
                    value={name}
                    onChange={handleInputChange}
                />
                <input
                    type="email"
                    name="email"
                    className="email"
                    placeholder="Your Email"
                    value={email}
                    onChange={handleInputChange}
                />
                <input
                    type="text"
                    name="linkedIn"
                    className="linkedIn"
                    placeholder="Your LinkedIn URL"
                    value={linkedIn}
                    onChange={handleInputChange}
                />
                <textarea
                    name="message"
                    className="message"
                    placeholder="Please leave a message for me"
                    value={message}
                    onChange={handleInputChange}
                />
                <button type="submit" className="submit">Send</button>
            </form>
        </div>
    );
};

export default Contact;
