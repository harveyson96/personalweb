import { useRef, useState } from "react";
import { Container, Form, Button, Alert } from "react-bootstrap";
import emailjs from "emailjs-com";
export default function Contact() {
  const form = useRef();
  const [status, setStatus] = useState(null);
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "personalweb",
        "template_djai3qd",
        form.current,
        "6E3ME0Gg4wPQtvBKz"
      )
      .then(
        () => {
          setStatus("success");
          form.current.reset();
        },
        (error) => {
          setStatus("error");
          console.error(error);
        }
      );
  };
  return (
    <div>
      <Container className="my-5" style={{ maxWidth: "600px" }}>
        <h2 className="mb-4">Contact Me</h2>

        {status === "success" && (
          <Alert variant="success">Message sent successfully!</Alert>
        )}
        {status === "error" && (
          <Alert variant="danger">Failed to send. Please try again.</Alert>
        )}

        <Form ref={form} onSubmit={sendEmail}>
          <Form.Group className="mb-3" controlId="formName">
            <Form.Label>Your Name</Form.Label>
            <Form.Control type="text" name="user_name" required />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formEmail">
            <Form.Label>Your Email</Form.Label>
            <Form.Control type="email" name="user_email" required />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formMessage">
            <Form.Label>Your Message</Form.Label>
            <Form.Control as="textarea" rows={5} name="message" required />
          </Form.Group>

          <Button variant="primary" type="submit">
            Send Message
          </Button>
        </Form>
      </Container>
    </div>
  );
}
