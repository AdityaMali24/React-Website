import React from 'react';
import GameCard from './GameCard';
import GameText from './GameText';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const GameDetails = () => {
  return (
    <div className='game'>
        <Container>
    <Row className='align-items-center row-cols-1 row-cols-lg-2'>
      <Col><GameText/></Col>
      <Col><GameCard/></Col>
    </Row>
    </Container>
    </div>
  )
}

export default GameDetails