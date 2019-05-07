import React from 'react';
import { connect } from 'react-redux';
import ExploreComponent from './ExploreComponent';

class ExploreScreen extends React.Component {
  static navigationOptions = {
    title: 'Explore',
  };

  render() {
    return (
      <ExploreComponent {...this.props} />
    );
  }
}

const mapStateToProps = state => ({
  items: state.item.items,
});

export default connect(mapStateToProps)(ExploreScreen);
