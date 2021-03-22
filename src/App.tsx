import React from 'react';
import { Header } from './components/Header';
import { Sidenav } from './components/Sidenav';
import { Main } from './pages/Main';
import { Container, Row, Col } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { Signin } from './pages/auth/signin';
import { Singup } from './pages/auth/signup';

function App() {
 let sideNavStyle: React.CSSProperties = {
   position: 'sticky',
   top: '66px',
   zIndex: 999,
   height: 'fit-content',
   padding: 0
 };

  return (
   <Router>
     <Switch>
        <Route path="/" exact>
          <Redirect to="/home" />
        </Route>
        <Route path='/home'>
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
        </Route>
        <Route path="/signin" component={Signin} />
        <Route path='/signup' component={Singup} />
     </Switch>
     
   </Router>
  );
}

export default App;
