import { useState } from 'react';
import './Contact.css';
 
const FIELDS = [
  { name: 'name', label: 'name', type: 'text' },
  { name: 'email', label: 'email', type: 'email' },
  { name: 'message', label: 'message', type: 'textarea' },
];


function Contact(){
    const [formData,setFormData] = useState({name: '', email: '', message: ''});
    const [submitted, setSubmitted] = useState(false); 

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    };

    const encode = (data) => {
        return Object.keys(data).map((key) => encodeURIComponent(key)+ '=' + encodeURIComponent(data[key])).join('&');
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            await fetch('/',{
                method: 'POST',
                headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                body: encode({'form-name': 'contact', ...formData}),
            });
            setSubmitted(true); 
            setFormData({name: '', email: '', message: ''});
        } catch (error) {
            console.error('Form submission error:', error);
        }

    };

    return (
        <section className = "contact-hero">
            <div className = "contact-sign-wrap">
                <div className = "sign-string"></div>
                <div className = "contact-sign">
                    <span> Let's Connect!</span>
                </div>
            </div>
            <div className = "contact-body">
                <form 
                name = "contact" 
                className = "contact-form-card" 
                onSubmit = {handleSubmit}
                >
                    <h3> send me a message </h3>
                    {submitted ? ( <p className = "form-success"> Thanks for reaching out! I will get back to you soon ♡ </p>)
                     : (
                        <>
                        {FIELDS.map((field) =>(
                            <div className = "form-group" key = {field.name}>
                                <label htmlFor = {field.name}>{field.label}</label>
                                {field.type === 'textarea' ? (
                                    <textarea
                                    id = {field.name}
                                    name = {field.name}
                                    rows = "3"
                                    value = {formData[field.name]}
                                    placeholder = "what's on your mind?"
                                    onChange = {handleChange}
                                    required
                                    />
                                ) : (
                                    <input
                                    type = {field.type}
                                    id = {field.name}
                                    name = {field.name}
                                    value = {formData[field.name]}
                                    onChange = {handleChange}
                                    required
                                    />
                                )}
                            </div>
                        ))}
                        <button type = "submit" className = "send-btn"> send ♡ </button>
                        </>
                    )}
                </form>
                <div className="contact-links">
          <a href="https://github.com/naviniii" target="_blank" rel="noopener noreferrer" className="contact-link-row">
            <i className="fa-brands fa-github"></i>
            <div>
              <span className="link-label">GitHub</span>
              <span className="link-sub">https://github.com/naviniii</span>
            </div>
          </a>

          <a href="https://www.linkedin.com/in/navini-ariyasinghe-173349223/" target="_blank" rel="noopener noreferrer" className="contact-link-row">
            <i className="fa-brands fa-linkedin"></i>
            <div>
              <span className="link-label">Linkedin</span>
              <span className="link-sub">connect with me :)</span>
            </div>
          </a>

          <a href="mailto:navini.ariyasinghe@gmail.com" className="contact-link-row">
            <i className="fa-solid fa-envelope"></i>
            <div>
              <span className="link-label">Email</span>
              <span className="link-sub">navini.ariyasinghe@gmail.com</span>
            </div>
          </a>

          <a href="/navini-cv.pdf" target="_blank" rel="noopener noreferrer" className="contact-link-row">
            <i className="fa-solid fa-file"></i>
            <div>
              <span className="link-label">CV</span>
              <span className="link-sub">View or download</span>
            </div>
          </a>
          </div>
            </div>
        </section>

    );

}

export default Contact;