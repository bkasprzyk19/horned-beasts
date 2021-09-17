import { Component } from 'react';

import  Button from 'react-bootstrap/Button';

import  Card  from 'react-bootstrap/Card';



class HornedBeast extends Component {

  
  constructor(props) {
      super(props);
      this.state = {
        count: 0,
        
      }
    }
    handleClick = ()=> {
      
      
      this.props.handleChange(this.props.beast);
      this.props.handleShow();
    }

    handleCountClick = () => {
      const countUp = this.state.count + 1;
      this.setState({
        count: countUp,
      });
    }
  
    render() {
      return(
        <Card>
          <Card.Img onClick={this.handleClick} varient="top" src={this.props.beast.image_url} alt={this.props.beast.description} />
          <Card.Body>
            <Card.Title>{this.props.beast.title}</Card.Title>
            <Card.Text>
              {this.props.beast.description}
            </Card.Text>
            <Button onClick={this.handleCountClick} varient="danger">{this.state.count}</Button>
          </Card.Body>
        </Card>
      )
    }
  }
  




// class hornedBeast extends Component {
//   render (){
//     return (
//       <>
//       <h2>{this.props.bio.title}</h2>
//       <Image onClick={this.handleClick} src={this.props.bio.image_url} alt='nothing special'/>
//       <p>{this.props.bio.description}</p>
//       </>
//     );
//   }
// }
    
      
      

    

    
    
  


export default HornedBeast;