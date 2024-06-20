import React from "react";
import Phonetic from "./Phonetic";
import Meaning from "./Meaning";
import "./Results.css";

export default function Results(props) {
  if (props.results) {
    const { word, phonetics, meanings } = props.results;

    const selectedPhonetic = phonetics.length > 0 ? phonetics[0] : null;

    return (
      <div className="Results">
        <section>
          <h2>{word}</h2>
          {selectedPhonetic && (
            <div key={0}>
              <Phonetic phonetic={selectedPhonetic} />
            </div>
          )}
        </section>
        {meanings.map((meaning, index) => (
          <section key={index}>
            <Meaning meaning={meaning} />
          </section>
        ))}
      </div>
    );
  } else {
    return null;
  }
}
