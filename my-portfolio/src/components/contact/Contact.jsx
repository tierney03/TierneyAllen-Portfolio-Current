import { useState } from "react";
import "./contact.scss";
import HandshakeIcon from "@mui/icons-material/Handshake";

export default function Contact() {
  const [message, setMessage] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);
  };
  return (
    <div className="contact" id="contact">
      <div className="left">
        <HandshakeIcon className="handshake" />
      </div>
      <div className="right">
        <h2>Contact</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Email" />
          <textarea placeholder="Message"></textarea>
          <button type="submit">Send</button>
          {message && (
            <span>Thank you for reaching out. We will be in touch soon!</span>
          )}
        </form>
      </div>
    </div>
  );
}
