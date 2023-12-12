import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Alert from "react-bootstrap/Alert";
import { useHistory } from "react-router-dom";
import appStyles from "../../App.module.css";
import btnStyles from "../../styles/Button.module.css";
import { axiosReq } from "../../api/axiosDefaults";
import { Button, Modal } from "react-bootstrap";



const ContactForm = () => {
  const [errors, setErrors] = useState({});

  const [contactData, setContactData] = useState({
    subject: "",
    email: "",
    content: "",
  });
  const { subject, email, content } = contactData;

  const history = useHistory();

  const [show, setShow] = useState(false);

  const handleClose = () => {
        setShow(false);
        history.goBack();
  } 
  const handleShow = () => setShow(true);

  const handleChange = (event) => {
    setContactData({
      ...contactData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();

    formData.append("subject", subject);
    formData.append("content", content);
    formData.append("email", email);

    try {
      await axiosReq.post("/contact/", formData);
      handleShow();
    } catch (err) {
      if (err.response?.status !== 401) {
        setErrors(err.response?.data);
      }
    }
  };

  const textFields = (
    <div className="text-center">
      <Form.Group>
        <Form.Label>Why are you contacting us?</Form.Label>
        <Form.Control
          type="text"
          name="subject"
          value={subject}
          onChange={handleChange}
        />
      </Form.Group>
      {errors?.title?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))}

      <Form.Group>
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
        />
      </Form.Group>
      {errors?.email?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))}

      <Form.Group>
        <Form.Label>Details</Form.Label>
        <Form.Control
          as="textarea"
          rows={5}
          name="content"
          value={content}
          onChange={handleChange}
        />
      </Form.Group>
      {errors?.content?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))}

      <button className={btnStyles.btnXsSmall} onClick={() => history.goBack()}>
        Cancel
      </button>
      <button className={btnStyles.btnXsSmall} type="submit">
        Send
      </button>
    </div>
  );

  return (
    <Container>
      <h1>Contact Us</h1>
      <p>Please reach out to us with any issues you are expeirencing or for any feedback</p>
      <Form onSubmit={handleSubmit}>
        <Container className={appStyles.Content}>{textFields}</Container>
      </Form>

      <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Confirmed</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            Thanks we will get back to you shortly
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Cancel
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Confirm
            </Button>
          </Modal.Footer>
        </Modal>
    </Container>

  );
};

export default ContactForm;