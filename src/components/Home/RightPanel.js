import React from "react";
import { Segment, Accordion, Header, Icon } from "semantic-ui-react";

class MetaPanel extends React.Component {
  state = {

  };

//   setActiveIndex = (event, titleProps) => {
//     const { index } = titleProps;
//     const { activeIndex } = this.state;
//     const newIndex = activeIndex === index ? -1 : index;
//     this.setState({ activeIndex: newIndex });
//   };

  render() {
    const { activeIndex, privateChannel } = this.state;

    if (privateChannel) return null;

    return (
      <Segment>
        <Header as="h3" attached="top" textAlign='center'>
          Cart
        </Header>
            
      </Segment>
    );
  }
}

export default MetaPanel;