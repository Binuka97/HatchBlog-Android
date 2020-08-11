import { createStackNavigator } from '@react-navigation/stack';
import App from './App';
import PostDetailedView from './PostDetailedView';
    
const AppNavigator = createStackNavigator({
    App: { screen: App },
    PostDetailedView: { screen: PostDetailedView},
});