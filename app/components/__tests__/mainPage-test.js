jest.dontMock('../mainPage');

import React, {
  View,
  TabBarIOS,
  Text,
  Image
} from 'react-native';

var TestUtils = require('react-addons-test-utils');
var MainPage = require('../mainPage');

describe("MainPage", function() {

  var result;
  beforeEach(function() {
    var renderer = TestUtils.createRenderer();
    renderer.render(<MainPage />);
    result = renderer.getRenderOutput();
  });

  it("contains TabBar for navigation", function() {
    expect(result.type).toBe(TabBarIOS);
  });
});
