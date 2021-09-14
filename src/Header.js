import { Component } from 'react';
import  Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

class Header extends Component {

  render () {
    return ( 
    <Navbar bg="dark" varient="dark">
      <Container>
        <Navbar.Brand>
          {this.props.title}
        </Navbar.Brand>
      </Container>
    </Navbar>)
  }
}

export default Header;