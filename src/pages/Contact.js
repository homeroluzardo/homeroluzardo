import React from "react";
import "../styles/Pages.css";

class Contact extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      subject: "",
      message: "",
      status: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
      [e.target.email]: e.target.value,
      [e.target.subject]: e.target.value,
      [e.target.message]: e.target.value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const { name, email, subject, message } = this.state;
    fetch(`https://hooks.zapier.com/hooks/catch/7214634/o9vm7wv/`, {
      method: "POST",
      body: JSON.stringify({ name, email, subject, message }),
    })
      .then(() => {
        document.getElementById("inputName").style.display = "none";
        document.getElementById("inputEmail").style.display = "none";
        document.getElementById("emailHelp").style.display = "none";
        document.getElementById("inputSubject").style.display = "none";
        document.getElementById("inputMessage").style.display = "none";
        document.getElementById("submitBtn").style.display = "none";
        this.setState({
          status:
            "Thank you! Your message has been successfully sent. We will contact you very soon!",
        });
      })
      .catch(() => {
        this.setState({
          status:
            "There was an error, please try again or send us an email to: homeroeluzardo@gmail.com",
        });
      });
  }

  render() {
    return (
      <div className="container mt-5 p-5 myContainer">
        <h2 className="subtitle">Contact</h2>

        <form>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              id="inputName"
              name="name"
              placeholder="Your name here..."
              value={this.state.value}
              onChange={this.handleChange}
            />
            <input
              type="email"
              className="form-control"
              id="inputEmail"
              name="email"
              aria-describedby="emailHelp"
              placeholder="Your email here..."
              value={this.state.value}
              onChange={this.handleChange}
            />
            <small id="emailHelp" className="form-text text-white">
              We'll never share your email with anyone else.
            </small>
            <input
              type="text"
              className="form-control"
              id="inputSubject"
              name="subject"
              placeholder="Your subject here..."
              value={this.state.value}
              onChange={this.handleChange}
            />
            <textarea
              type="text"
              className="form-control"
              id="inputMessage"
              name="message"
              rows="3"
              placeholder="Your message here..."
              value={this.state.value}
              onChange={this.handleChange}
            />
          </div>
        </form>
        <button
          onClick={this.handleSubmit}
          type="submit"
          className="btn btn-primary mb-2 btn-submit"
          id="submitBtn"
        >
          Send Now! <i className="fas fa-paper-plane"></i>
        </button>
        {/* <p className="text-white">{JSON.stringify(this.state)}</p> */}
        <p>
          <span className="blockquote text-white">{this.state.status}</span>
        </p>
      </div>
    );
  }
}

export default Contact;
