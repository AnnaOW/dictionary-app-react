import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./Dictionary.css";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [results, setResults] = useState(null);

  function handleResponse(response) {
    setResults(response.data);
  }

  function search(event) {
    event.preventDefault();

    let key = "9a4cbff04f4e654ca4teaa03bc88aoaf";
    let apiURL = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${key}`;
    axios.get(apiURL).then(handleResponse);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  if (results) {
    return (
      <div className="Dictionary">
        <section>
          <h1>What word are you looking for? 📖</h1>
          <form onSubmit={search}>
            <input
              type="search"
              onChange={handleKeywordChange}
              defaultValue={props.defaultKeyword}
            />
          </form>
          <div className="Hint">
            Type e.g. Java, orange, sea, cup,... & press 'Enter'!
          </div>
        </section>
        <Results results={results} />
      </div>
    );
  } else {
    search({ preventDefault: function () {} });
    return "Loading...";
  }
}
