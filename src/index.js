import React from "react";
import ReactDOM from "react-dom";
import App from "./app";
import * as serviceworker from "./serviceworker";

ReactDOM.render(<App />, document.getElementById("root"));
serviceworker.unregister();
