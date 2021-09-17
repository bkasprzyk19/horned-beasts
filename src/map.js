import 'bootstrap/dist/css/bootstrap.min.css';
import  Container  from 'react-bootstrap/Container';
import { Component } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import beastBios from './data.json';
import HornedBeastM from './hornedBeast.js';


class Map extends Component {

  render(){

  return (
   
  <Container>
    <Row>{beastBios.map((beast, index) => (<HornedBeastM key={index} title={beast.title} image={beast.image_url} description={beast.description} /> ))}
    </Row>
    </Container>


    
);
}}
export default Map;