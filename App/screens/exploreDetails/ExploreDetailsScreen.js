import React from 'react';
import { connect } from 'react-redux';
import ExploreDetailsComponent from './ExploreDetailsComponent';

class ExploreDetailsScreen extends React.Component {
  render() {
    return (
      <ExploreDetailsComponent {...this.props}/>
    );
  }
}

const mapStateToProps = state => ({
  item: state.item.item,
});

export default connect(mapStateToProps)(ExploreDetailsScreen);
