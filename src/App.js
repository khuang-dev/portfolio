import React, { Component } from "react";
import "./App.css";
import { CssBaseline } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/styles";
import theme from "./theme";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Navbar />
        <Banner />
      </ThemeProvider>
    );
  }
}

export default App;
