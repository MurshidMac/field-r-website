import React, { Component } from 'react'
import { Container, Row, Col } from "react-bootstrap"
import FieldRNavbar from '../components/FieldRNavbar'

export default class OurJourney extends Component {
    render() {
        return (
            <React.Fragment>
            <FieldRNavbar/>
            <h1 style={{ color: "#25CCF7", fontSize: 50 }}><b>OUR JOURNEY</b></h1>
            <Container>
            <Row >
                    <Col>
                        <label id="rcorners4Journey"><img id="rcorners4ServicesImg" alt="FirstApp"/>
                                <Row>
                                    <Col>
                                    <h4 style={{ textAlign: "center", color: "#25CCF7" }}>Heading/Title</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim venia…</p>
                                    <a href="google.com" style={{ textAlign:"right", textDecoration: "underline" }}> See More </a>
                                    </Col>
                                </Row>
                        </label>
                    </Col>
                    <Col>
                        <label id="rcorners4Journey"><img id="rcorners4ServicesImg" alt="SecondApp" />
                                <Row>
                                    <Col>
                                    <h4 style={{ textAlign: "center", color: "#25CCF7" }}>Heading/Title</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim venia…</p>
                                    <a href="google.com" style={{ textAlign:"right", textDecoration: "underline" }}> See More </a>
                                    </Col>
                                </Row>
                        </label>
                    </Col>
            </Row>
            </Container>
        </React.Fragment>
        )
    }
}
