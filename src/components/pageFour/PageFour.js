import Navbar from "./../navbar/Navbar";
import Footer from "./../footer/Footer";
import { Context } from "./../../context/Context";
import { ApiContext } from "../../context/ApiContext";


/* WHEN YOU NEED DATA OF API CALL FOR api.something WHEN YOU NEED DATA FROM CONTEXT CALL value.something */


const PageFour = () => (
  <Context.Consumer>
    {(value) => (
      <ApiContext.Consumer>
        {(api) => (
          <>
            <Navbar />
            <>
            MY CONTENT
            </>
            <Footer />
          </>
        )}
      </ApiContext.Consumer>
    )}
  </Context.Consumer>
);

export default PageFour;
