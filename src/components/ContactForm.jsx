import { useState } from "react";
import { SITE } from "../data/products";
import { openWhatsApp } from "../data/whatsapp";

const EMPTY = { name: "", email: "", message: "" };

export default function ContactForm() {
  const [form, setForm] = useState(EMPTY);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name.trim() || !form.message.trim()) {
      setError("Please add your name and a message before sending.");
      return;
    }
    setError("");

    const text = [
      `Hi, I'm ${form.name}.`,
      form.email && `Email: ${form.email}`,
      "",
      form.message,
    ]
      .filter(Boolean)
      .join("\n");

    openWhatsApp(text);
    setForm(EMPTY);
  };

  return (
    <section className="contact" id="contact">
      <div className="contact__inner">
        <div className="contact__intro">
          <div className="about__mark">02 &mdash; 02</div>
          <h2>Get in touch</h2>
          <p>
            Fill this in and it opens a WhatsApp chat with your message already typed out, ready
            to send. You can also reach us at {SITE.email}, or visit us at {SITE.address}.
          </p>
        </div>

        <form className="contact__form" onSubmit={handleSubmit}>
          <label className="field">
            <span>Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your name"
            />
          </label>

          <label className="field">
            <span>Email (optional)</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="you@example.com"
            />
          </label>

          <label className="field">
            <span>Message</span>
            <textarea
              name="message"
              rows={4}
              value={form.message}
              onChange={handleChange}
              placeholder="What are you looking for?"
            />
          </label>

          {error && <p className="field__error">{error}</p>}

          <button type="submit" className="btn btn--primary">
            Open WhatsApp chat
          </button>
        </form>
      </div>
    </section>
  );
}
