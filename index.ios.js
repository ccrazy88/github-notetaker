/* jshint node: true */
'use strict';

var React = require('react-native');
var Main = require('./App/Components/Main');

var {
  AppRegistry,
  StyleSheet,
  Text,
  NavigatorIOS,
  View,
} = React;

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111',
  },
});

class githubNotetaker extends React.Component {
  render() {
    return (
      <NavigatorIOS
        style={styles.container}
        initialRoute={{
          title: 'GitHub Notetaker',
          component: Main
        }} />
    );
  }
}

AppRegistry.registerComponent('githubNotetaker', () => githubNotetaker);

// https://egghead.io/lessons/react-react-native-error-handling-and-activityindicatorios
