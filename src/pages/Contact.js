import React from "react";
import {
  FaGithub,
  FaFacebookMessenger,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
} from 'react-icons/fa'

const Contact = () => {
    return (
        <div className="contact-container" >
            <div className="contact">
                <div className="contact-social">
                    <a href="https://github.com/GBN6">
                        <FaGithub />
                    </a>
                    <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
                        <FaFacebookF />
                    </a>
                    <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
                        <FaFacebookMessenger/>
                    </a>
                    <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
                        <FaTwitter />
                    </a>
                    <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
                        <FaInstagram />
                    </a>
                </div>
                <div className="contact-info">
                    <p>FejkStore</p>
                    <p>Losowa Ulica 420, Wadowice Polska</p>
                </div>
            </div>
        </div>
    )
}

export default Contact;