
import Header from "./components/Header.js";
import Footer from "./components/Footer.js";
import Home from "./pages/Home.js"
import ProductPage from "./pages/ProductPage.js"
import CartPage from "./pages/CartPage.js"
import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Route } from "react-router-dom";


function App() {
  return (
    <Router>
      <Header></Header>
      <main className="py-3">
        <Container>
          <Route path="/" component={Home} exact />
          <Route path="/products/:id" component={ProductPage} />
          <Route path="/cart/:id?" component={CartPage} />
        </Container>
      </main>
      <Footer></Footer>
    </Router>
  )
}

export default App;
