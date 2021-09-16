
import { Component } from 'react';
import  Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';


class Main extends Component {

  render () {

    const bios = this.props.beastBios;

    return ( 
    <Container>
      <h2>{this.props.message}</h2>
      <Row>
        <Col><BeastImage handleChange = {this.props.handleChange} handleShow = {this.props.handleShow} bio={bios[0]}/></Col>
        <Col><BeastImage handleChange = {this.props.handleChange} handleShow = {this.props.handleShow} bio={bios[1]}/></Col>
        <Col><BeastImage handleChange = {this.props.handleChange} handleShow = {this.props.handleShow} bio={bios[2]}/></Col>
        <Col><BeastImage handleChange = {this.props.handleChange} handleShow = {this.props.handleShow} bio={bios[3]}/></Col>
      </Row>
      <Row>
        <Col><BeastImage handleChange = {this.props.handleChange} handleShow = {this.props.handleShow} bio={bios[4]}/></Col>
        <Col><BeastImage handleChange = {this.props.handleChange} handleShow = {this.props.handleShow} bio={bios[5]}/></Col>
        <Col><BeastImage handleChange = {this.props.handleChange} handleShow = {this.props.handleShow} bio={bios[6]}/></Col>
        <Col><BeastImage handleChange = {this.props.handleChange} handleShow = {this.props.handleShow} bio={bios[7]}/></Col>
      </Row>
      <Row>
        <Col><BeastImage handleChange = {this.props.handleChange} handleShow = {this.props.handleShow} bio={bios[8]}/></Col>
        <Col><BeastImage handleChange = {this.props.handleChange} handleShow = {this.props.handleShow} bio={bios[9]}/></Col>
        <Col><BeastImage handleChange = {this.props.handleChange} handleShow = {this.props.handleShow} bio={bios[10]}/></Col>
        <Col><BeastImage handleChange = {this.props.handleChange} handleShow = {this.props.handleShow} bio={bios[11]}/></Col>
      </Row>
      <Row>
        <Col><BeastImage handleChange = {this.props.handleChange} handleShow = {this.props.handleShow} bio={bios[12]}/></Col>
        <Col><BeastImage handleChange = {this.props.handleChange} handleShow = {this.props.handleShow} bio={bios[13]}/></Col>
        <Col><BeastImage handleChange = {this.props.handleChange} handleShow = {this.props.handleShow} bio={bios[14]}/></Col>
        <Col><BeastImage handleChange = {this.props.handleChange} handleShow = {this.props.handleShow} bio={bios[15]}/></Col>
      </Row>
      <Row>
        <Col><BeastImage handleChange = {this.props.handleChange} handleShow = {this.props.handleShow} bio={bios[16]}/></Col>
        <Col><BeastImage handleChange = {this.props.handleChange} handleShow = {this.props.handleShow} bio={bios[17]}/></Col>
        <Col><BeastImage handleChange = {this.props.handleChange} handleShow = {this.props.handleShow} bio={bios[18]}/></Col>
        <Col><BeastImage handleChange = {this.props.handleChange} handleShow = {this.props.handleShow} bio={bios[19]}/></Col>
      </Row>
    </Container>
    );
  }
}


  class BeastImage extends Component {

   
  
    constructor(props) {
      super(props);
      this.state = {
        count: 0,
        
      }
    }
    handleClick = (newBeast)=> {
      const countUp = this.state.count + 1;
      this.setState({
        count: countUp,
      });
      this.props.handleChange(newBeast);
      this.props.handleShow(newBeast);
    }
  
    render() {
      return(
        <>
          
          <Image  onClick = { () => this.handleClick(this.props.bio)} src={this.props.bio.image_url} alt="other One Beast" rounded fluid/>
          
          <h3>{this.state.status}</h3>
          <h3 >{this.props.bio.title + ' : ' + ' x ' + this.state.count + '.'}</h3>
  
        </>
      )
    }
  }
  
  





export default Main;

