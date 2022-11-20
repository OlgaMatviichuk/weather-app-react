import React from "react";

import SearchEngine from "./SearchEngine";
import Weather from "./Weather";

import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <h1 className="text-center mt-5"> </h1>
        <SearchEngine />
        <Weather />
      </div>
      <div class="footnote text-center mb-5">
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
          </a>
        </span>
      </div>{" "}
    </div>
  );
}
