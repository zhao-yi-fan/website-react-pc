import React from "react";
import { withRouter } from "react-router-dom";
class Header extends React.Component {
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
    console.log(this.props);
    return (
      <>
        <h2>Header</h2>
        <div>
          <button onClick={this.goBack}>《后退</button>
          <button onClick={this.forWard}>前进》</button>
          <button onClick={this.go}>go</button>
        </div>
        <hr />
      </>
    );
  }
}
// withRouter可以加工一般组件，让一般组件也具备路由组件所特有的api
export default withRouter(Header);
