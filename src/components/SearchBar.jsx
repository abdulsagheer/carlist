import React, { useState } from "react";

const SearchBar = ({ onSubmit }) => {
  const [input, setInput] = useState("");
  const [term, setTerm] = useState("");
  const onInputChange = (e) => {
    setInput(e.target.value);
    console.log(e.target.value);
  };
  const onInputClick = () => {
    console.log("You have clicked the input field my friend😁");
  };
  const onFormSubmit = (e) => {
    e.preventDefault();
    console.log("Ok now you get your state - value --> " + input);
    onSubmit(term);
  };
  return (
    <div className="ui segment">
      <form className="ui form" onSubmit={onFormSubmit}>
        <div className="field">
          <label>Image Search</label>
          <input
            type="text"
            value={input}
            placeholder="Search Car"
            onChange={onInputChange}
            onClick={onInputClick}
          />
          {input.length > 10 && (
            <div style={{ color: "red", margin: "10px" }}>
              {/* ✅ Dude you are learning react and you have cross more than 10 characters.*/}
              ❌ But idiot why are you spamming 😒
            </div>
          )}
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
