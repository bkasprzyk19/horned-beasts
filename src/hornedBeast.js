import { Component } from 'react';
import  Container from 'react-bootstrap/Container';
import beastBios from './data.json';
import  Button from 'react-bootstrap/Button';
import  Modal from 'react-bootstrap/Modal';
import Image from 'react-bootstrap/Image';



class hornedBeastM extends Component {
  render() {
    const bios = this.props.beastBios;
      
        return (
          <Modal show={this.props.show} hide={this.props.hide}>
            <Modal.Header closeButton>
              <Modal.Title>{this.props.title}</Modal.Title>
            </Modal.Header>
              <Modal.Body>
              <hornedBeastM bio={this.props.hornedBeast}/>}  
              <p>{'Description: ' + this.props.bio.description}</p>
              <p>{'# of horns: ' + this.props.bio.horns}</p></Modal.Body>
              <Modal.Footer>
                <Button varient="primary" onClick={this.props.hide}>
                  Close
                </Button>
                
              </Modal.Footer>
            </Modal>
          );
  }
}

class hornedBeast extends Component {
  render (){
    return (
      <>
      <h2>{this.props.bio.title}</h2>
      <Image onClick={this.handleClick} src={this.props.bio.image_url} alt='nothing special'/>
      <p>{this.props.bio.description}</p>
      </>
    );
  }
}
    
      
      

    

    
    
  


export default hornedBeastM;