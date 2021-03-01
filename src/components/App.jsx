import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import {BrowserRouter as Router, Route} from "react-router-dom";
import Header from "./Header";
import Section from "./Section";
import Home from "./Home";
import Items from "../Data/HomeData";

function App() {
  return (
    <Router>
      <React.Fragment>
        <CssBaseline />
        <Route path='/' exact>
          <Header />
          <Home />
          {Items.map((item) => (
            <Section
              key={item.id}
              name={item.name}
              background={item.background}
              content={item.content}
            />
          ))}
        </Route>
      </React.Fragment>
    </Router>
  );
}

export default App;
