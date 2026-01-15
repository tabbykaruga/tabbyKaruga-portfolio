import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import ContactImg from "../assets/img/contact-img.svg";

export default function ContactMe() {
  const formInitialDetails = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  };
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [sendButtonText, setSendButtonText] = useState("Send");
  const [status, setStatus] = useState({});

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDeafault();
    setSendButtonText("Sending...");
    let response = await fetch("http:/localhost:5000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "Application/json;charset=utf-8",
      },
      body: JSON.stringify(formDetails),
    });

    sendButtonText("Send");
    let results = response.json();
    setFormDetails(formInitialDetails);

    if (results.code === 200) {
      setStatus({ success: true, message: "Message Sent Successfully" });
    } else {
      setStatus({
        success: false,
        message: "Oops Something went wrong. Please try again later.",
      });
    }
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <img src={ContactImg} alt="ContactImg" />
          </Col>
          <Col md={6}>
            <h2>Get In Touch</h2>
            <form onSubmit={handleSubmit}>
              <Row>
                <Col sm={6} className="px-1"></Col>
                <input
                  type="text"
                  value={formDetails.firstName}
                  placeholder="First Name"
                  onChange={(e) => onFormUpdate("FirstName", e.target.value)}
                />
                <Col sm={6} className="px-1"></Col>
                <input
                  type="text"
                  value={formDetails.lastName}
                  placeholder="Last Name"
                  onChange={(e) => onFormUpdate("lastName", e.target.value)}
                />
                <Col sm={6} className="px-1"></Col>
                <input
                  type="email"
                  value={formDetails.email}
                  placeholder="Email"
                  onChange={(e) => onFormUpdate("email", e.target.value)}
                />
                <Col sm={6} className="px-1"></Col>
                <input
                  type="tel"
                  value={formDetails.phone}
                  placeholder="Phone"
                  onChange={(e) => onFormUpdate("phone", e.target.value)}
                />
                <Col className="px-1">
                  <textarea
                    value={formDetails.message}
                    placeholder="Message"
                    onChange={(e) => onFormUpdate("message", e.target.value)}
                  />
                  <button type="submit">
                    <span>{sendButtonText}</span>
                  </button>
                </Col>
                {status.message && (
                  <Col>
                    <p
                      className={
                        status.success === false ? "danger" : "success"
                      }
                    >
                      {status.message}
                    </p>
                  </Col>
                )}
              </Row>
            </form>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
