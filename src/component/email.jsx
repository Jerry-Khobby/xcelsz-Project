import React, { useState } from 'react';
import './email.css';
import image from "../asset/Finish line-cuate 1.png"

const EmailSection = () => {
  const [email, setEmail] = useState('');
  const [submittedEmails, setSubmittedEmails] = useState([]);
  const [showAlert, setShowAlert] = useState(false);

  const handleInputChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Update the array with the new email
    setSubmittedEmails((prevEmails) => [...prevEmails, email]);
    // Reset the email input field
    setEmail('');
    // Show the alert
    setShowAlert(true);
    // Hide the alert after 3 seconds (adjust as needed)
    setTimeout(() => {
      setShowAlert(false);
    }, 3000);
  };

  return (
    <div className="email_section_master">
      <div className="email_section_submaster">
        <div className="email_section_text_input">
          <div className="email_section_text_only">
            <p className="insights_text">Get our latest insights delivered</p>
            <p className="inbox_text">straight to your inbox</p>
          </div>
          <div className="subscribe_container">
            <div className="black_background"></div>
            <div className="email_input_button">
              <input
                type="email"
                className="email_input"
                placeholder="Enter your email address"
                value={email}
                onChange={handleInputChange}
              />
              <div>
                <button className="subscribe_button" onClick={handleSubmit}>
                  Subscribe Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Display the submitted emails */}
      {submittedEmails.length > 0 && (
        <div className={`custom-alert ${showAlert ? 'show' : ''}`}>
          <div className="alert_master">
            <div className="images">
                <img src={image} alt="an image" height={100} width={100}/>
            </div>
            <div className="texts_alert">
                <h5>Thanks for Subscribing!</h5>
                <p>Be the first to receive updates and insights</p>
                <p>right in your inbox</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EmailSection;
