import React from "react";
import { Link, Route } from "react-router-dom";
import Detail from "./Detail";
export default class AChild extends React.Component {
  state = {
    aboutArr: [
      {
        id: 100,
        title: "100",
      },
      {
        id: 101,
        title: "101",
      },
      {
        id: 102,
        title: "102",
      },
    ],
  };
  push = (id, title) => {
    this.props.history.push(`/home/c/detail`, {
      id,
      title,
    });
  };
  replace = (id, title) => {
    this.props.history.replace(`/home/c/detail`, {
      id,
      title,
    });
  };
  render() {
    return (
      <div
        style={{
          border: "1px solid #ccc",
        }}
      >
        <ul>
          {this.state.aboutArr.map((item) => {
            return (
              <li key={item.id}>
                <span>id:{item.id}</span>
                <Link
                  to={{
                    pathname: `/home/c/detail`,
                    state: {
                      id: item.id,
                      title: item.title,
                    },
                  }}
                >
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
        <Route path="/home/c/detail" component={Detail}></Route>
      </div>
    );
  }
}
