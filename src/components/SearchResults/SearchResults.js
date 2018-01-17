import React from "react"
import PropTypes from "prop-types"
import "./SearchResults.css"

export default class SearchResults extends React.Component {
    render() {
        const { results } = this.props

        return (
            <ul className="list-group search-results">
                {results.map(result =>
                    <li key={result} className="list-group-item">
                        <img alt="Dog" src={result} className="img-responsive" />
                    </li>
                )}
            </ul>
        )
    }
}

SearchResults.propTypes = {
    results: PropTypes.array
}