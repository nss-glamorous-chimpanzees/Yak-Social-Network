import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import registerServiceWorker from "./registerServiceWorker";
import Signup from "./Signup/Signup"

ReactDOM.render(<Signup />, document.getElementById("root"));
registerServiceWorker();
