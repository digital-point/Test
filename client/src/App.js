import React, { Suspense } from "react";

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
    </Suspense>
  );
}

export default App;
