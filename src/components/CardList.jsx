import React from "react";
import Card from "./Card";

const CardList = ({ userProfiles }) => {
  return userProfiles.map((user) => <Card user={user} key={user.id} />);
};

export default CardList;
