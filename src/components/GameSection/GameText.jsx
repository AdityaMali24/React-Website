import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

const GameText = () => {
  return (
    <Container>
    <div className="game-text text-light">
      <h4 className="mb-3">WELCOME TO LUGX</h4>
      <h1 className="fw-bold mb-5">BEST GAMING SITE EVER!</h1>
      <p className="mb-5">
        LUGX Gaming is free Bootstrap 5 HTML CSS website template for your
        gaming websites. You can download and use this layout for commercial
        purposes. Please tell your friends about TemplateMo.
      </p>
      <Form className="d-flex position-relative">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2 rounded-pill game-input p-3"
              aria-label="Search"
            />
            <Button variant="danger" className="search-btn rounded-pill position-absolute start-50 p-3 px-4">Search</Button>
          </Form>
    </div>
    </Container>
  );
};

export default GameText;