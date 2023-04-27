import React from 'react';
import Footer from '../pages/common/Footer';
import { Outlet } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import RightNav from '../pages/common/RightNav';
import Header from '../pages/common/Header';

const NewsLayout = () => {
    return (
        <div>
            <Header></Header>
            <Container>
      <Row>
        <Col lg={9}>
            <Outlet></Outlet>
             </Col>
        <Col lg={3}>
            <RightNav/>
        </Col>
      </Row>
    </Container>
            <Footer/>
        </div>
    );
};

export default NewsLayout;