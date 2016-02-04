'use strict';

import React, {
  View,
  TabBarIOS,
  Text,
  Image,
  Component
} from 'react-native';
var TimelinePage = require('./timeline/timelinePage');
var LeaderboardPage = require('./leaderboard/leaderboardPage');
var MonthlySummaryPage = require('./monthlySummary/monthlySummaryPage');

class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'leaderboard'
    };
  }

  render() {
    return (
      <TabBarIOS tintColor="black">
        <TabBarIOS.Item
          title="Timeline"
          icon={ require('../img/timeline.png') }
          selected={this.state.selectedTab === 'timeline'}
          onPress={() => this.setState({selectedTab: 'timeline'})}
          >
          <TimelinePage currentUser = {this.props.currentUser} />
        </TabBarIOS.Item>
        <TabBarIOS.Item
          title="Leaderboard"
          icon={ require('../img/leaderboard.png') }
          selected={this.state.selectedTab === 'leaderboard'}
          onPress={() => this.setState({selectedTab: 'leaderboard'})}
          >
          <LeaderboardPage
            navigator={this.props.navigator}
            currentUser = {this.props.currentUser}
            />
        </TabBarIOS.Item>
        <TabBarIOS.Item
          title="Me"
          icon={ require('../img/me.png') }
          selected={this.state.selectedTab === 'me'}
          onPress={() => this.setState({selectedTab: 'me'})}
          >
          <MonthlySummaryPage
            user={this.props.currentUser}
            showBackButton={false}
            />
        </TabBarIOS.Item>
      </TabBarIOS>
    );
  }
}

module.exports = MainPage;
