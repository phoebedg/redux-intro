import React from "react";
import cx from "classnames";

const countries = [
  "Belgium",
  "France",
  "Germany",
  "Holland",
  "Ireland",
  "Italy",
  "Luxemburg",
  "Portugal",
  "Spain"
];

function CountrySelector({
  countryListOpen,
  selectedCountry,
  deletedCountry,
  dispatch
}) {
  function selectCountry(country) {
    dispatch({
      type: "SET_SELECTED_COUNTRY",
      selectedCountry: country
    });

    dispatch({
      type: "SET_COUNTRY_LIST_OPEN",
      countryListOpen: false
    });
  }

  function handleFocus(event) {
    dispatch({
      type: "SET_COUNTRY_LIST_OPEN",
      countryListOpen: true
    });
  }

  function handleBlur(event) {
    dispatch({
      type: "SET_COUNTRY_LIST_OPEN",
      countryListOpen: false
    });
  }

  function submitHandler(event) {
    event.preventDefault();
    selectedCountry
      ? dispatch({
          type: "ADD_COUNTRY",
          country: selectedCountry
        })
      : alert("Please select a country.");
  }

  const listClasses = cx("country-input__list", {
    "country-input__list--visible": countryListOpen
  });

  return (
    <form onSubmit={submitHandler} className="country-input">
      <input
        type="text"
        className="country-input__field"
        value={selectedCountry}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
      <button type="submit" />
      <div className={listClasses}>
        <ul>
          {countries
            .filter(country => {
              return country != deletedCountry;
            })
            .map(country => {
              return (
                <li key={country} onMouseDown={() => selectCountry(country)}>
                  {country}
                </li>
              );
            })}
        </ul>
      </div>
    </form>
  );
}

export default CountrySelector;
