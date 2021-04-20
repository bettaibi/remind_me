import React from 'react';
import { Container } from 'react-bootstrap'
import { PieChart, List, Puzzle, Person, Check2Circle } from 'react-bootstrap-icons';
import { SidenavContainer, useSidenavContainer } from '../sidenavContainer';
import { StatusBar } from '../StatusBar';
import { NavLink } from 'react-router-dom';

export const Header: React.FC = () => {
    const { isOpen, toggle } = useSidenavContainer();
    
    function toggleSidenav(){
        toggle();
    };

    return (
        <React.Fragment>
            <SidenavContainer isOpen={isOpen} onCloseCallback = {() => toggleSidenav()}/>
            <StatusBar />
            <header className="header shadow-sm bg-white">
                <Container className="h-100">
                    <div className="h-100 d-flex flex-row justify-content-between align-items-center">
                        <NavLink to="/home" className="d-flex flex-column align-items-center btn-icon">
                            <PieChart size="18" />
                            <span className="fs-14">Progress</span>
                        </NavLink>

                        <NavLink to="/home/todos" className="d-flex flex-column align-items-center btn-icon">
                            <Check2Circle size="18" />
                            <span className="fs-14">Todos</span>
                        </NavLink>
                        
                        <NavLink to="/home/games" className="d-flex flex-column align-items-center btn-icon">
                            <Puzzle size="18" />
                            <span className="fs-14">Games</span>
                        </NavLink>

                        <NavLink to="/home/profile" className="d-flex flex-column align-items-center btn-icon">
                            <Person size="18" />
                            <span className="fs-14">Profile</span>
                        </NavLink>

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
