import React, { useState } from "react";
import "./App.css";
import CardList from "./components/CardList";
import Form from "./components/Form";

function App({ title }) {
  const [profiles, setProfiles] = useState([]);

  const addProfile = (profile) => {
    setProfiles(() => [...profiles, profile]);
  };
  return (
    <div className="App">
      <div className="App-header">{title}</div>
      <div className="content">
        <Form onSubmit={addProfile} />
        <CardList userProfiles={profiles} />
      </div>
    </div>
  );
}

export default App;
