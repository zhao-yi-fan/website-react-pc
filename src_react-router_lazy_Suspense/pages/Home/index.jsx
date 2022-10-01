import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Search from "./Search";
import Params from "./Params";
import State from "./State";
import MyNavLink from "../../components/MyNavLink";
export default class Home extends React.Component {
  forWard = () => {
    this.props.history.goForward();
  };
  goBack = () => {
    this.props.history.goBack();
  };
  go = () => {
    this.props.history.go(2);
  };
  render() {
    return (
      <>
        Home
        <br />
        <MyNavLink to="/home/a">Params传参</MyNavLink>
        <MyNavLink to="/home/b">search传参</MyNavLink>
        <MyNavLink to="/home/c">state传参</MyNavLink>
        <Switch>
          <Route path="/home/a" component={Params}></Route>
          <Route path="/home/b" component={Search}></Route>
          <Route path="/home/c" component={State}></Route>
          <Redirect to="/home/a" />
        </Switch>
        <button onClick={this.goBack}>《后退</button>
        <button onClick={this.forWard}>前进》</button>
        <button onClick={this.go}>go</button>
      </>
    );
  }
}
