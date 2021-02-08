
import Header from "./components/Header.js";
import Footer from "./components/Footer.js";
import Home from "./pages/Home.js"
import { Container } from "react-bootstrap"


function App() {
  return (
    <>
      <Header></Header>
      <main className="py-3">
        <Container>
          <Home></Home>
        </Container>
      </main>
      <Footer></Footer>

    </>
  )
}

export default App;
