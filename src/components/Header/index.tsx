import React from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import { House, PieChart, List, Puzzle, Bell } from 'react-bootstrap-icons';
import { StatusBar } from '../StatusBar'
export const Header: React.FC = () => {
    return (
        <React.Fragment>
            <StatusBar />
            <header className="header shadow-sm bg-white">
                <Container className="h-100">
                    <Row className="h-100 align-items-center">
                        <Col className="d-flex flex-column align-items-center text-primary">
                            <House size="18" />
                            <span className="fs-14">Home</span>
                        </Col>
                        <Col className="d-flex flex-column align-items-center">
                            <PieChart size="18" />
                            <span className="fs-14">Progress</span>
                        </Col>
                        <Col className="d-flex flex-column align-items-center">
                            <Puzzle size="18" />
                            <span className="fs-14">Games</span>
                        </Col>
                        <Col className="d-flex flex-column align-items-center">
                            <Bell size="18" />
                            <span className="fs-14">Notifications</span>
                        </Col>
                        <Col className="display-xs-none ">
                            <div className="d-flex flex-column align-items-center">
                                <List size="18" />
                                <span className="fs-14">Menu</span>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </header>
        </React.Fragment>
    )
}
