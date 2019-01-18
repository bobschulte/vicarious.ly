import React from 'react';
import PropTypes from 'prop-types';
import Autosuggest from 'react-autosuggest';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import { styles } from './helpers/styles/citySearchStyles'
import { renderInputComponent, renderSuggestion, getSuggestions, getSuggestionValue } from './helpers/autosuggest'
import apiCall from '../../state/actions/helpers/apiCall'
import cities from "./helpers/cities";

class CitySearch extends React.Component {
  state = {
    city: '',
    popper: '',
    suggestions: [],
    cityNames: []
  };

  handleSuggestionsFetchRequested = ({ value }) => {
    this.setState({
      suggestions: getSuggestions(value, this.state.cityNames),
    });
  };

  handleSuggestionsClearRequested = () => {
    this.setState({
      suggestions: [],
    });
  };

  handleChange = name => (event, { newValue }) => {
    this.setState({
      [name]: newValue,
    });
  };

  componentDidMount = () => {
    apiCall('GET', '/cities')
    .then(cityNames => {
      this.setState({ cityNames })
    })
  }

  render() {
    const { classes } = this.props;

    const autosuggestProps = {
      renderInputComponent,
      suggestions: this.state.suggestions,
      onSuggestionsFetchRequested: this.handleSuggestionsFetchRequested,
      onSuggestionsClearRequested: this.handleSuggestionsClearRequested,
      getSuggestionValue,
      renderSuggestion,
    };

    return (
      <div className={classes.root}>
        <Autosuggest
          {...autosuggestProps}
          inputProps={{
            classes,
            placeholder: 'Search for a city...',
            value: this.state.city,
            onChange: this.handleChange('city'),
          }}
          theme={{
            container: classes.container,
            suggestionsContainerOpen: classes.suggestionsContainerOpen,
            suggestionsList: classes.suggestionsList,
            suggestion: classes.suggestion,
          }}
          renderSuggestionsContainer={options => (
            <Paper {...options.containerProps} square>
              {options.children}
            </Paper>
          )}
        />
        <div className={classes.divider} />
      </div>
    );
  }
}

CitySearch.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CitySearch);