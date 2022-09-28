import React from "react";
export default class Detail extends React.Component {
  render() {
    const { id, title } = this.props.match.params;
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
