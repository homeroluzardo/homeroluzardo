import React from "react";
import ReactDOM from "react-dom";
import "../src/styles/Index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(<App />, document.getElementById("root"));

serviceWorker.unregister();
