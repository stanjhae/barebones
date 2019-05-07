import React from 'react';
import PropTypes from 'prop-types';
import { View, FlatList, Button } from 'react-native';

class HomeComponent extends React.Component {
  state = {
    data: [
      { name: 'woyong', age: '21' },
      { name: 'Chioma', age: '20' }],
  };

  renderItems = ({ item }) => (
      <Button
        title={item.name}
        onPress={() => this.props.navigation.navigate('ItemDetailsScreen')}/>
  );

  render() {
    const { navigation } = this.props;
    const { data } = this.state;

    return (
      <View style={{
        flex: 1, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center',
      }}>

        <FlatList
          keyExtractor={item => `${item.name}`}
          renderItem={this.renderItems} data={data} />

        <Button title='Add Item' onPress={() => navigation.navigate('NewItemScreen')}/>
        <Button title='New Store' onPress={() => navigation.navigate('NewStoreScreen')}/>

      </View>
    );
  }
}

HomeComponent.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default HomeComponent;
