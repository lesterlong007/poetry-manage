import React from 'react';
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Login from "src/pages/Login/Index";
import Layout from "src/layout/Index";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route path="/" component={Layout} />
      </Switch>
    </Router>
  );
}

export default App;
