import React from 'react';
import ExploreComponent from './ExploreComponent';

class ExploreScreen extends React.Component {
  render() {
    return (
      <ExploreComponent {...this.props} />
    );
  }
}

export default ExploreScreen;
