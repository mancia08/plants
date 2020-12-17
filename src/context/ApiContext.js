import React, { Component } from "react";

export const ApiContext = React.createContext();

class ApiProvider extends Component {
  /* STATE */
  state = {
    apiData: [],
    isLoaded: false,
  };

  /* API CALL */
  componentDidMount() {
    /* add your api link inside fetch */
    fetch("https://api.chucknorris.io/jokes/random")
      .then((response) => response.json())
      .then((data) => this.setState({ apiData: data, isLoaded: true }));
  }

  render() {
    return (
      <ApiContext.Provider
        value={{
          state: this.state,
        }}
      >
        {this.props.children}
      </ApiContext.Provider>
    );
  }
}
export default ApiProvider;
