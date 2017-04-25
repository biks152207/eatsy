import React from 'react';
import {
  View,
  Text,
  Image
} from 'react-native';

import  { Styles } from './helpers/helpers';
import Icon from 'react-native-vector-icons/FontAwesome';

const List = (props) => (
  <View style={{flex: 1}}>
    <View style={Styles.list}>
        <Image source={{ uri: props.picture.large}} style={Styles.photo} />
        <View style={{flex: 1}}>
            <Text style={Styles.text}>
            {`${props.name.first} ${props.name.last}`}
            </Text>
            <Text style={Styles.caption}>
            4 people
            </Text>

        </View>
    </View>
    <View style={Styles.list}>
      <Text style={Styles.splitViewText}>Checked</Text>
    </View>
    {/*<View style={Styles.splitView}>
      <Text style={Styles.splitViewText}>Checked</Text>
    </View>
    <View style={Styles.splitView}>
      <Text style={Styles.splitViewText}>Checked</Text>
    </View>*/}
  </View>
)

export default List;
