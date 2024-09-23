import React from "react";
import "./contactform.scss";
import Button from "../button/Button";

const ContactForm = () => {
  return (
    <div class="form-container">
      <h2 className="heading">We'd Love To Hear From You</h2>
      <p>
        Interested in partnering with a leading healthcare innovator? Join the
        AxonCare network.
      </p>
      <form class="contact-form">
        <div class="form-group">
          <input type="text" id="name" required />
          <label for="name">Name</label>
        </div>
        <div class="form-group">
          <input type="text" id="phone" required />
          <label for="phone">Phone</label>
        </div>
        <div class="form-group">
          <input type="email" id="email" required />
          <label for="email">Email</label>
        </div>
        <div class="form-group">
          <textarea id="message" rows="4" required></textarea>
          <label for="message">Message</label>
        </div>
        <div className="button-box">
          <Button onClick={() => alert("Button clicked!")} text="Submit" />
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
