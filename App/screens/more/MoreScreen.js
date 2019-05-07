import React from 'react';
import { MoreComponent } from './MoreComponent';

export default class MoreScreen extends React.Component {
  static navigationOptions = {
    title: 'More',
  };

  render() {
    return <MoreComponent {...this.props} />;
  }
}
