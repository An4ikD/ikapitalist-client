import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Redirect } from 'react-router-dom';
import { projectAction } from '../../actions/project.actions';

class Investor extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getAllProjects();
  }

  render() {
    if (!this.props.loggedIn) {
      return (
        <Redirect
          to={{
            pathname: "/login",
            state: { redirectTo: '/aminvestor' }
          }}
        />
      );
    }

    const projects = this.props.projects.map((project) => {
      return (
        <li key={project.id}>{project.name}</li>
      );
    });

    return (
      <div>
        <h2>List of Projects</h2>
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
    loggedIn: authentication.loggedIn,
    projects: project.projects
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getAllProjects: () => {
      dispatch(projectAction.getAll());
    }
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Investor));
