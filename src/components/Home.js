import React from "react";
import { name as myName, city as myCity } from "../data/data.js";

function Home() {
  // update the JSX being returned!
  return <div id = "home">
    <h1 style={{color: "firebrick"}}> {myName} is a Web Developer from {myCity}</h1>
  </div>;
}

export default Home;
