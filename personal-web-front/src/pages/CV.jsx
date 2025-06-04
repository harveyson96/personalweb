import { Button, Container } from "react-bootstrap";

export default function CV() {
  return (
    <div>
      <Container className="my-5 text-center">
        {/* Optional: Embed CV inline */}
        <div className="mt-5">
          <iframe
            src="/downloads/HarveySun_FE.pdf"
            width="100%"
            height="800px"
            style={{ border: "1px solid #ccc" }}
            title="CV Preview"
          ></iframe>
        </div>
        <div className="mt-5">
          {/* Download Button */}
          <a href="/downloads/HarveySun_FE.pdf" download>
            <Button variant="primary" size="lg">
              📄 Download CV
            </Button>
          </a>
        </div>
      </Container>
    </div>
  );
}
