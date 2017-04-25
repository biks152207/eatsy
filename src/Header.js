import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

// Import custom modules
import { Styles } from './helpers/helpers';

const Header = (props) => (
  <View style={Styles.header}>
    <Text style={Styles.headerText}>Sprazzo Cucina</Text>
  </View>
);

export default Header;
