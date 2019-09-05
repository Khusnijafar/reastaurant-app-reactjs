import React from "react";
import { Sidebar, Menu, Divider, Button } from "semantic-ui-react";

class LeftPanel extends React.Component {
  render() {
    return (
      <Sidebar
        as={Menu}
        icon="labeled"
        inverted
        vertical
        visible
        width="very thin"
      >
        {/* <Divider /> */}
        <Button icon="align justify" size="small" color="white" style={{marginTop:20}}/>
        <Divider />
        <Button icon="utensils" size="small" color="orange" />
        <Button icon="calendar check outline " size="small" color="brown" style={{marginTop:30}}/>
        <Button icon="plus" size="small" color="blue" style={{marginTop:30}}/>
      </Sidebar>
    );
  }
}

export default LeftPanel;