import React from 'react';
import { connect } from 'react-redux';
import HomeComponent from './HomeComponent';

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Home',
  };

  render() {
    return <HomeComponent {...this.props} />;
  }
}

const mapStateToProps = state => ({
  items: state.item.myItems,
});

export default connect(mapStateToProps)(HomeScreen);
