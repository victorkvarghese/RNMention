import { StackNavigator } from 'react-navigation';

import MainScreen from '@screens/MainScreen';

const RNMentionApp = StackNavigator({
    MainScreen: {
        screen: MainScreen,
        navigationOptions: { header: null, gesturesEnabled: false }
    }
});

export default RNMentionApp;
