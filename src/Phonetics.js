import React from "react";
import "./Phonetics.css";

export default function Phonetics(props) {
  return (
    <div className="Phonetics">
      <h3>{props.phonetic}</h3>
    </div>
  );
}
