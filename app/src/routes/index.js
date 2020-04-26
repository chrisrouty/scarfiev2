//Basic
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link, Redirect, useParams, useRouteMatch } from "react-router-dom";

//View
import Home from '../views/Home';
import Cgv from '../views/Cgv';
import DetailProduct from '../views/DetailProduct'; 
 

export default function Routes() {
  
  return (
    <Switch>
      {/* home */}
      <Route exact path="/" component={Home} />
      {/* Product */}
      <Route path="/product/:id">
        <DetailProduct />
      </Route>
      {/* CGV */}
      <Route exact path="/cgv">
        <Cgv />
      </Route>
    </Switch>
  );
}
