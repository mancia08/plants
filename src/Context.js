import React, { Component } from "react";

export const Context = React.createContext();

class Provider extends Component {
  state = {
    isLandingOpen: true,
    isLoading: true,
    ediblePlant: [],
    notEdible: [],
  };

  componentDidMount() {
    fetch(
      "https://trefle.io/api/v1/plants?token=lFM81UTKUliWbUM-9QDM0m3X8jPYbyFlAQrIQAFcRZA&"
    )
      .then((res) => res.json())
      .then((data) =>
        this.setState({
          notEdible: data.data,
        })
      );
  }

  componentDidUpdate() {
    fetch(
      "https://trefle.io/api/v1/plants?&token=lFM81UTKUliWbUM-9QDM0m3X8jPYbyFlAQrIQAFcRZA&filter[edible]=true"
    )
      .then((res) => res.json())
      .then((data) =>
        this.setState({ ediblePlant: data.data, isLoading: false })
      );
  }

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
