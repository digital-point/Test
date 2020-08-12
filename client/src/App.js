import React, { Suspense } from "react";

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <h1>Hello world</h1>
    </Suspense>
  );
}

export default App;
