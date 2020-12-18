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
    Promise.all([
      fetch(
        "https://trefle.io/api/v1/plants?token=lFM81UTKUliWbUM-9QDM0m3X8jPYbyFlAQrIQAFcRZA&"
      ),
      fetch(
        "https://trefle.io/api/v1/plants?&token=lFM81UTKUliWbUM-9QDM0m3X8jPYbyFlAQrIQAFcRZA&filter[edible]=true"
      ),
    ])
      .then(([res1, res2]) => Promise.all([res1.json(), res2.json()]))
      .then(([data1, data2]) => {
        this.setState({
          ediblePlant: data2.data,
          notEdible: data1.data,
          isLoading: false,
        });
      });
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
