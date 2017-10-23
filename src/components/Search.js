import React, {Component} from 'react'
import SearchInput, {createFilter} from 'react-search-input'


const VENUES_TO_FILTERS = ['venue'];

export default class Search extends Component {
  constructor (props) {
    super(props)
    this.state = {
      searchTerm: '',

    }
    this.searchUpdated = this.searchUpdated.bind(this)
  }
  render () {
    const filteredVenues = venue.filter(createFilter(this.state.searchTerm, VENUES_TO_FILTERS))

    return (
      <div>
        <SearchInput className="search-input" onChange={this.searchUpdated} />
        {filteredVenues.map(venue => {
          return (
            <div className="venue" key={venue.id}>
            </div>
          )
        })}
      </div>
    )
  }

  searchUpdated (term) {
    this.setState({searchTerm: term})
  }
}
