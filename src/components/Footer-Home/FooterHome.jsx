import React from 'react';
import { Container } from "react-bootstrap";

const FooterHome = () => {
  return (
    <footer className='bg-blue footer mt-5'>
        <Container>
            <p className='text-center m-0 py-5'>
            Copyright © 2048 LUGX Gaming Company. All rights reserved.    Design : 
            <a href="/home" className='text-light text-decoration-none'>Aditya Mali</a>
            </p>
        </Container>
    </footer>
  )
}

export default FooterHome