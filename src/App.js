import React from "react";
import { Container, Hidden } from "@material-ui/core";
import "./App.css";
import Form from "./components/form_new";

function App() {
  return (
  <Form />
    // <div>
    //   <Hidden only={["lg", "md", "sm", "xl"]}>
    //     <Form class="formcontainers" />
    //   </Hidden>
    //   <Hidden only={["xs"]}>
    //     <Form class="formcontainer" />
    //   </Hidden>
    // </div>
  );
}

export default App;
