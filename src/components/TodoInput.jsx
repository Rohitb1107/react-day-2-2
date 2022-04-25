import React, { useState } from "react";

export const TodoInput = ({ getData }) => {
  const [text, setText] = useState("");

  return (
    <>
      <div className="first-div">
        <input
          type="text"
          onChange={(e) => {
            setText(e.target.value);
          }}
          placeholder="Enter Task"
        />

        <button
          onClick={() => {
            getData(text);
          }}
        >
          Add Task
        </button>
      </div>
    </>
  );
};
