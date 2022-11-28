import React from "react";
import Weather from "./Weather";

import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <h1 className="text-center mt-5"> </h1>
        <Weather defaultCity="New York" />
      </div>
      <div class="footnote text-center mt-4">
        <span>
          This project is coded by Olga Matviichuk and is
          <a
            href="https://github.com/OlgaMatviichuk/weather-app-react"
            target="_blank"
            class="open-source"
            title="GitHub open source"
            rel="noreferrer"
          >
            {" "}
            open-sourced
          </a>{" "}
          and{" "}
          <a
            href="https://glittering-kleicha-4a4219.netlify.app"
            target="_blank"
            class="open-source"
            title="GitHub open source"
            rel="noreferrer"
          >
            hosted on Netlify
          </a>
        </span>
      </div>{" "}
    </div>
  );
}
