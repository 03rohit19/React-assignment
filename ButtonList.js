import React from "react";
import Buttons from "./Buttons";

const ButtonList = () => {
  let buttonList = [
    "Movies",
    "Stream",
    "Events",
    "Plays",
    "Sports",
    "Activities",
    "Buzz",
    "ListYourShow",
    "Corporates",
    "Offers",
    "GiftCards",
  ];

  return (
    <div className="flex">
      {buttonList.map((name) => (
        <Buttons key={name} name={name} />
      ))}
    </div>
  );
};

export default ButtonList;
