
import { Component } from "react";
import Form from 'react-bootstrap/Form';

class BeastForm extends Component {

  handleFormChange = (event) => {
    const selection = event.target.value;
    this.props.onSelect(selection);
  }

  render() {
    return (
      <Form>
        <Form.Select onChange={this.handleFormChange}>
          <option value="all">All</option>
          <option value="byHorns">By Horns</option>
        </Form.Select>
      </Form>
    )
  }
}

export default BeastForm;