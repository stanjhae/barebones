import PropTypes from 'prop-types';
import React from 'react';
import { Button, FlatList, View } from 'react-native';
import {
  getItem,
} from '../../utils/actions/item.util';


class ExploreComponent extends React.Component {
  renderItems = ({ item }) => (
    <Button
      title={item.name}
      onPress={() => getItem(item._id, this.props.navigation, 'ExploreDetailsScreen', `Getting ${item.name}...`)}/>
  );

  render() {
    const { items } = this.props;
    return (
      <View style={{
        flex: 1, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center',
      }}>

        <FlatList
          keyExtractor={item => `${item.name}`}
          renderItem={this.renderItems} data={items} />

      </View>
    );
  }
}

export default ExploreComponent;

ExploreComponent.propTypes = {
  items: PropTypes.any,
  navigation: PropTypes.any,
};
