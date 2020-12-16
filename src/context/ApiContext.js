import React, { Component } from "react";

export const ApiContext = React.createContext();

class ApiProvider extends Component {
  state = {
    example: "apliexample",
    data: [],
  };
  /* functions */
  test = () => {
    console.log(this.state.example);
  };
  /* api calls */
  componentDidMount() {}

  render() {
    return (
      <ApiContext.Provider
        value={{
          state: this.state,
          test: this.test,
          /* if you write new functions write them here as i did with the test function */
        }}
      >
        {this.props.children}
      </ApiContext.Provider>
    );
  }
}
export default ApiProvider;
