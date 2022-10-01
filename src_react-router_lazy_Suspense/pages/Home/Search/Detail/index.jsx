import React from "react";
import qs from 'qs'
export default class Detail extends React.Component {
  render() {
    const obj = qs.parse(this.props.location.search.slice(1))
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
