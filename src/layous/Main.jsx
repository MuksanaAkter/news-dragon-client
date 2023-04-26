import React from 'react';
import Footer from '../pages/common/Footer';
import { Outlet } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import LeftNav from '../pages/common/LeftNav';
import RightNav from '../pages/common/RightNav';
import Header from '../pages/common/Header';
const Main = () => {
    return (
        <div>
            <Header></Header>

            <Container>
      
      <Row>
        <Col lg={3}>
            <LeftNav/>
        </Col>
        <Col lg={6}>sm=true</Col>
        <Col lg={3}>
            <RightNav/>
        </Col>
      </Row>
    </Container>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Main;