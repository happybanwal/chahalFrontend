// import "react-native-reanimated"
import { AppRegistry } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { RootStackParamList } from './src/types/common'
import { HomeScreen, SettingsScreen } from 'src/screens'
import { HeaderTitle } from 'src/components/common'
import { Provider as JotaiProvider } from 'jotai'
import { Provider as PaperProvider } from 'react-native-paper'
import Login from 'src/screens/Login'
import BottomTabNavigator from 'src/navigation/BottomTabNavigator'
import Register from 'src/screens/Register'
import { useFonts } from 'expo-font'
import { Provider } from 'react-redux'
import store from 'src/redux/Store'

const Stack = createNativeStackNavigator<RootStackParamList>()
const Tab = createBottomTabNavigator()

export default function App() {
  const [fontsLoaded] = useFonts({
    'Inter-Bold': require('./src/assets/fonts/Inter-Bold.ttf'),
    'Inter-ExtraBold': require('./src/assets/fonts/Inter-ExtraBold.ttf'),
    'Inter-Medium': require('./src/assets/fonts/Inter-Medium.ttf'),
    'Inter-Regular': require('./src/assets/fonts/Inter-Regular.ttf'),
  })

  if (!fontsLoaded) {
    return null
  }
  return (
    <Provider store={store}>
      <NavigationContainer>
        <JotaiProvider>
          <PaperProvider>
            <Stack.Navigator
              initialRouteName="Register"
              screenOptions={{
                headerShown: false,
              }}
            >
              <Stack.Screen name="Login" component={Login} />
              <Stack.Screen name="Register" component={Register} />
              <Stack.Screen
                name="BottomTabNavigator"
                component={BottomTabNavigator}
              />
            </Stack.Navigator>
          </PaperProvider>
        </JotaiProvider>
      </NavigationContainer>
    </Provider>
  )
}

AppRegistry.registerComponent('ExpoStarter', () => App)
