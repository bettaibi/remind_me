import React from 'react';
import { Facebook, Github, Linkedin } from 'react-bootstrap-icons';

export const StatusBar: React.FC = () => {
    return (
        <div className="status-bar bg-primary text-light py-1">
            <div className="container d-flex justify-content-between align-items-center h-100">
                <span>Created by Nidhal Bettaibi</span>
                <div>
                    
                    <a href="https://www.facebook.com/" className="icons mr-2 text-white" >
                      <Facebook/>
                    </a>
                    <a href="https://github.com/bettaibi" className="icons mr-2 text-white" >
                      <Github/>
                    </a>
                    <a href="https://www.linkedin.com/in/nidhal-bettaibi-39b3a0b2/" className="icons text-white" >
                     <Linkedin/>
                    </a>

                </div>
            </div>
        </div>
    )
}
