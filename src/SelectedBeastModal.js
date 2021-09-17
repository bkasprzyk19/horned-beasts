import { Component } from "react";
import Modal from 'react-bootstrap/Modal';
import  Card from "react-bootstrap/Card";
import Button from 'react-bootstrap/Button';


class SelectedBeastModal extends Component {
  render() {
    
      
    return (
          <Modal show={this.props.show} onHide={this.props.handleHide}>
            <Modal.Header closeButton>
              <Modal.Title>Horned Beast!</Modal.Title>
            </Modal.Header>
              <Modal.Body>

              <Card>
                <Card.Img variant="top" src={this.props.beast.image_url} alt={this.props.beast.description} />
                <Card.Body>
                  <Card.Title>{this.props.beast.title}</Card.Title>
                  <Card.Text>
                    {this.props.beast.description}
                  </Card.Text>
                </Card.Body>
              </Card>
      
              </Modal.Body>
              <Modal.Footer>
                <Button variant="primary" onClick={this.props.handleHide}>
                  Close
                </Button>
                
              </Modal.Footer>
            </Modal>
          );
  }}
  export default SelectedBeastModal;