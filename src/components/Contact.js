import React, { useState } from "react";
import {
  FiMail,
  FiLinkedin,
  FiGithub,
  FiPhone,
  FiSend,
  FiCheckCircle,
  FiAlertCircle,
} from "react-icons/fi";
import { profile } from "../data/portfolio";
import "./Contact.css";

// Get your free access key at https://web3forms.com (just enter your email).
// Paste it below — it is safe to expose publicly.
const WEB3FORMS_ACCESS_KEY = "ea78becf-e69e-443e-b72a-bc6f924d6f0c";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  const onChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          name: form.name,
          email: form.email,
          message: form.message,
          subject: `Portfolio contact from ${form.name}`,
          from_name: "Portfolio Contact Form",
        }),
      });
      const data = await res.json();

      if (data.success) {
        setStatus("success");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (err) {
      setStatus("error");
    }
  };

  const channels = [
    {
      icon: <FiMail />,
      label: "Email",
      value: profile.email,
      href: `mailto:${profile.email}`,
    },
    {
      icon: <FiLinkedin />,
      label: "LinkedIn",
      value: "kartikmahajan08",
      href: profile.linkedin,
    },
    {
      icon: <FiGithub />,
      label: "GitHub",
      value: "kartikmahajan5688",
      href: profile.github,
    },
    {
      icon: <FiPhone />,
      label: "Phone",
      value: profile.phone,
      href: `tel:${profile.phone.replace(/\s/g, "")}`,
    },
  ];

  return (
    <section className="section reveal" id="contact">
      <div className="section-head">
        <span className="eyebrow">Contact</span>
        <h2 className="section-title">Let's build something intelligent</h2>
        <p className="section-subtitle">
          Open to AI engineering roles and interesting collaborations. Drop a
          message and I'll get back to you.
        </p>
      </div>

      <div className="contact__grid">
        <div className="contact__channels">
          {channels.map((c) => (
            <a
              className="contact__channel card"
              key={c.label}
              href={c.href}
              target={c.href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
            >
              <span className="contact__channel-icon">{c.icon}</span>
              <div>
                <span className="contact__channel-label">{c.label}</span>
                <span className="contact__channel-value">{c.value}</span>
              </div>
            </a>
          ))}
        </div>

        <form className="contact__form card" onSubmit={onSubmit}>
          <div className="contact__row">
            <label>
              Name
              <input
                name="name"
                value={form.name}
                onChange={onChange}
                placeholder="Your name"
                required
              />
            </label>
            <label>
              Email
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={onChange}
                placeholder="you@email.com"
                required
              />
            </label>
          </div>
          <label>
            Message
            <textarea
              name="message"
              value={form.message}
              onChange={onChange}
              rows="5"
              placeholder="Tell me about your project or role..."
              required
            />
          </label>

          <button
            type="submit"
            className="btn btn-primary"
            disabled={status === "sending"}
          >
            <FiSend /> {status === "sending" ? "Sending..." : "Send Message"}
          </button>

          {status === "success" && (
            <p className="contact__status contact__status--ok">
              <FiCheckCircle /> Thanks! Your message has been sent — I'll get
              back to you soon.
            </p>
          )}
          {status === "error" && (
            <p className="contact__status contact__status--err">
              <FiAlertCircle /> Something went wrong. Please email me directly at{" "}
              {profile.email}.
            </p>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact;
