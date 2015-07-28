var React = require('react-native');
var entry = require('./app/entry');

var {
  AppRegistry,
  NavigatorIOS
} = React;


var myApp = React.createClass({
  render: function() {
    return (
      <NavigatorIOS
        style={{flex:1}}
        ref="nav"
        initialRoute={{
          component: entry,
          title: 'Imgur Viewer'
        }} />
    );
  }
})

AppRegistry.registerComponent('myApp', () => myApp);
