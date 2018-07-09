import React from "react";
import VotingButtons from "./VotingButtons";
import CountrySelector from "./CountrySelector";
import CountriesVisited from "./CountriesVisited";

class App extends React.Component {
  constructor(props) {
    super(props);

    const reduxState = this.props.store.getState();

    this.state = {
      selectedButton: reduxState.selectButton.selectedButton,
      selectedCountry: reduxState.country.selectedCountry,
      countryListOpen: reduxState.country.countryListOpen,
      countries: reduxState.countriesVisited.countries,
      deletedCountry: reduxState.countriesVisited.deletedCountry
    };
  }

  componentDidMount() {
    const { store } = this.props;
    store.subscribe(() => {
      this.updateFromStore();
    });
  }

  updateFromStore() {
    const { store } = this.props;

    const reduxState = store.getState();

    this.setState({
      selectedButton: reduxState.selectButton.selectedButton,
      selectedCountry: reduxState.country.selectedCountry,
      countryListOpen: reduxState.country.countryListOpen,
      countries: reduxState.countriesVisited.countries,
      deletedCountry: reduxState.countriesVisited.deletedCountry
    });
  }

  render() {
    return (
      <div>
        <VotingButtons
          selectedButton={this.state.selectedButton}
          dispatch={this.props.store.dispatch}
        />
        <CountrySelector
          selectedCountry={this.state.selectedCountry}
          countryListOpen={this.state.countryListOpen}
          deletedCountry={this.state.deletedCountry}
          dispatch={this.props.store.dispatch}
        />
        <CountriesVisited
          countries={this.state.countries}
          dispatch={this.props.store.dispatch}
        />
      </div>
    );
  }
}

export default App;
