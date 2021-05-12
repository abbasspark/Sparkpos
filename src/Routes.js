import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Services from "./components/Services";
import Contact from "./components/Contact";
import About from "./components/About";
import Download from "./components/Download";
import NotFound from "./components/404";

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/services" component={Services} />
      <Route exact path="/contact" component={Contact} />
      <Route exact path="/about" component={About} />
      <Route exact path="/download" component={Download} />
      <Route component={NotFound} />
    </Switch>
  );
}
