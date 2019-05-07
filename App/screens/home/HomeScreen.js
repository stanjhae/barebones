import React from 'react';
import { HomeComponent } from './HomeComponent';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Home',
  };

  render() {
    return <HomeComponent {...this.props} />;
  }
}
