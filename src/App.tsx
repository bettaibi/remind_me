import React from 'react';
import { Header } from './components/Header';
import { StatusBar } from './components/StatusBar';
import { Sidenav } from './components/Sidenav';
import { Main } from './pages/Main';
import { Container, Row, Col } from 'react-bootstrap';

function App() {
  return (
   <React.Fragment>
     <StatusBar />
     <Header />
     <Container>
         <Row>
          <Col className="display-xs-none" sm={3}>
            <Sidenav />
          </Col>
          <Col>
            <Main />
          </Col>
        </Row>
     </Container>
     
   </React.Fragment>
  );
}

export default App;
