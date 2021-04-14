import React, {lazy, Suspense} from 'react';
import { Header } from './components/Header';
import { Sidenav } from './components/Sidenav';
import { Container, Row, Col } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

const Signin = lazy(()=> import('./pages/auth/signin'));
const Singup = lazy(()=> import('./pages/auth/signup'));
const Main = lazy(()=> import('./pages/Main'));

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
     <Suspense fallback={<div>loading...</div>}>
        <div className="main-container">
          <Switch>
              <Route path="/" exact>
                <Redirect to="/home" />
              </Route>
              <Route path='/home'>
                <Header />
                <Container>
                    <Row>
                      <Col className="display-xs-none rounded mt-3 mb-3 border rounded bg-light" 
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
        </div>
     </Suspense>
   </Router>
  );
}

export default App;
