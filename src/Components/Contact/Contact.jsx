import React, { useRef, useState } from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const [done, setDone] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_mkxq27b", "template_lbi2rlk", form.current, {
        publicKey: "-TIB_auAETEs8rUaa",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          setDone(true);
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div className="contact-form" id="contact">
      <div className="w-left">
        <div className="awesome">
          <span style={{ color: "var(--green)" }}>Get in touch</span>
          <span>Contact me</span>
          <div
            className="blur s-blur"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>
      </div>

      <div className="c-right">
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" className="user" placeholder="Name" />
          <input
            type="email"
            name="email"
            className="user"
            placeholder="Email"
          />
          <textarea name="message" className="user" placeholder="Message" />
          <input type="submit" value="Send" className="button" />
          <span>{done && "Thanks for contacting me!"}</span>
          <div
            className="blur c-blur1"
            style={{ background: "var(--purple)" }}
          ></div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
