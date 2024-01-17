import React from "react";
import Example from "./Example";
import Synonyms from "./Synonyms";
import "./Meaning";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h4>{props.meaning.partOfSpeech}</h4>
      <div className="Definition">{props.meaning.definition}</div>
      <div>
        <Example example={props.meaning.example} />
      </div>
      <div>
        <Synonyms synonyms={props.meaning.synonyms} />{" "}
      </div>
    </div>
  );
}
