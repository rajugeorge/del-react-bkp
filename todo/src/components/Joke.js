import React from "react";

function Joke(props) {
  console.log(!props.joke.question && "none");
  return (
    <div>
      <p style={{ display: !props.joke.question && "none" }}>
        {props.joke.question}
      </p>
      <p>{props.joke.punchline}</p>
    </div>
  );
}

export default Joke;
