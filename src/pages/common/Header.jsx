import moment from "moment/moment";
import React, { useContext } from "react";
import { Button, Container, Navbar, Nav } from "react-bootstrap";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { FaUserCircle } from "react-icons/fa";
const Header = () => {

  return (
    <div className="">
      <Container>
        <div className="text-center">
          <h1 className="">The News of Dragon Clints</h1>
          <h2 className="text-center ">nav</h2>
          <p className="text-secondary ">
            <small>Journalism Without Fear or Favor</small>
          </p>
          <p>{moment().format("dddd, MMMM D, YYYY")}</p>
        </div>
        <div className="d-flex">
          <Button variant="danger">Latest</Button>

          <Marquee className="text-danger" speed={100}>
            I can be a React component, multiple React components, or just some
            text...... I can be a React component, multiple React components, or
            just some text....
          </Marquee>
        </div>
      </Container>
      
    </div>
  );
};

export default Header;
