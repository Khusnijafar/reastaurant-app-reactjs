import React, { Component } from 'react'
import { Container, Row, Col, CardImg, CardBody, Card } from 'reactstrap';
import './App.css'
import { connect } from 'react-redux';
import { addCart } from '../redux/actions/cart'

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

    handleClickImage = (id_item) => {
        this.props.dispatch(addCart({
            id_item: id_item,
            id_user: this.props.id_user
        }))
    }

    render() {
        return (
            <Container >
                <Row>
                {this.props.itemList.map((item, index) =>
                    <Col md={3}>
                        <div className="list">

                            <Card onClick={() =>this.handleClickImage(item.id_item)}>
                                <div>
                                <CardImg img className='img' height='150px' width='150px' 
                                    src={item.image} alt='image'
                                />
                                <CardBody>
                                    <p style={{fontWeight:"bold", textAlign:'center'}}>{text(item.title)}</p>
                                    <p style={{fontWeight:"bold", textAlign:'center'}}>Rp. {item.price}</p>
                                </CardBody>
                                </div>
                            </Card>
                        </div>
                    </Col>
                    )}
                </Row>
            </Container>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        id_user: state.user.id_user,
        username: state.user.username,
        token: state.user.token
    }
}

export default connect(mapStateToProps)(FoodList)
