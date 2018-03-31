import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addArticle } from './actions/index';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({[e.target.id]: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    let title = this.state.title;
    let id = Math.floor(Math.random() * 1000);
    this.props.addArticle({title, id});
    this.setState({title: ''});
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="title">Title</label>
        <input type="text" id="title" value={this.state.title} onChange={this.handleChange} />
        <button type="submit">Save</button>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addArticle: article => dispatch(addArticle(article))
  };
};

export default connect(null, mapDispatchToProps)(Form);