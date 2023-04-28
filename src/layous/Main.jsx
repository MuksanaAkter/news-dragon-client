import React from 'react';
import Footer from '../pages/common/Footer';
import { Outlet } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import LeftNav from '../pages/common/LeftNav';
import RightNav from '../pages/common/RightNav';
import Header from '../pages/common/Header';
import NavigationBar from '../pages/common/NavigationBar';
const Main = () => {
    return (
        <div>
            <Header></Header>
            <NavigationBar></NavigationBar>
            <Container>
      <Row>
        <Col lg={3}>
            <LeftNav/>
        </Col>
        <Col lg={6}>
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

export default Main;