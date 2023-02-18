import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Product from "./Components/Product";

function App() {
  return (
    <BrowserRouter>
      <div>
        <header>
          <Link to={"/"}>Ecommerce</Link>
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
      </div>
    </BrowserRouter>
  );
}

export default App;
