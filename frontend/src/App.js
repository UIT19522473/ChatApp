import "./App.css";

import React from "react";
import { Route } from "react-router-dom";
import Homepage from "./pages/HomePage";
import ChatPage from "./pages/ChatPage";

const App = () => {
  return (
    <div className="App">
      <Route path="/" component={Homepage} exact />
      <Route path="/chats" component={ChatPage} />
    </div>
  );
};

export default App;
