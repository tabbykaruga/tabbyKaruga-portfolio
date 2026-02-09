import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import ContactImg from "../assets/img/contact-img.svg";
import emailjs from "@emailjs/browser";

export default function ContactMe() {
  const formInitialDetails = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  };
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [status, setStatus] = useState({});
  const [showPopup, setShowPopup] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value,
    });
  };

  //USING EMAILJS
  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formDetails.firstName.trim() ||
      !formDetails.email.trim() ||
      !formDetails.message.trim()
    ) {
      setStatus({
        success: false,
        message: "Please fill in First Name, Email and Message.",
      });
      setShowPopup(true);

      setTimeout(() => setShowPopup(false), 3000);
      return;
    }

    setIsLoading(true);

    emailjs
      .send(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        {
          name: `${formDetails.firstName} ${formDetails.lastName}`,
          email: formDetails.email,
          phone: formDetails.phone,
          message: formDetails.message,
        },
        process.env.REACT_APP_PUBLIC_KEY,
      )
      .then(
        () => {
          setStatus({ success: true, message: "Message sent successfully!" });
          setIsLoading(false);
          setFormDetails(formInitialDetails);
          setShowPopup(true);

          //automatic close
          setTimeout(() => setShowPopup(false), 3000);
        },
        (error) => {
          console.error(error);
          setStatus({
            success: false,
            message: "Failed to send message. Please try again.",
          });
          setIsLoading(false);
          setShowPopup(true);

          //automatic close
          setTimeout(() => setShowPopup(false), 3000);
        },
      );
  };

  //FOR THE BACKEND USING SERVER.JS
  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   setIsLoading(true);

  //   try {
  //     const response = await fetch("http://localhost:5000/api/contact", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(formDetails),
  //     });

  //     const result = await response.json();

  //     setIsLoading(false);
  //     setFormDetails(formInitialDetails);

  //     if (response.ok) {
  //       setStatus({ success: true, message: "Message sent successfully!" });
  //     } else {
  //       setStatus({
  //         success: false,
  //         message: result.message || "Oops! Something went wrong.",
  //       });
  //     }
  //   } catch (error) {
  //     console.error(error);
  //     setIsLoading(false);
  //     setStatus({
  //       success: false,
  //       message: "Error sending message. Please try again later.",
  //     });
  //   }
  // };

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
                  onChange={(e) => onFormUpdate("firstName", e.target.value)}
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
                  <button type="submit" disabled={isLoading}>
                    {isLoading ? (
                      <div className="spinner"></div>
                    ) : (
                      <span>Send</span>
                    )}
                  </button>
                </Col>
                {showPopup && (
                  <div className="popup-overlay">
                    <div
                      className={`popup-box ${status.success ? "success" : "error"}`}
                    >
                      {status.success && (
                        <div className="success-animation">
                          <div className="checkmark">✓</div>
                        </div>
                      )}
                      <h3>{status.success ? "Success" : "Error"}</h3>
                      <p>{status.message}</p>
                    </div>
                  </div>
                )}
              </Row>
            </form>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
