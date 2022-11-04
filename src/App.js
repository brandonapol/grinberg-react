import { Container } from "react-bootstrap"
import Header from './components/Header';
import Posts from "./components/Posts";
import Body from "./components/Body";


export default function App() {
  
  return (
    <Container fluid className="App">
      <Header />
      <Body sidebar>
        <Posts />
      </Body>
    </Container>
  );
}

// every element in a rendered list must have a unique key 