import React, { Component } from 'react'

class SearchForm extends Component {
    state = {
        formData: {
            query: "",
        },
    };

    // Function to submit form
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.handleSpellSearch(this.state.formData)
    }


    // Function to handle changes within form

    // THE WAY
    handleChange = (e) => {
        const formData = {
            ...this.state.formData,
            [e.target.name]: e.target.value,
        };
        this.setState({ formData });
    };

    // NOPE
    // handleChange = e => {
    //     this.setState({[e.target.name]: e.target.value})
    // };

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input
                        name="query"
                        type="text"
                        value={this.state.formData.query}
                        onChange={this.handleChange}
                    />
                    <button type="submit">Search</button>
                </form>
            </div>
        );
    }
}

export default SearchForm;