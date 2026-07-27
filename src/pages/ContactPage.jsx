import { useState } from "react";

function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();

    setSubmitted(true);
    setName("");
    setEmail("");
    setMessage("");
  }

  return (
    <main className="main-content">
      <section className="contact-section">
        <h2>Contact</h2>

        <p>
          Fill out the form below.
        </p>

        {submitted && (
          <p className="success-message">Your message has been entered.</p>
        )}

        <form className="contact-form" onSubmit={handleSubmit}>
          <label htmlFor="contact-name">Name</label>

          <input
            id="contact-name"
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
            required
          />

          <label htmlFor="contact-email">Email</label>

          <input
            id="contact-email"
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />

          <label htmlFor="contact-message">Message</label>

          <textarea
            id="contact-message"
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            rows="7"
            required
          />

          <button type="submit">Send Message</button>
        </form>
      </section>
    </main>
  );
}

export default ContactPage;