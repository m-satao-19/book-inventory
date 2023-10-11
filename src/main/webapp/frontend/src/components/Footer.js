import React, {Component} from "react";
import {Container, Col, Navbar} from "react-bootstrap";

class Footer extends Component{
    render() {
        return(
            <Navbar fixed="bottom" bg="dark" variant="dark">
                <Container>
                    <Col lg={12} className="text-center text-muted">
                        <div>All Rights Reserved</div>
                    </Col>
                </Container>
            </Navbar>
        );
    }
}

export default Footer;