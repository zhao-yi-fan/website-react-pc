import React from "react";
import { NavLink } from "react-router-dom";

export default class MyNavLink extends React.Component {
  render() {
    return (
      <NavLink activeClassName="a123" {...this.props} />
    );
  }
}
