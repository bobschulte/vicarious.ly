import React from 'react';
import PlacesAutocomplete from "react-places-autocomplete";
import Input from "@material-ui/core/Input";

class PlacesSearch extends React.Component {

  handleChange = searchValue => {
    this.props.onChange(searchValue)
  }

  handleSelect = searchValue => {
    this.props.onChange(searchValue)
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
      radius: 1000,
      types: ['establishment']
    }
    
    return <PlacesAutocomplete value={this.props.value} onChange={this.handleChange} onSelect={this.handleSelect} searchOptions={searchOptions} >
      {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => <div>
          <Input style={{width: "700px"}} 
            {...getInputProps({
              placeholder: "Search Local Places ...",
              className: "location-search-input"
            })} />
          <div className="autocomplete-dropdown-container">
            {loading && <div>Loading...</div>}
            {suggestions.map(suggestion => {
              const className = suggestion.active ? "suggestion-item--active" : "suggestion-item";
              // inline style for demonstration purpose
              const style = suggestion.active ? { backgroundColor: "#9e9e9e", cursor: "pointer" } : { backgroundColor: "#ffffff", cursor: "pointer" };
              return <div {...getSuggestionItemProps(suggestion, {
                    className,
                    style
                  })}>
                  <span>{suggestion.description.split(',')[0]}</span>
                </div>;
            })}
          </div>
        </div>}
    </PlacesAutocomplete>
  }
}

export default PlacesSearch