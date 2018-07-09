import React from "react";

function CountriesVisited({ countries, dispatch }) {
  function clickHandler() {
    dispatch({
      type: "DELETE_COUNTRY",
      country: event.target.value
    });
  }
  return (
    <ul>
      {countries.map(country => {
        return (
          <li value={country} onClick={clickHandler}>
            {country}
          </li>
        );
      })}
    </ul>
  );
}

export default CountriesVisited;
