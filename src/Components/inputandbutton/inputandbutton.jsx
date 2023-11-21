import React, { useState } from "react";
import styles from "./inputandbutton.module.css";

function InputButton() {
  // Variables
  const [email, setEmail] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(true);

  // Function to Handle Button Click
  const handleClick = () => {
    // Check if the email looks like an email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setIsValidEmail(emailRegex.test(email));
  };

  const handleInputChange = (event) => {
    setEmail(event.target.value);
    setIsValidEmail(true);
  };

  return (
    <>
      <div className={styles.everything}>
        <form action="#" className="email-form" noValidate>
          <input
            type="email"
            required
            placeholder="Your email address..."
            className={`${styles.valid} ${
              isValidEmail ? styles.valid : styles.invalid
            }`}
            onChange={handleInputChange}
          />

          {/* Error message shown when the email is not valid */}
          {!isValidEmail && (
            <p className={styles.errormessage}>Please provide a valid email </p>
          )}
          <button className={styles.button} onClick={handleClick}>
            Notify Me
          </button>
        </form>
      </div>
    </>
  );
}

export default InputButton;
