// create your App component here
import React, { Component } from "react";

export default class App extends Component {
  componentDidMount() {
    fetch("http://api.open-notify.org/astros.json")
      .then(resp => resp.json())
      .then(json_resp => console.log(json_resp))
      .catch(error => {
        console.error(error);
      });
  }

  render() {
    return console.log;
  }
}
