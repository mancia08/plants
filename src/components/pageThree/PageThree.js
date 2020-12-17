import React, { Component } from "react";
import Navbar from "./../navbar/Navbar";
import Footer from "./../footer/Footer";
import "./PageThree.css";

class PageThree extends Component {
  state = {
    notEdible: [],
  };
  // "https://trefle.io/api/v1/plants?token=lFM81UTKUliWbUM-9QDM0m3X8jPYbyFlAQrIQAFcRZA"
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

  render() {
    return (
      <div className="backgroundContainer">
        <Navbar />
        <h1>Not Edible</h1>
        <div className="flexContainer">
          {this.state.notEdible.map((names, index) => (
            <div className="plantContainer" key={index}>
              <h3>{names.common_name}</h3>
              <img
                id="pageOneImage"
                src={names.image_url}
                alt={names.scientific_name}
              ></img>
            </div>
          ))}
        </div>
        <Footer />
      </div>
    );
  }
}
export default PageThree;
