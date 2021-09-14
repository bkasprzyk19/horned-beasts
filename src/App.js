import 'bootstrap/dist/css/bootstrap.min.css';
import  Container  from 'react-bootstrap/Container';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import beastBios from './data.json';


function App() {
  return (
    <Container>
      <Header title="welcome"/>
      <Main message="hello world" beastBios={beastBios} />
      <Footer text="conclusion"/>

    </Container>
    )
    
  
}

export default App;
