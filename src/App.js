import React from "react";
import { Contackts } from "./components/Contacts/Contackts";
import { Content } from "./components/Content/Content";
import { Goals } from "./components/Goals/Goals";
import { Header } from "./components/Header/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Content />
      <Goals />
      <Contackts />
    </div>
  );
}

export default App;
