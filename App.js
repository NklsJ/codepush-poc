import codePush from 'react-native-code-push'
import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';

class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>CodePush Proof Of Concept</Text>
        <Text style={styles.text}>APP JS VERSION: V 2</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    fontSize: 22,
    marginBottom: 30,
  },
  text: {
    fontSize: 16,
  },
});

export default codePush(App)
