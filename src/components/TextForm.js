import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");
  const handleUpClick = () => {
    setText(text.toUpperCase());
    props.showAlert("Converted to Upper case", "success");
  };
  const handleLoClick = () => {
    setText(text.toLowerCase());
    props.showAlert("Converted to Lower case", "success");
  };
  const handleClearClick = () => {
    setText("");
    props.showAlert("Text cleared", "success");
  };
  const handleReverseClick = () => {
    setText(text.split("").reverse().join(""));
    props.showAlert("Text reversed", "success");
  };
  const handleCopy = async () => {
    let text = document.getElementById("exampleFormControlTextarea1");
    text.select();
    await navigator.clipboard.writeText(text.value);
    props.showAlert("Text copied", "success");
  };
  return (
    <>
      <h1
        className="container"
        style={{ color: props.mode === "light" ? "black" : "white" }}
      >
        {props.heading}
      </h1>
      <div className="mb-3 container">
        <label
          htmlFor="exampleFormControlInput1"
          className="form-label"
          style={{ color: props.mode === "light" ? "black" : "white" }}
        >
          Email address
        </label>
        <input
          type="email"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="name@example.com"
          style={{
            backgroundColor: props.mode === "light" ? "white" : "#292a38",
            color: props.mode === "light" ? "black" : "white",
          }}
        />
      </div>

      <div className="mb-3 container">
        <label
          htmlFor="exampleFormControlTextarea1"
          className="form-label"
          style={{ color: props.mode === "light" ? "black" : "white" }}
        >
          Example textarea
        </label>
        <textarea
          className="form-control"
          style={{
            backgroundColor: props.mode === "light" ? "white" : "#292a38",
            color: props.mode === "light" ? "black" : "white",
          }}
          value={text}
          onChange={(txt) => setText(txt.target.value)}
          id="exampleFormControlTextarea1"
          rows="8"
        />
      </div>
      <div className="container">
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1 my-1"
          onClick={handleUpClick}
        >
          UpperCase
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-success mx-1 my-1"
          onClick={handleLoClick}
        >
          LowerCase
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-secondary mx-1 my-1"
          onClick={handleClearClick}
        >
          Clear
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-warning mx-1 my-1"
          onClick={handleReverseClick}
        >
          Reverse
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-info mx-1 my-1"
          onClick={handleCopy}
        >
          Copy Text
        </button>
        <h1
          className="cotainer"
          style={{ color: props.mode === "light" ? "black" : "white" }}
        >
          Your Text Summary
        </h1>
        <div
          className="container"
          style={{ color: props.mode === "light" ? "black" : "white" }}
        >
          {/* {!text.trim() ? 0 : text.trim().split(/\s+/).length} words &{" "} */}
          {
            text.split(" ").filter((element) => {
              return element.length !== 0;
            }).length
          }{" "}
          words & {text.length} characters.
          <p>
            Can be read in{" "}
            {0.008 *
              text.split(" ").filter((element) => {
                return element.length !== 0;
              }).length}{" "}
            minutes
          </p>
          <h2>Preview</h2>
          <p>{text ? text : "Nothing to Preview"}</p>
        </div>
      </div>
    </>
  );
}
