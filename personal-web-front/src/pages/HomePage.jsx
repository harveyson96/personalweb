import { Container, Row, Col, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
export default function HomePage() {
  const navigate = useNavigate();
  function handleContactClick() {
    navigate("/contact");
  }
  return (
    <Container className="text-center py-5">
      <Row className="justify-content-center">
        <Col md={8}>
          <h1 className="display-4 mb-4">Hi, I'm Harvey Sun</h1>
          <p className="lead mb-4">
            I am a Experienced Software Engineer with a Master's in Electrical
            and Computer Engineering from Duke University. Specializes in
            full-stack development using React, JavaScript, and modern web
            technologies. Proven track record in e-commerce, healthcare, and
            mobile applications with expertise in performance optimization,
            CI/CD implementation, and responsive UI design across diverse
            technical environments.
          </p>
          <Button variant="primary" size="lg" onClick={handleContactClick}>
            Contact Me
          </Button>
        </Col>
      </Row>
    </Container>
  );
}
