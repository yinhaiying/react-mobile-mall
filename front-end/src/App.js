
import Header from "./components/Header.js";
import Footer from "./components/Footer.js";
import Home from "./pages/Home.js"
import ProductPage from "./pages/ProductPage.js"
import CartPage from "./pages/CartPage.js"
import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage.js";
import RegisterPage from "./pages/RegisterPage.js";
import ProfilePage from "./pages/ProfilePage.js";
import ShippingPage from "./pages/ShippingPage.js";
import PaymentPage from "./pages/PaymentPage.js";
import SubmitOrderPage from "./pages/SubmitOrderPage.js";
import OrderDetailsPage from "./pages/OrderDetailsPage.js";


function App() {
  return (
    <Router>
      <Header></Header>
      <main className="py-3">
        <Container>
          <Route path='/orderlist' component={SubmitOrderPage} />
          <Route path='/order/:id' component={OrderDetailsPage} />
          <Route path="/profile" component={ProfilePage} />
          <Route path="/payment" component={PaymentPage} />
          <Route path="/shipping" component={ShippingPage} />
          <Route path="/login" component={LoginPage}></Route>
          <Route path="/register" component={RegisterPage}></Route>
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
