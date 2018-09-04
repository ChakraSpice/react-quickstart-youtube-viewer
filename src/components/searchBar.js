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
            <div>
                <input
                    value = {this.state.term} // Now it's controlled component - only changes when the state changes.
                    onChange={event=> this.setState({ term: event.target.value })}/>
                Value of input: {this.state.term}
            </div>
    );
    }
};

export default SearchBar; 