import MainRouter from "./router/Router";
import Navigation from "./components/navigation/Navigation";

import { Outlet } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";

const App = () => {
  return (
    <MainRouter>
      <Layout />
    </MainRouter>
  );
};

export default App;

const Layout = () => {
  return (
    <Container className="h-100" fluid>
      <Row className="h-100">
        <Col xs={12} md={2} className="bg-light">
          {/* Your navbar component */}
          <Navigation />
        </Col>
        <Col xs={12} md={10}>
          {/* This Outlet is the place in which react-router will render your components that you need with the navbar */}
          <main>
            <Outlet />
          </main>
        </Col>

        {/* You can add a footer to get fancy in here :) */}
      </Row>
    </Container>
  );
};
