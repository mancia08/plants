import React, { Component } from "react";
import Navbar from "./../navbar/Navbar";
import Footer from "./../footer/Footer";
import "./PageTwo.css";

const ediblePlants =
  "https://trefle.io/api/v1/plants?&token=lFM81UTKUliWbUM-9QDM0m3X8jPYbyFlAQrIQAFcRZA&filter[edible]=true";

const apiCaller = (url) => fetch(url).then((result) => result.json());

class PageTwo extends Component {
  state = {
    ediblePlant: [],
    apiLoading: true,
  };

  componentDidMount() {
    apiCaller(ediblePlants).then((data) =>
      this.setState({
        ediblePlant: data.data,
        apiLoading: false,
      })
    );
  }

  render() {
    return (
      <div className="backgroundContainer">
        <Navbar />
        <h1>Edible Plants</h1>
        <div className="flexContainer">
          {this.state.apiLoading ? (<h1>Api Loading ...</h1>
           ) :
           (
          this.state.ediblePlant.map((iterator, index) => (
            <div className="plantContainer" key={index}>
              <h3>{iterator.common_name}</h3>
              <img
                id="pageImage"
                src={iterator.image_url}
                alt={iterator.scientific_name}
              ></img>
            </div>
          )))}
        </div>
        <Footer />
      </div>
    );
  }
}

export default PageTwo;
