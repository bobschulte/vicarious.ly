import React from 'react';
import PlacesAutocomplete from "react-places-autocomplete";
import Button from '@material-ui/core/Button'

class PlacesSearch extends React.Component {

  handleChange = searchValue => {
    this.props.onChange(searchValue)
  }

  handleSelect = searchValue => {
    this.props.onChange(searchValue)
  }

  handleSubmit = e => {
    console.log('submitted: ', this.props.value)
  }

  render() {
    const { lat, lng } = this.props
    let searchOptions = {
      location: {
        lat: function() {
          return lat
        },
        lng: function() {
          return lng
        }
      },
      radius: 100,
      type: 'establishment'
    }
    
    return <div>
        <PlacesAutocomplete value={this.props.value} onChange={this.handleChange} onSelect={this.handleSelect} searchOptions={searchOptions} >
          {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => <div>
              <input {...getInputProps({
                  placeholder: "Search Places ...",
                  className: "location-search-input"
                })} />
                
              <div className="autocomplete-dropdown-container">
                {loading && <div>Loading...</div>}
                {suggestions.map(suggestion => {
                  const className = suggestion.active ? "suggestion-item--active" : "suggestion-item";
                  // inline style for demonstration purpose
                  const style = suggestion.active ? { backgroundColor: "#808080", cursor: "pointer" } : { backgroundColor: "#ffffff", cursor: "pointer" };
                  return <div {...getSuggestionItemProps(suggestion, {
                        className,
                        style
                      })}>
                      <span>{suggestion.description}</span>
                    </div>;
                })}
              </div>
            </div>}
        </PlacesAutocomplete>
        <Button type="button" variant="contained" color="primary" onClick={this.handleSubmit}>
          Add to My List
        </Button>
      </div>;
  }
}

export default PlacesSearch