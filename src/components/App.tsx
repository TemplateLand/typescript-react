import React from "react";

const App: React.FC<AppProps> = () => {
  return <h1 className="text-3xl font-bold underline">Hello world!</h1>;
};

App.displayName = "App";

App.propTypes = {};

export default App;

export type AppProps = {};
