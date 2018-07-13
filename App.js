import React from 'react';
import { StatusBar, View, Platform } from 'react-native';
import { FontAwesome, Ionicons } from '@expo/vector-icons'
import { TabNavigator, createStackNavigator } from 'react-navigation'
import { Constants } from 'expo'
import Decks from "./components/Decks";
import NewDeck from "./components/NewDeck";
import CardDetail from './components/CardDetail';
import AddCard from './components/AddCard';
import AnswerQuiz from './components/AnswerQuiz';
import { darkBlue, white } from "./utils/colors";
import { setLocalNotification } from "./utils/helper";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import rootReducer from './reducers'
import thunk from 'redux-thunk'
import { Easing, Animated } from 'react-native';
/** Tabs for the application
 * 1) List of Decks
 * 2) Create New Deck
 */
const Tabs = TabNavigator({
  Decks: {
    screen: Decks,
    navigationOptions: {
      tabBarLabel: 'Decks',
      tabBarIcon: ({ tintColor }) => <Ionicons name='ios-bookmarks' size={30} color={tintColor} />
    }
  },
  NewDeck: {
    screen: NewDeck,
    navigationOptions: {
      tabBarLabel: 'New Deck',
      tabBarIcon: ({ tintColor }) => <Ionicons name='ios-bookmarks' size={30} color={tintColor} />
    }
  }
}, {
    navigationOptions: {
      header: null
    },
    tabBarOptions: {
      activeTintColor: Platform.OS === 'ios'
        ? darkBlue
        : white,
      style: {
        height: 56,
        backgroundColor: Platform.OS === 'ios'
          ? white
          : darkBlue,
        shadowColor: 'rgba(0, 0, 0, 0.24)',
        shadowOffset: {
          width: 0,
          height: 3
        },
        shadowRadius: 6,
        shadowOpacity: 1
      }
    }
  });
/**
 * Status bar
 */
function MyStatusbar({
  backgroundColor,
  ...props
}) {
  return (
    <View
      style={{
        backgroundColor,
        height: Constants.statusBarHeight
      }}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
  )
}
/**
 * Main Navigator
 * Default will be Tabs View
 */
const customTransition = (index, position) => {
  const sceneRange = [index - 1, index];
  const outputOpacity = [0, 1];
  const transition = position.interpolate({
    inputRange: sceneRange,
    outputRange: outputOpacity,
  })
  return { opacity, transform: [{ translateY }] }

}
const navigationConfig = () => {
  return {
    screenInterpolator: (screenProps) => {
      const position = screenProps.position;
      const scene = screenProps.scene;
      const index = scene.index;

      return customTransition(index, position)
    }
  }
}
const MainNavigator = createStackNavigator({
  Home: {
    screen: Tabs,
    navigationOptions: {
      header: null
    }
  },
  CardDetail: {
    screen: CardDetail,
    navigationOptions: {
      headerTintColor: white,
      headerStyle: {
        backgroundColor: darkBlue
      }
    }
  },
  AddCard: {
    screen: AddCard,
    navigationOptions: {
      headerTintColor: white,
      headerStyle: {
        backgroundColor: darkBlue
      }
    }
  },
  AnswerQuiz: {
    screen: AnswerQuiz,
    navigationOptions: {
      headerTintColor: white,
      headerStyle: {
        backgroundColor: darkBlue
      }
    }
  }
}, {
    transitionConfig: () => ({
      transitionSpec: {
        duration: 300,
        easing: Easing.out(Easing.poly(4)),
        timing: Animated.timing,
      },
      screenInterpolator: sceneProps => {
        const { layout, position, scene } = sceneProps;
        const { index } = scene;

        const height = layout.initHeight;
        const translateY = position.interpolate({
          inputRange: [index - 1, index, index + 1],
          outputRange: [height, 0, 0],
        });

        const opacity = position.interpolate({
          inputRange: [index - 1, index - 0.99, index],
          outputRange: [0, 1, 1],
        });

        return { opacity, transform: [{ translateY }] };
      },
    }),
  });
export default class App extends React.Component {

  componentDidMount() {
    setLocalNotification();
  }
  render() {
    const store = createStore(rootReducer, applyMiddleware(thunk));
    return (
      <Provider store={store}>
        <View style={{
          flex: 1
        }}>
          <MyStatusbar backgroundColor={darkBlue} barStyle="light-content" />
          <MainNavigator />
        </View>
      </Provider>
    );
  }
}
