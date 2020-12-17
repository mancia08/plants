import HomePage from "../home/HomePage";
import PageOne from "../pageOne/PageOne";
import React, { Component } from "react";
import { Context } from "../../Context";

const Landing = () => (
  <Context.Consumer>
    {(value) => (
      <main>
        {value.state.isLandingOpen ? (
          <HomePage action={value.closeLanding} />
        ) : (
          <PageOne />
        )}
      </main>
    )}
  </Context.Consumer>
);

export default Landing;
