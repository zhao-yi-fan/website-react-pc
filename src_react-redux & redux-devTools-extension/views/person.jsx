import { nanoid } from "nanoid";
import React from "react";
import { connect } from "react-redux";
import { addPerson } from "../redux/action/person";

class Person extends React.Component {
  addPerson = () => {
    this.props.addPerson({
      id: nanoid(),
      name: this.nameEl.value,
      age: this.ageEl.value,
    });
    this.nameEl.value = "";
    this.ageEl.value = "";
  };
  render() {
    console.log(this.props);
    return (
      <>
        <p>总和为：{this.props.count}</p>
        <input ref={(c) => (this.nameEl = c)} type="text" />
        <input ref={(c) => (this.ageEl = c)} type="text" />
        <button onClick={this.addPerson}>加人</button>
        <ul>
          {this.props.persons.map((item, index) => {
            return (
              <li key={index}>
                {item.name} -- {item.age}
              </li>
            );
          })}
        </ul>
      </>
    );
  }
}

export default connect((state) => ({ 
  count: state.count,
  persons: state.persons
 }), {
  addPerson,
})(Person);
