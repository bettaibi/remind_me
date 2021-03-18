import React from 'react';
import { Header } from './components/Header';
import { Sidenav } from './components/Sidenav';
import { Main } from './pages/Main';
import { Container, Row, Col } from 'react-bootstrap';

function App() {
 let sideNavStyle: React.CSSProperties = {
   position: 'sticky',
   top: '66px',
   zIndex: 999,
   height: 'fit-content',
   padding: 0
 };

  return (
   <React.Fragment>
     <Header />
     <Container>
         <Row>
          <Col className="display-xs-none bg-primary rounded text-white mt-3 mb-3" 
          sm={4} style={sideNavStyle}>
            <Sidenav />
          </Col>
          <Col className="mb-3 mt-3">
            <Main />
          </Col>
        </Row>
     </Container>
     
   </React.Fragment>
  );
}

export default App;
