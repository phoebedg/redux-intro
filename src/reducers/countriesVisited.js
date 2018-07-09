function countriesVisited(
  state = {
    countries: [],
    deletedCountry: ""
  },
  action
) {
  switch (action.type) {
    case "ADD_COUNTRY":
      const stateCountryAdded = {
        countries: [...state.countries, action.country],
        deletedCountry: action.country
      };

      return stateCountryAdded;

    case "DELETE_COUNTRY":
      const CountryRemoved = state.countries.filter(function(country) {
        return country != action.country;
      });
      const stateCountryRemoved = {
        countries: CountryRemoved
      };
      return stateCountryRemoved;
    default:
      return state;
  }
}

export default countriesVisited;
