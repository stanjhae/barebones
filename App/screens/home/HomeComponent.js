import React from 'react';
import PropTypes from 'prop-types';
import { View, FlatList, Button } from 'react-native';
import { getItem, resetItem } from '../../utils/actions/item.util';

class HomeComponent extends React.Component {
  renderItems = ({ item }) => (
      <Button
        title={item.name}
        onPress={() => getItem(item._id, this.props.navigation, 'ItemDetailsScreen', `Getting ${item.name}...`)}/>
  );

  render() {
    const { navigation, items } = this.props;
    return (
      <View style={{
        flex: 1, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center',
      }}>

        <FlatList
          keyExtractor={item => `${item.name}`}
          renderItem={this.renderItems} data={items} />

        <Button title='Add Item' onPress={() => resetItem(navigation)}/>
        <Button title='New Store' onPress={() => navigation.navigate('NewStoreScreen')}/>

      </View>
    );
  }
}

HomeComponent.propTypes = {
  items: PropTypes.any,
  navigation: PropTypes.object.isRequired,
};

export default HomeComponent;
