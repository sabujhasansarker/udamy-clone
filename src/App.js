import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./components/layouts/NavBar";
import Alert from "./components/layouts/Alert";
import Home from "./components/pages/home/Home";

const App = () => {
  const [alert, setAlert] = useState(true);
  return (
    <div className="udemy">
      <Router>
        {alert && <Alert setAlert={setAlert} />}
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
