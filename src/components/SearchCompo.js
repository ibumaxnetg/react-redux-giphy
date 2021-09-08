import React from "react";

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: ""
    };
  }

  render() {
    return (
      <div>
        <h2>Find Your GIF</h2>
        <form onSubmit={this.handleSubmit}>
          <input value={this.state.title} onChange={this.handleChange} />
          <button type="submit">search this</button>
        </form>
      </div>
    );
  }

  handleChange = (event) => {
    const setTitle = event.target.value;
    this.setState({ title: setTitle });
  };

  handleSubmit = (event) => {
    const { getUrls } = this.props;
    const { title } = this.state;
    event.preventDefault();
    getUrls(this.state.title);
    // this.props.search(title);
  };
}

export default Search;
