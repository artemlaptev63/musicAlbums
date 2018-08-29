import React, { Component } from 'react';
import { Text, View } from 'react-native';
import AlbumList from './AlbumList';
import Header from './Header';

class App extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Header headerTitle={'Albums'} />
        <AlbumList />
      </View>
    );
  }
}

export default App;
