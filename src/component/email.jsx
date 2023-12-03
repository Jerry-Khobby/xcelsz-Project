import React from 'react';
import "./email.css";

const EmailSection = () => {
    return ( 
        <div className="email_section_master">
            <div className='email_section_submaster'>
                <div className="email_section_text_input">
                    <div className='email_section_text_only'>
                        <p className="insights_text">Get our latest insights delivered</p>
                        <p className="inbox_text">straight to your inbox</p>
                    </div>
                    <div className="subscribe_container">
                    <div className="black_background"></div>
                    <div className="email_input_button">
                    <input type="email" className="email_input"
                    placeholder='Enter your email address'
                    />
                    <div>
                    <button className="subscribe_button">Subscribe Now</button>
                    </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EmailSection;
