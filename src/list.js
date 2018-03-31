import React from 'react';
import { connect } from 'react-redux';

const List = (props) => {
  let articles = props.articles.map((article) => {
    return (
      <li key={article.id}>
        {article.title}
      </li>
    );
  })
  return (
    <div>
      {articles}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    articles: state.articles
  };
};

export default connect(mapStateToProps)(List);