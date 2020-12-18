import Navbar from "./../navbar/Navbar";
import Footer from "./../footer/Footer";
import "../pageThree/PageThree";
import { Context } from "../../Context";

const PageThree = () => (
  <Context.Consumer>
    {(value) => (
      <div className="backgroundContainer">
        <Navbar />
        <h1>Edible</h1>
        <div className="flexContainer">
          {value.state.isLoading ? (
            <div className="spinner-container">
              <p className="spinner">LOADING PAGE!</p>
            </div>
          ) : (
            value.state.ediblePlant.map((names, index) => (
              <div className="plantContainer" key={index}>
                <h3>{names.common_name}</h3>
                <img
                  id="pageOneImage"
                  src={names.image_url}
                  alt={names.scientific_name}
                ></img>
              </div>
            ))
          )}
        </div>
        <Footer />
      </div>
    )}
  </Context.Consumer>
);

export default PageThree;
