
import { Component } from 'react';
import  Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import HornedBeast from './hornedBeast.js';
import beastsData from './data.json';




class Main extends Component {


  sortByHorns = (beastsData) => {
    const newArr= beastsData.sort(function(x,y) {
      return x.horns-y.horns;
    });
    return newArr;
  };

    handleSelect = (choice, newArr) => {

      let updatedBeastsData;

      if (choice === 'all') {
        updatedBeastsData = beastsData;
        return updatedBeastsData;
      } else if (choice === 'byHorns'){
        updatedBeastsData = newArr;
        return updatedBeastsData;
      }else {
        console.log('didnt read for filter');
      }
    }
  
    

  render () {
    return ( 
    <Container fluid>
      <Row xs={1} sm={2} md={3} lg={4}>
        {beastsData.map(beast => (<HornedBeast key={beast.title} beast={beast} handleChange={this.props.handleChange} handleShow={this.props.handleShow}/>))}
      </Row>
      </Container>)
      
}}



  





export default Main;

