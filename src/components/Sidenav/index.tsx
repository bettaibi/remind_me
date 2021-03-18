import React, { useState } from 'react';
import { Collapse, Row, Col, Fade } from 'react-bootstrap';
import { ChevronDown, ChevronRight } from 'react-bootstrap-icons';
import { navigations, Navigation } from '../../model/navigation';

import './sidenav.scss';

export const Sidenav: React.FC = () => {
    const [currentOpenIndex, setCurrentOpenIndex] = useState<number | null>(0);

    const toogleNavigation = (index: number) => {
        try {
            if (index !== currentOpenIndex)
                setCurrentOpenIndex(index);
            else
                setCurrentOpenIndex(null);
        }
        catch (err) {
            throw err;
        }
    }

    return (
        <nav className="sidenav-items">
            {navigations.map((item, index) => (
                <SidebarNavigation key={item.id} navItem={item}
                    isOpen={index === currentOpenIndex} setIsOpen={() => toogleNavigation(index)} />
            ))}
        </nav>
    );
};

interface SideNavigationProps {
    isOpen: boolean;
    setIsOpen: () => void;
    navItem: Navigation
};

const SidebarNavigation: React.FC<SideNavigationProps> = React.memo(({ isOpen, setIsOpen, navItem }) => {

    return (
            <ul className="nav-item" onClick={setIsOpen}>
                <li>
                    <div className="d-flex flex-row justify-content-between">
                       <div>
                            <span className='text-left'>
                                {navItem.icon}
                            </span>
                            <span className="px-3">{navItem.title}</span>
                       </div>

                        {
                            navItem.subItems && <span>
                                {isOpen ? <ChevronDown /> : <ChevronRight />}
                            </span>
                        }
                    </div>

                    {
                        navItem.subItems && <Collapse in={isOpen}>
                            <ul className="sub-items">
                                {
                                    navItem.subItems.map(item => (
                                        <Fade in={isOpen} key={item.id}>
                                            <li>
                                                <a href="!#">{item.title}</a>
                                            </li>
                                        </Fade>
                                    ))
                                }
                            </ul>
                        </Collapse>
                    }
                </li>
            </ul>

    )
});