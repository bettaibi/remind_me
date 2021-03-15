import React from 'react';
import { Facebook, Github, Linkedin } from 'react-bootstrap-icons';

export const StatusBar: React.FC = () => {
    return (
        <div className="status-bar bg-primary text-light py-1">
            <div className="container d-flex justify-content-between align-items-center h-100">
                <span>Welcome Nidhal Bettaibi</span>
                <div>
                    <Facebook className="icons mr-2" />
                    <Github className="icons mr-2" />
                    <Linkedin className="icons" />
                </div>
            </div>
        </div>
    )
}
