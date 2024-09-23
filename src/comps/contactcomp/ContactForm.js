import React, { useState } from "react";
import "./contactform.scss";
import Button from "../button/Button";
import toast, { Toaster } from "react-hot-toast";

const ContactForm = ({ heading, description, reusing,close }) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    const formData = new URLSearchParams();
    formData.append("Name", name);
    formData.append("Phone", phone);
    formData.append("Email", email);
    formData.append("Message", message);
    fetch(
      "https://script.google.com/macros/s/AKfycbx5Ki3brmFb9-9gadpbz-ehV6ud3NYyhHO8Eg1KUMNutTSUdpNg5k76lkwPzftzOT4LQQ/exec",
      {
        method: "POST",
        body: formData,
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.status === "success") {
          toast.success("Data submitted successfully!");
          setLoading(false);
          setName("");
          setPhone("");
          setEmail("");
          setMessage("");
          setTimeout(() => {
            close();
          }, 1000);
        } else {
          throw new Error("Failed to submit the form.");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        toast.error("An error occurred while submitting the form.");
        setLoading(false);
      });
  };

  return (
    <>
      <div
        class="form-container"
        style={{
          boxShadow: reusing ? "0px 0px 0px" : "",
          padding: reusing ? "0px" : "",
        }}
      >
        <h2 className="heading contact-form-heading">{heading}</h2>
        <p className="contact-form-description">{description}</p>
        <form class="contact-form" onSubmit={handleSubmit}>
          <div class="form-group">
            <input
              type="text"
              id="name"
              required
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
            <label for="name">Name *</label>
          </div>
          <div class="form-group">
            <input
              type="number"
              id="phone"
              required
              onChange={(e) => setPhone(e.target.value)}
              value={phone}
            />
            <label for="phone">Phone *</label>
          </div>
          <div class="form-group">
            <input
              type="email"
              id="email"
              required
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
            <label for="email">Email *</label>
          </div>
          <div class="form-group">
            <textarea
              id="message"
              rows="4"
              onChange={(e) => setMessage(e.target.value)}
              value={message}
            />
            <label for="message">Message</label>
          </div>
          <div className="button-box">
            <Button text={loading ? "Submitting..." : "Submit"} />
          </div>
        </form>
      </div>
    </>
  );
};

export default ContactForm;
