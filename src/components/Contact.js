import React, { useState } from "react";
import { FiMail, FiLinkedin, FiGithub, FiPhone, FiSend } from "react-icons/fi";
import { profile } from "../data/portfolio";
import "./Contact.css";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const onChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const onSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio contact from ${form.name}`);
    const body = encodeURIComponent(
      `${form.message}\n\n— ${form.name} (${form.email})`
    );
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
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
      value: "in/kartikmahajanktm",
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
          <button type="submit" className="btn btn-primary">
            <FiSend /> Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
