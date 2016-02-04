'use strict';

import React, {
  Component,
  AppRegistry,
  Navigator
} from 'react-native';
import LoginPage from './app/components/login/loginPage';
import AddEntryPage from './app/components/addEntry/addEntryPage';
import MonthlySummaryPage from './app/components/monthlySummary/monthlySummaryPage';
import MainPage from './app/components/mainPage';
import Spinner from './app/components/spinner';
import CodePush from 'react-native-code-push';
import AppConfig from './appConfig.json';
var SessionManager = require('./app/sessionManager');

const ROUTES = {
  'Login': LoginPage,
  'Add Entry': AddEntryPage,
  'Monthly Summary': MonthlySummaryPage,
  'Main Page': MainPage
}

class MoveIt extends Component {
  componentDidMount() {
    if(AppConfig.jsScheme === 'codepush') {
      CodePush.sync({ deploymentKey: AppConfig.codePushKey });
    }
  }

  renderScene(route, navigator) {
    var Component = ROUTES[route.name];
    if(this.state == null || navigator.refs.scene_0.props.children.type === LoginPage) {
      SessionManager.getCurrentUser()
      .then(currentUser => {
        this.setState({ currentUser: currentUser });
      }, () => {
        this.setState({ currentUser: '' });
      });
    }
    if(this.state == null) {
      return <Spinner />;
    } else if (this.state.currentUser === '') {
      return <LoginPage navigator={navigator} />;
    } else {
      return <Component navigator={navigator} currentUser={this.state.currentUser} {...route.passProps} />;
    }
  }

  render() {
    return (
      <Navigator
        initialRoute={{name: 'Add Entry', component: AddEntryPage}}
        renderScene={this.renderScene.bind(this)}
        />
    );
  }
}

AppRegistry.registerComponent('MoveIt', () => MoveIt);
