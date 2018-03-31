import React, { Component } from 'react';
import { Route, Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { projectAction } from '../../actions/project.actions';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.getAll();
  }

  render() {

    const projects = this.props.projects.map((project) => {
      return (
        <li key={project.id}>
          {project.name}
        </li>
      );
    });
    return (
      <div>
        <h2>
          <Link to={{
            pathname: '/login',
            state: { redirectTo: '/aminvestor' }
          }}>Я Инвестор</Link>
        </h2>
        <h2>
          <Link to={{
            pathname: '/login',
            state: { redirectTo: '/ambusinessman'}
          }}>Я Бизнесмен</Link>
        </h2>

        <ul>
          {projects}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { authentication } = state;
  const { project } = state;
  return {
    user: authentication.user,
    projects: project.projects
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getAll: () => {
      dispatch(projectAction.getAll());
    }
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Home));