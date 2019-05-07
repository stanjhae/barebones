import React from 'react';
import { Button, FlatList, View } from 'react-native';


class ExploreComponent extends React.Component {
  state = {
    data: [
      { name: 'Doris', age: '20' },
      { name: 'Aisha', age: '18' }],
  };

  renderItems = ({ item }) => (
    <Button
      title={item.name}
      onPress={() => this.props.navigation.navigate('ExploreDetailsScreen')}/>
  );

  render() {
    const { data } = this.state;
    return (
      <View style={{
        flex: 1, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center',
      }}>

        <FlatList
          keyExtractor={item => `${item.name}`}
          renderItem={this.renderItems} data={data} />
      </View>
    );
  }
}

export default ExploreComponent;
