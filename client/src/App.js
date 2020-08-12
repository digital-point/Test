import React, { Suspense } from "react";

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Switch></Switch>
    </Suspense>
  );
}

export default App;
