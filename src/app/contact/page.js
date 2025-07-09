'use client';
import './contact.scss';

export default function Contact() {
  return (
    <div className="contact-container">
      <h1>Contact Me</h1>
      <form>
        <input type="text" placeholder="Your Name" />
        <input type="email" placeholder="Email" />
        <textarea placeholder="Your Message"></textarea>
        <button type="submit">Send</button>
      </form>
    </div>
  );
}
