import React from "react";
import { Link, Route } from "react-router-dom";
import Detail from "./Detail";
export default class AChild extends React.Component {
  state = {
    messageArr: [
      {
        id: 1,
        title: "001",
      },
      {
        id: 2,
        title: "002",
      },
      {
        id: 3,
        title: "003",
      },
    ],
  };
  push = (id, title) => {
    this.props.history.push(`/home/a/detail/${id}/${title}`);
  };
  replace = (id, title) => {
    this.props.history.replace(`/home/a/detail/${id}/${title}`);
  };
  render() {
    return (
      <div
        style={{
          border: "1px solid #ccc",
        }}
      >
        <ul>
          {this.state.messageArr.map((item) => {
            return (
              <li key={item.id}>
                <span>id:{item.id}</span>
                <Link to={`/home/a/detail/${item.id}/${item.title}`}>
                  {item.title}
                </Link>
                <button onClick={() => this.push(item.id, item.title)}>
                  push
                </button>
                <button onClick={() => this.replace(item.id, item.title)}>
                  replace
                </button>
              </li>
            );
          })}
        </ul>
        <hr />
        <Route path="/home/a/detail/:id/:title" component={Detail}></Route>
      </div>
    );
  }
}
