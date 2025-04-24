import React, { useState } from "react";
import "../styles/ContactSection.css";
import galaxy from "../images/galaxy.mp4";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    try {
      // TODO: replace with your API/email logic
      setStatus("Message sent! 🎉");
      setForm({ name: "", email: "", message: "" });
    } catch {
      setStatus("Oops—something went wrong.");
    }
  };

  return (
    <section id="contact" className="contact-split">
      <video className="contact-background-video" autoPlay loop muted playsInline>
        <source src={galaxy} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="stars-overlay"></div>

      <div className="contact-left">
        <h2 className="contact-getintouch">GET IN TOUCH</h2>
        <h1 className="contact-title">Contact.</h1>

        <form className="contact-form" onSubmit={handleSubmit}>
          <label>
            Your Name
            <input
              type="text"
              name="name"
              placeholder="What's your name?"
              value={form.name}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            Your Email
            <input
              type="email"
              name="email"
              placeholder="What's your email?"
              value={form.email}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            Your Message
            <textarea
              name="message"
              placeholder="What do you want to say?"
              rows="5"
              value={form.message}
              onChange={handleChange}
              required
            />
          </label>

          <button type="submit" className="contact-button">
            Send Message
          </button>
          {status && <p className="contact-status">{status}</p>}
        </form>
      </div>

      <div className="contact-right">
        <spline-viewer url="https://prod.spline.design/1eksIt-1rkUo0MM0/scene.splinecode" />
      </div>
    </section>
  );
};

export default ContactSection;