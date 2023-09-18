import React from "react";
import "./App.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { Container } from "@mui/material";
import { FeedListWrapper } from "./components/FeedListWrapper";

function App() {
  return (
    <div className="App">
      <Container maxWidth="sm">
        <FeedListWrapper />
      </Container>
    </div>
  );
}

export default App;
