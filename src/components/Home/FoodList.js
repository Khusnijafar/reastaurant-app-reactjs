import React, { Component } from 'react'
// import {  Col,  } from 'reactstrap';
import {Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Col, Input, ModalFooter, Container, Row, CardImg, CardBody, Card } from 'reactstrap';
import './App.css'
import { connect } from 'react-redux';
import { addCart, getCart, removeCart, plusCart, minusCart } from '../redux/actions/cart'
import { getItem } from '../redux/actions/item'

function text(text) {
    if (text.length > 25) {
      let textSplit = text.substr(0, 20)
      return `${textSplit} ...`
    } else {
      let textSplit = text
      return `${textSplit}`
    }
}

class FoodList extends Component {
    constructor(props) {
        super(props);
        this.state = {
          modal: false,
        };
        this.toggle = this.toggle.bind(this);
      }
    
    handleClickImage = (id_item) => {
        console.log(id_item)
         this.props.dispatch(addCart({
            id_item: id_item,
            id_user: this.props.id_user
        }))
        .then(() => {
            window.location.reload('/')
        })    
    }

    handleRefresh = (id_item) => {
        let cart = this.props.cart.find((item) => {
            return item.id_item = id_item
        })
        if (cart) {
            this.props.dispatch(removeCart(cart.id_cart))
                .then(() => {
                    window.location.reload('/')
                })
        }
    }

    getItem = () => {
        this.props.dispatch(getItem())
    }

    componentDidMount = async () => {
        await this.props.dispatch(getCart())
    }

    handlePlusCart = async (item) => {
        await this.props.dispatch(plusCart(item.id_cart)) 
    }

    handleMinusCart = async (item) => {
        await this.props.dispatch(minusCart(item.id_cart))
    }

    toggle() {
        this.setState(prevState => ({
          modal: !prevState.modal
        }));
    }

    render() {
        let totalCart = 0

        return (
            <Container >
                <Row>
                {this.props.itemList.map((item, index) =>
                    <Col md={3}>
                        <div className="list">
                            <Card >
                                {!this.props.cart.find((item2) => {
                                return item2.id_item === item.id_item
                                }) ? <div onClick={() => this.handleClickImage(item.id_item)}>
                                <CardImg img className='image' height='200px' width='200px' 
                                src={item.image} alt='image'
                                /> </div> : <div onClick={() => this.handleRefresh(item.id_item)}>
                                <CardImg img className='img' height='200px' width='200px'
                                src={item.image} alt='image' 
                                /></div>}                      
                                <CardBody>
                                    <p style={{fontWeight:"bold", textAlign:'center'}}>{text(item.title)}</p>
                                    <p style={{fontWeight:"bold", textAlign:'center'}}>Rp. {item.price}</p>
                                </CardBody>
                            </Card>
                        </div>
                    </Col>
                    )}
                </Row>
                <div className='col-md-12'>
                    <div className='body-right bg-white'>
                        <div className='container-cart'>
                            {(this.props.cart.length === 0) ? 
                                <div className='empty'>
                                    <img src={require('../../images/utensils.jpg')} alt='' width='500px'/>
                                    <h3>Your Cart is Empty</h3>
                                </div> :
                                <div>
                                    {this.props.cart.map((item) => 
                                    <div className='row mb-3'>
                                        <div className='display-none'>{totalCart += item.quantity * item.price}</div>
                                        <div className='row mb-3'>
                                        <div className='img-cart'>
                                            <img src={item.image} alt='/' className="rounded mb-0" />
                                        </div>
                                    </div>
                                    <div className='col-md-9'>
                                        <h5 fontWeight='bold'>{item.title}</h5>
                                        <div className='row'>
                                            <div className='col-md-6'>
                                                <button className='btn btn-min' onClick={() => this.handleMinusCart(item)}>-</button>
                                                <input type='text' className='quantity' value={'' + item.quantity}/>
                                                <button className='btn btn-plus' onClick={() => this.handlePlusCart(item)}>+</button> 
                                            </div>
                                            <div className='col-md-6'>
                                                <p className='price-card'>Rp. {item.price * item.quantity}</p>
                                            </div>
                                        </div>
                                    </div> 
                                     </div>   
                                    )}
                                </div>
                            }
                        </div>
                        <div className='container-checkout p-4'>
                            <div className='row'>
                                <div className='col-md-7'>
                                    <h5>Total :</h5>
                                </div>
                                <div className='col-md-5'>
                                    <h5 className='total'>Rp. {totalCart}</h5>
                                </div>
                            </div>
                            <p>*Belum termasuk PPN</p>
                            <button type="button" className="ui inverted primary button btn-lg btn-block" data-toggle="modal" data-target=".bd-payment-modal-lg" onClick={this.toggle}>Checkout</button>
                            <button type="button" className="ui inverted red button btn-lg btn-block" width='50px' >Cancel</button>
                        </div>
                    </div>
                </div>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className="{this.props.className} modal-lg">
                    <Form onSubmit={this.handleSubmit}>
                        <ModalHeader toggle={this.toggle}><b>Checkout</b></ModalHeader>
                <ModalBody>
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
            </Container>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        id_user: state.user.id_user,
        username: state.user.username,
        token: state.user.token,
        cart: state.cart.cartList
    }
}

export default connect(mapStateToProps)(FoodList)
