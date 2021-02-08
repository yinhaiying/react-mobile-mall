
import Header from "./components/Header.js";
import Footer from "./components/Footer.js";
import { Container } from "react-bootstrap"


function App() {
  return (
    <>
      <Header></Header>
      <main className="py-3">
        <Container>
          <h1>hello</h1>
        </Container>
      </main>
      <Footer></Footer>

    </>
  )
}

export default App;
