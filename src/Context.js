import React, { Component } from "react";

export const Context = React.createContext();

class Provider extends Component {
  state = { isLandingOpen: true };

  closeLanding = () => this.setState({ isLandingOpen: false });

  render() {
    return (
      <Context.Provider
        value={{
          state: this.state,
          closeLanding: this.closeLanding,
        }}
      >
        {this.props.children}
      </Context.Provider>
    );
  }
}

export default Provider;
