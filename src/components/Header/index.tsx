import React from 'react';
import { Container } from 'react-bootstrap'
import { House, PieChart, List, Puzzle, Bell } from 'react-bootstrap-icons';
import { SidenavContainer, useSidenavContainer } from '../sidenavContainer';
import { StatusBar } from '../StatusBar';

export const Header: React.FC = () => {
    const { isOpen, toggle } = useSidenavContainer();
    function toggleSidenav(){
        toggle()
    };

    return (
        <React.Fragment>
            <SidenavContainer isOpen={isOpen} onCloseCallback = {() => toggleSidenav()}/>
            <StatusBar />
            <header className="header shadow-sm bg-white">
                <Container className="h-100">
                    <div className="h-100 d-flex flex-row justify-content-between align-items-center">
                        <button className="d-flex flex-column align-items-center btn-icon active">
                            <House size="18" />
                            <span className="fs-14">Home</span>
                        </button>
                        <button className="d-flex flex-column align-items-center btn-icon">
                            <PieChart size="18" />
                            <span className="fs-14">Progress</span>
                        </button>
                        <button className="d-flex flex-column align-items-center btn-icon">
                            <Puzzle size="18" />
                            <span className="fs-14">Games</span>
                        </button>
                        <button className="d-flex flex-column align-items-center btn-icon">
                            <Bell size="18" />
                            <span className="fs-14">Notifications</span>
                        </button>

                        <button className="d-flex flex-column align-items-center d-md-none btn-icon"
                        onClick={toggleSidenav}>
                            <List size="18" />
                            <span className="fs-14">Menu</span>
                        </button>
                        
                    </div>
                </Container>
            </header>
        </React.Fragment>
    )
}
