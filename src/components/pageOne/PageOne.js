import Navbar from "./../navbar/Navbar";
import Footer from "./../footer/Footer";
import { Context } from "./../../context/Context";

const PageOne = () => (
  <Context.Consumer>
    {(value) => (
      <>
        <Navbar />
        <h1>I AM 1</h1>
        <button onClick={value.test}>context function run example. i console log the world example</button>
        <Footer />
      </>
    )}
  </Context.Consumer>
);

export default PageOne;
