import { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import  Container  from 'react-bootstrap/Container';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';

import SelectedBeastModal from './SelectedBeastModal.js';




class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      selected: false,
      selectedBeast: {},
    }
  }

  handleShow = () => {
    console.log('test');
    this.setState({selected: true})
  }
  handleHide = () => {
    this.setState({selected: false})
  }
  handleChange = ( beast) => {
    this.setState({selectedBeast: beast})
  }
  render () {
  return (
    <Container fluid>
      <Header title="welcome to horned beast selector.."/>
      <Main message="Choose wisely.." handleShow={this.handleShow} handleChange={this.handleChange} />
      <SelectedBeastModal beast={this.state.selectedBeast} handleHide={this.handleHide} show={this.state.selected}/>
      <Footer text="conclusion"/>

    </Container>
    );
  }
  
}



export default App;

