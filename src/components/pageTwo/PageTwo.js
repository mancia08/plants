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
            <p className="spinner">LOADING PAGE!</p>
          ) : (
            value.state.ediblePlant.map((names, index) => (
              <div className="plantContainer" key={index}>
                <h3>{names.common_name}</h3>
                <img
                  id="pageImage"
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
