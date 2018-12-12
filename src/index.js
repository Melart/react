import React from "react";
import ReactDom from "react-dom";
import "./style.css";
import PageBlock from "./components/page/page.js";


ReactDom.render(
  <PageBlock />,
  document.querySelector("#app")
);