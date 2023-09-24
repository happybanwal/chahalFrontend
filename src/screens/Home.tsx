import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { useFocusEffect, useNavigation } from '@react-navigation/native'
import { RootStackParamList } from '../types/common'
import { View, Text, Alert, BackHandler } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { GlobalClassName } from 'src/styles/global.styles'
import { useAtom } from 'jotai'
import { themeAtom } from 'src/store/themeStore'
import { useSelector } from 'react-redux'
import React from 'react'

const Home = () => {
  const [themeState] = useAtom(themeAtom)
  type homeScreenProps = NativeStackNavigationProp<RootStackParamList, 'Home'>
  const navigation = useNavigation<homeScreenProps>()

  const { userDetails } = useSelector((state) => state.user)

  useFocusEffect(
    React.useCallback(() => {
      const backAction = () => {
        Alert.alert('Hold on!', 'Are you sure you want to go back?', [
          {
            text: 'Cancel',
            onPress: () => null,
            style: 'cancel',
          },
          {
            text: 'YES',
            onPress: () => {
              navigation.push('Login')
            },
          },
        ])
        return true
      }

      const backHandler = BackHandler.addEventListener(
        'hardwareBackPress',
        backAction
      )

      return () => backHandler.remove()
    }, [])
  )

  return (
    <View className={`${GlobalClassName.container} ${themeState}`}>
      <StatusBar style="auto" />
      <Text>Welcome {userDetails.data.name} to home page</Text>
    </View>
  )
}
export default Home
