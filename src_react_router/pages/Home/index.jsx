import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import BChild from "./BChild";
import AChild from "./AChild";
import MyNavLink from "../../components/MyNavLink";
export default class Home extends React.Component {
  render() {
    return (
      <>
        Home
        <br />
        <MyNavLink to="/home/a">AChild</MyNavLink>
        <MyNavLink to="/home/b">BChild</MyNavLink>
        <Switch>
          <Route path="/home/a" component={AChild}></Route>
          <Route path="/home/b" component={BChild}></Route>
        </Switch>
        <Redirect to="/home/a" />
      </>
    );
  }
}
