import React from "react";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h4>{props.meaning.partOfSpeech}</h4>
      <p>
        <strong>Definition:</strong> {props.meaning.definition}
      </p>
      <p>
        <em>
          <strong>Example:</strong> <strong>Example:</strong>{" "}
        </em>
      </p>
      <div>
        <Synonyms synonyms={props.meaning.synonyms} />{" "}
      </div>
    </div>
  );
}
