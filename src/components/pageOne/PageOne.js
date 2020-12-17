import styled from "styled-components";
import Navbar from "./../navbar/Navbar";
import Footer from "./../footer/Footer";
import mushroom from "./mushroom.png";

const BannerImg = styled.div`
  width: 100vw;
  height: 30vh;
  background: url(${mushroom}) center center;
  background-size: contain;
  background-repeat: no-repeat;
`;
const BlackTitle = styled.h2`
  color: black;
`;
const Text = styled.p`
  margin: 3rem;
  text-align: left;
`;

const Bullets = styled.li`
  text-align: left;
  margin-left: 5rem;
`;

const PageOne = () => (
  <>
    <Navbar />
    <BannerImg /> {/* div */}
    <BlackTitle>Our Story</BlackTitle> {/* h2 */}
    <Text>
      {/* p */}
      During the Paleolithic or "Old Stone Age" period, early humans lived in
      caves or simple huts or tepees and were hunters and gatherers. They used
      basic stone and bone tools, as well as crude stone axes, for hunting birds
      and wild animals. They cooked their prey, including woolly mammoths, deer
      and bison, using controlled fire. They also fished and collected berries,
      plants, herbs fruit and nuts.
    </Text>
    <Text>
      {/* p */}
      We believe most likely many humans from this era made the fatal mistake of
      not properly identifying a poisonous plant, herb or berry. With this
      application we will be saving lives and tepee toilets by giving our users
      an application that allows them to:
      <Bullets>Properly identify your plant source via an image</Bullets>
      <Bullets>Know species, common name and family of the plant</Bullets>
      <Bullets>Know the toxicity level</Bullets>
    </Text>
    <Footer />
  </>
);

export default PageOne;
