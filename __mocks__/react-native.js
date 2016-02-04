var React = require('react');

var ReactNative = React;

ReactNative.StyleSheet = {
    create: function(styles) {
        return styles;
    }
};

class View extends React.Component {
  render() {
    return false;
  }
}

class TabBarIOS extends View {
  static Item = View;
}

ReactNative.AppRegistry = {
  registerComponent: jest.genMockFn()
}

ReactNative.Dimensions = {
  get: jest.genMockFunction().mockImplementation(function(scalar) {
    return { width: 320, height: 568 };
  })
}

ReactNative.View = View;
ReactNative.TabBarIOS = TabBarIOS;
ReactNative.Text = View;
ReactNative.Image = View;
ReactNative.TouchableHighlight = View;
ReactNative.Navigator = View;

module.exports = ReactNative;
