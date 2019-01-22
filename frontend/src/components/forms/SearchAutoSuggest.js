import React from 'react';
import PropTypes from 'prop-types';
import Autosuggest from 'react-autosuggest';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import { styles } from './helpers/styles/citySearchStyles'
import { renderInputComponent, renderSuggestion, getSuggestions, getSuggestionValue } from './helpers/citiesAutosuggest'

class SearchAutoSuggest extends React.Component {
  state = {
    suggestions: []
  };

  handleSuggestionsFetchRequested = ({ value }) => {
    this.setState({
      suggestions: getSuggestions(value, this.props.suggestions),
    });
  };

  handleSuggestionsClearRequested = () => {
    this.setState({
      suggestions: [],
    });
  };

  handleSuggestionSelected = (e, { suggestion }) => {
    e.preventDefault()
    this.props.getCoordsFor(suggestion)
  }

  render() {
    const { classes } = this.props;

    const autosuggestProps = {
      renderInputComponent,
      suggestions: this.state.suggestions,
      onSuggestionsFetchRequested: this.handleSuggestionsFetchRequested,
      onSuggestionsClearRequested: this.handleSuggestionsClearRequested,
      onSuggestionSelected: this.handleSuggestionSelected,
      getSuggestionValue,
      renderSuggestion,
    };

    return (
      <div className={classes.root}>
        <Autosuggest
          {...autosuggestProps}
          inputProps={{
            classes,
            placeholder: 'Type a city or country...',
            value: this.props.value,
            onChange: this.props.handleChange('cityNameWithCountry'),
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

SearchAutoSuggest.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SearchAutoSuggest);