import Navbar from "./../navbar/Navbar";
import Footer from "./../footer/Footer";
import "./PageThree.css";
import { Context } from "../../Context";

const PageThree = () => (
  <Context.Consumer>
    {(value) => (
      <div className="backgroundContainer">
        <Navbar />
        <h1>Not Edible</h1>
        <div className="flexContainer">
          {value.state.isLoading ? (
            <p className="spinner">LOADING PAGE!</p>
          ) : (
            value.state.notEdible.map((names, index) => (
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
