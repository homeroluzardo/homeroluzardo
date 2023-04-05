import React from "react";
import "../styles/Pages.css";
import { useForm, ValidationError } from "@formspree/react";
import ty_form from "../images/thankyou_form.jpg";

function ContactForm() {
  const [state, handleSubmit] = useForm("xpkadvzm");
  if (state.succeeded) {
    return (
      <div className="container mt-5 p-5 myContainer">
        <h2 className="subtitle">Contact</h2>
        <br />
        <p className="text-light labels_form">
          Thank you for getting in touch! I have received your message and will
          get back to you shortly. Have a great day!
        </p>
        <br />
        <br />
        <img
          className="ty_form"
          src={ty_form}
          alt="Thank you"
          style={{ width: 300, borderRadius: "5px!important" }}
        />
        <br />
        <br />;
      </div>
    );
  }
  return (
    <div className="container mt-5 p-5 myContainer">
      <h2 className="subtitle">Contact</h2>

      <blockquote className="blockquote text-white">
        <p className="mb-0">
          Thanks for taking the time to reach out. How can I help you today?
        </p>
        <br />
      </blockquote>

      <form onSubmit={handleSubmit}>
        <label className="text-light labels_form" htmlFor="email">
          Your Email Address:
        </label>
        <input
          id="email"
          className="form-control"
          type="email"
          name="email"
          aria-describedby="emailHelp"
          placeholder="Enter email"
          required
        />{" "}
        <ValidationError prefix="Email" field="email" errors={state.errors} />
        <br />
        <br />
        <label htmlFor="txtarea" className="text-light labels_form">
          Your Message:
        </label>
        <textarea
          id="message"
          className="form-control"
          name="message"
          placeholder="Type message ..."
          rows="5"
          required
        />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
        <br />
        <button
          type="submit"
          className="btn btn-primary btn_form"
          disabled={state.submitting}
        >
          Send Message
        </button>
      </form>
    </div>
  );
}
function Contact() {
  return <ContactForm />;
}
export default Contact;
