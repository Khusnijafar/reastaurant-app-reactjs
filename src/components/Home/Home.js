import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getItem } from '../redux/actions/item'
import { Grid } from 'semantic-ui-react';
import HeaderA from './Header'
import LeftPanel from './LeftPanel';
import RightPanel from './RightPanel';
import './App.css'
import FoodList from './FoodList';
import AddItem from './AddItem'

class Home extends Component {

    componentDidMount = async () => {
        await this.props.dispatch(getItem())
    }

    render() {
        return (
            <div>                
                <HeaderA />
                    <Grid columns="equal" className="app" style={{ background: "#eee" }}>
                        <LeftPanel />
                            <Grid.Column style={{ marginLeft: 80}} >
                                <FoodList itemList={this.props.itemList} />
                                    <AddItem />
                            </Grid.Column>
                            {/* <Grid.Column width={5}>
                                <RightPanel />
                            </Grid.Column> */}
                    </Grid>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        itemList: state.item.itemList
    }
}

export default connect(mapStateToProps)(Home)
