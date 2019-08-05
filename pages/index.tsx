import React, { Component } from "react";
import content from "../content/home.md";
import { Typography, Container } from "@material-ui/core";
import NavBar from "../components/NavBar";
import Page from "../layouts/main";

const Home = () => {
  return (
    <Page>
      <div>This is home page;</div>
    </Page>
  );
};

export default Home;
