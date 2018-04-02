import React, { Component } from 'react';
import { View } from 'react-native';
import { Header } from './component/reusable';

class App extends Component {
  render() {
    return (
      <View>
       <Header HeaderText='Authentication' />
      </View>
    );
  }
}

export default App;
