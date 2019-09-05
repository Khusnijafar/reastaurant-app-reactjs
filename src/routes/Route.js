import React, {Component} from 'react';
import Home from '../components/Home/Home';
import Register from '../components/Auth/Register';
import Login from '../components/Auth/Login';
import HistoryTransaction from '../components/History/HistoryTransaction'
import Spinner from '../Spinner'

import { Route , BrowserRouter as Router } from "react-router-dom";

class Routes extends Component {
  render() {
    return this.props.isLoading ? <Spinner /> :(
        <div>
        <Router>
          <Route exact path='/register' component={Register} />
          <Route exact path='/login' component={Login} />
          <Route exact path="/" component={Home}/>
          <Route exact path={"/history"} component={HistoryTransaction}/>
        </Router>
        </div>
    );
  }
};

export default Routes