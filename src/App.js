import React from "react";
import { Container, Hidden } from "@material-ui/core";
import "./App.css";
import Form from "./components/Form";

function App() {
  return (
    <div>
      <Hidden only={["lg", "md", "sm", "xl"]}>
        <Form class="form_containers" />
      </Hidden>
      <Hidden only={["xs"]}>
        <Form class="form_container" />
      </Hidden>
    </div>
  );
}

export default App;
