import React from "react";

import ButtonList from "./ButtonList";

import { Outlet } from "react-router-dom";
const Body = () => {
  return (
    <div className="">
      <ButtonList />
      <Outlet />
    </div>
  );
};

export default Body;
