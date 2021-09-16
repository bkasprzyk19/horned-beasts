import 'bootstrap/dist/css/bootstrap.min.css';
import  Container  from 'react-bootstrap/Container';
import { Component } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import beastBios from './data.json';


class Map extends Component {

  render(){
const beastlyBios = beastBios;

  

  return (
   const biosRow = () => (
  <div>
    <Row>{beastlyBios.map(title => <Col key={title}> {title}</Col> )}</Row></div>);


    
)
}}
export default Map;