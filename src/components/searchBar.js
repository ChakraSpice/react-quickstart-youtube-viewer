import React, { Component } from 'react'; // Always import react, so it translates stuff.

class SearchBar extends Component {
    constructor(props) {
        super(props);

        // Only class-based components have state 
        this.state = { term: '' };
        // To update state outside of constructor, use this.setState(obj);
    }

    // On changed state - component rerenders, also components children rerender.
    render() {
        return (
            <div className="search-bar">
                <input
                    //value = {this.state.term} // Now it's controlled component - only changes when the state changes.
                    onKeyPress={event => this.onKeyPress(event)}/>
            </div>
    );
    }

    onKeyPress(event) {
        if (event.key === 'Enter') {
            this.setState({term: event.target.value});
            this.props.onSearchTermChange(event.target.value);
        }
    }
};

export default SearchBar; 