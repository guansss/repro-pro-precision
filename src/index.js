import React from "react";
import { createRoot } from "react-dom/client";

import App from "./App";

window.React = React;

createRoot(document.getElementById("root")).render(<App />);
