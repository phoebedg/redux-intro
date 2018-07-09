import React from "react";
import cx from "classnames";

const buttons = ["Camel", "Duck", "Donut", "Potato", "Mash potato"];

function VotingButtons({ selectedButton, dispatch }) {
  function handleClick(button) {
    console.log("3. Dispatch new button select action");

    dispatch({
      type: "SELECT_BUTTON",
      selectedButton: button
    });
  }

  function handleClear() {
    event.preventDefault();

    dispatch({
      type: "RESET_BUTTON",
      selectedButton: undefined
    });
  }

  return (
    <div>
      {buttons.map(button => {
        const classes = cx("voting-button", {
          "voting-button--selected": selectedButton === button
        });
        return (
          <button
            key={button}
            className={classes}
            onClick={event => handleClick(button)}
          >
            {button}
          </button>
        );
      })}
      <a href="#" onClick={handleClear}>
        Clear
      </a>
    </div>
  );
}

export default VotingButtons;
