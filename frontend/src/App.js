import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { Navbar, Container } from "react-bootstrap";
import Home from "./Pages/Home";
import Product from "./Pages/Product";

function App() {
  return (
    <BrowserRouter>
      <div className="d-flex flex-column site-container">
        <header>
          <Navbar bg="dark" variant="dark">
            <Container>
              <Navbar.Brand>
                <Link to={"/"} className="e-link">
                  Ecommerce
                </Link>
              </Navbar.Brand>
            </Container>
          </Navbar>
        </header>
        <main>
          <Routes>
            <Route path="/product/:id" element={<Product />}>
              Product
            </Route>
            <Route path="/" element={<Home />}>
              Home
            </Route>
          </Routes>
        </main>
        <footer className="text-center">
          <div>All rights reserved</div>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
