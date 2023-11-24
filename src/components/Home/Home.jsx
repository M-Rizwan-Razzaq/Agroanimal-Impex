import React from "react";
import About from "../About/About";
import Service from "../Services/Service";

export default function Home() {
  return (
    <div className="bg-indigo-200 w-full m-screen">
      <About />
      <Service />
    </div>
  );
}
