
import Header from "./components/Header.js";
import Footer from "./components/Footer.js";
import Home from "./pages/Home.js"
import ProductPage from "./pages/ProductPage.js"
import CartPage from "./pages/CartPage.js"
import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage.js";


function App() {
  return (
    <Router>
      <Header></Header>
      <main className="py-3">
        <Container>
          <Route path="/login" component={LoginPage}></Route>
          <Route path="/products/:id" component={ProductPage} />
          <Route path="/cart/:id?" component={CartPage} />
          <Route path="/" component={Home} exact />
        </Container>
      </main>
      <Footer></Footer>
    </Router>
  )
}

export default App;
