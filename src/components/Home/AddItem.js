import React, {Component} from 'react';
import {Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Col, Input, ModalFooter } from 'reactstrap';
import swal from 'sweetalert';
import { addItem } from '../redux/actions/item';
import { connect } from 'react-redux'
import './App.css'

class AddItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      title: '',
      image: '',
      selectedFile: '',
      price: '',
    };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  onChangeFile = (e) => {
    console.log(e.target.file)
    this.setState({
      selectedFile: e.target.files[0],
      loaded: 0,
    })
  } 

  handleSubmit = async (e) => {
    e.preventDefault()
    const dataFile = new FormData()
    dataFile.append('image', this.state.selectedFile)
    dataFile.append('title', this.state.title)
    dataFile.append('price', this.state.price)

    console.log(this.state);
    await this.props.dispatch(addItem(dataFile))
      .then((res) => {
        console.log(res.data);
        swal({
          title: "Insert",
          text: "Insert Success",
          icon: "success",
          button: "oke",
        })
      })
      .catch(
        swal({
          title: "Insert",
          text: "Insert Failed",
          icon: "danger",
          button: "oke",
        })
      )
      this.props.history.push('/')                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    return (
      <div>
        <div className="button-add">
          <Button onClick={this.toggle} >{this.props.buttonLabel}Add Item</Button>
        </div>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className="{this.props.className} modal-lg">
          <Form onSubmit={this.handleSubmit}>
            <ModalHeader toggle={this.toggle}><b>Add Item</b></ModalHeader>
              <ModalBody>
                <FormGroup row>
                  <Label for="exampleEmail" sm={3} size="lg">Image</Label>
                    <Col sm={9}>
                      <Input type="file" name="file" id="file" placeholder="Image..." bsSize="lg" onChange={this.onChangeFile} />
                    </Col>
                </FormGroup>
                <FormGroup row>
                  <Label for="exampleEmail" sm={3} size="lg">Title</Label>
                    <Col sm={9}>
                      <Input type="text" name="title" id="title" placeholder="Title..." bsSize="lg" value={this.state.title} onChange={this.handleChange} />
                    </Col>
                </FormGroup>
                <FormGroup row>
                  <Label for="exampleEmail" sm={3} size="lg">Price</Label>
                    <Col sm={9}>
                      <Input type="text" name="price" id="price" placeholder="Price..." bsSize="lg" value={this.state.price} onChange={this.handleChange} />
                    </Col>
                </FormGroup>
                </ModalBody>
             <ModalFooter>
              <Button type="submit" color="primary" onClick={this.toggle}><span className="button-save">Save</span></Button>
             </ModalFooter>
            </Form>
        </Modal>
      </div>
    )
  }
}

const mapStateToProps = state => {
	return {
		itemList: state.item
	};
};

export default connect(mapStateToProps)(AddItem);