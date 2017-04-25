import React, { Component } from 'react';
import { View, ListView, StyleSheet, Text } from 'react-native';

// Import custom modules
import { Styles, data } from './helpers/helpers';
import List from './List';
import Header from './Header';


export default class App extends Component {
  constructor(props){
    super(props);

    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(data),
    };
  }
  render() {
    return (
      <View style={Styles.container}>
        <ListView
        dataSource={this.state.dataSource}
        renderRow={(data) => <List {...data}/>}
        renderSeparator={(sectionId, rowId) => <View key={rowId} style={Styles.separator} />}
        renderHeader={() => <Header />}  />
      </View>
    )
  }
}
