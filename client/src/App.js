import React, { Suspense } from "react";
import { Route, Switch } from "react-router-dom";

// pages
import Home from "./pages/Home/Home";
import Shop from "./pages/Shop/Shop";

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/shop" component={Shop} />
      </Switch>
    </Suspense>
  );
}

export default App;
