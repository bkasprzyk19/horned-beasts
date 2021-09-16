import { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import  Container  from 'react-bootstrap/Container';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import beastBios from './data.json';
import hornedBeastM from './hornedBeast.js';




class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      selected: false,
      selectedBeast: beastBios[0],
    }
  }

  handleShow = () => {
    this.setState({selected: true})
  }
  handleHide = () => {
    this.setState({selected: false})
  }
  handleChange = (newBeast) => {
    this.setState({selectedBeast: newBeast})
  }
  render () {
  return (
    <Container>
      <Header title="welcome to horned beast selector.."/>
      <Main message="Choose wisely.." beastBios={beastBios} handleShow={this.handleShow} handleChange={this.handleChange} />
      <hornedBeastM selectedBeast={this.state.selectedBeast} show={this.state.selected} hide={this.state.selected} beastBios={beastBios} image_url={this.props.image_url} title={this.props.title} description= {this.props.description}/>
      <Footer text="conclusion"/>

    </Container>
    );
  }
  
}



export default App;

