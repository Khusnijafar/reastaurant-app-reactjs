import React from "react";
import { Segment, Accordion, Header, Icon } from "semantic-ui-react";
import { connect } from 'react-redux'
import { getCart } from '../redux/actions/cart'

class RightPanel extends React.Component {
  state = {

  };

  render() {
    return (
      <Segment>
        <Header as="h3" attached="top" textAlign='center'>
          Cart
        </Header>
        {/* <div>
          {(this.props.cart.length === 0) ?
           <div className='empty'>
             <img src={require('../../images/utensils.jpg')} alt='w'/>
           </div> : 
            <div></div>}
        </div> */}
      </Segment>
    );
  }
}

export default RightPanel;