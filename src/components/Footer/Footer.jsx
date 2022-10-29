import React from "react";
import './Footer.css';

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-contents">
                <h1 className="logo">Library</h1>
                <div className="flex flex-column">
                    <h1 className="h5 red fw-600 mb-0 mt-0">Contact Us!</h1>
                    <div className="flex">
                        <p className="p2 fw-600 mb-10 mt-0 contact-details">Email:</p>
                        <p className="p2 mb-0 mt-0">Info@library.co.nz</p>
                    </div>
                    <div className="flex">
                        <p className="p2 fw-600 mb-10 mt-0 contact-details">Phone:</p>
                        <p className="p2 mb-0 mt-0">+64 04 123 4567</p>
                    </div>
                    <div className="flex">
                        <p className="p2 fw-600 mb-10 mt-0 contact-details">Address:</p>
                        <p className="p2 mb-0 mt-0">123 Main Road, Wellington</p>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Footer;