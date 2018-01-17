import React from "react"
import PropTypes from "prop-types"
import "./SearchForm.css"

export default class SearchForm extends React.Component {
    render() {
        const { search, handleInputChange, breeds, handleFormSubmit } = this.props

        return (
            <form className="search">
                <div className="form-group">
                    <label htmlFor="breed">Breed Name:</label>
                    <input 
                        value={search}
                        onChange={handleInputChange}
                        name="breed"
                        list="breeds"
                        type="text"
                        className="form-control"
                        placeholder="Type in a dog breed to begin"
                        id="breed"
                    />
                    <datalist id="breeds">{breeds.map(breed => 
                    <option value={breed} key={breed} />)}</datalist>
                    <button type="submit" onClick={handleFormSubmit} className="btn btn-success">Search</button>
                </div>
            </form>
        )
    }
}

SearchForm.propTypes = {
    search: PropTypes.string,
    handleInputChange: PropTypes.func,
    breeds: PropTypes.array,
    handleFormSubmit: PropTypes.func
  }