import React, { lazy, Suspense } from 'react';
import { Header } from './components/Header';
import { Sidenav } from './components/Sidenav';
import { Container, Row, Col } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { ContextProvider } from './Context';
import PrivateRoute from './components/PrivateRoute';

const Signin = lazy(() => import('./pages/auth/signin'));
const Singup = lazy(() => import('./pages/auth/signup'));
const Main = lazy(() => import('./pages/Main'));

function UserLayout(){
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
          <Col className="display-xs-none rounded mt-3 mb-3 border rounded bg-light"
            sm={4} style={sideNavStyle}>
            <Sidenav />
          </Col>
          <Col className="mb-3 mt-3">
            <Main />
          </Col>
        </Row>
      </Container>
  </React.Fragment>
  )
}
function App() {
  return (
    <Router>
      <ContextProvider>
        <Suspense fallback={<div>loading...</div>}>
          <div className="main-container">
            <Switch>
              <Route path="/" exact>
                <Redirect to="/home" />
              </Route>
              <PrivateRoute path="/home">
                <UserLayout />
              </PrivateRoute>
              <Route path="/signin" component={Signin} />
              <Route path='/signup' component={Singup} />
            </Switch>
          </div>
        </Suspense>
      </ContextProvider>
    </Router>
  );
}

export default App;
