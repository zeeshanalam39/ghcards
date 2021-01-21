import React, { useState } from "react";
import "../styles/form.css";

const Form = ({ onSubmit }) => {
  const [userName, setUserName] = useState("");
  const [userExists, setUserExists] = useState(true);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const resp = await fetch(`https://api.github.com/users/${userName}`);
    const profile = await resp.json();
    if (profile.message === "Not Found") setUserExists(false);
    else {
      onSubmit(profile);
      setUserName("");
    }
  };
  return (
    <div>
      <div className="message">
        {userExists ? "" : `No user found for ${userName}`}
      </div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter GitHub Username"
          value={userName}
          onChange={(event) => setUserName(event.target.value)}
          required
        />
        <button>Add Card</button>
      </form>
    </div>
  );
};

export default Form;
