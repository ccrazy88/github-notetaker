/* jshint node: true */
'use strict';

var React = require('react-native');

var {
  View,
  Text,
  StyleSheet,
} = React;

var styles = StyleSheet.create({
  container: {
    marginTop: 65,
    flex: 1,
  },

  image: {
    height: 350,
  },

  buttonText: {
    fontSize: 24,
    color: 'white',
    alignSelf: 'center',
  }
});

class Dashboard extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>This is the Dashboard</Text>
        <Text>{this.props.userInfo}</Text>
      </View>
    );
  }
}

module.exports = Dashboard;
