import React from "react";
import Desktopmenu from "./desktopmenu";
import Mobilemenu from "./mobilemenu";

export default function menu() {
  return (
    <div>
      <Desktopmenu />
      <Mobilemenu />
    </div>
  );
}
