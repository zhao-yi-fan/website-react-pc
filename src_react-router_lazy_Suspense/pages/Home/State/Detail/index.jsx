import React from "react";
export default class Detail extends React.Component {
  render() {
    const obj = this.props.location.state || {}
    const { id, title } = obj;
    console.log(this.props);
    return (
      <>
        <p>Detail</p>
        <span>{id}</span>
        <span>{title}</span>
      </>
    );
  }
}
