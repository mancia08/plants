import Navbar from "./../navbar/Navbar";
import Footer from "./../footer/Footer";

const HomePage = (props) => (
  <>
    <Navbar />
    <h1>I AM THE BEAUTIFUL HOMEPAGE</h1>
    <button onClick={props.action}>close the landing page</button>
    <Footer />
  </>
);

export default HomePage;
