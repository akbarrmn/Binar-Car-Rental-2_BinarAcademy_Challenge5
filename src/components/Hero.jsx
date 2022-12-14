import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';

export default function Header() {
  return (
    <>
      <Container fluid className='jumbotron'>
        <Row className="justify-content-between jumbo">
          <Col xl='6' className="pt-5 mt-5 text">
            <h1>Sewa &amp; Rental Mobil Terbaik di kawasan (Lokasimu)</h1>
            <p className="pt-3">Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam.</p>
          </Col>
          <Col xl='6' className="car">
            <img src='./images/img_car.png' alt="mobil"></img>
          </Col>
        </Row>
      </Container>
    </>

  )
}