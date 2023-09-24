import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import React, { useState } from 'react'
import { View, Text, Pressable } from 'react-native'
import CommonButton from 'src/components/common/button/CommonButton'
import FloatingTextInput from 'src/components/common/textInput/FloatingTextInput'
import { RootStackParamList } from 'src/types/common'
import { useSelector, useDispatch } from 'react-redux'
import { loginUser } from 'src/redux/user/UserAction'

const Login = () => {
  type loginScreenProps = NativeStackNavigationProp<RootStackParamList, 'Login'>
  const navigation = useNavigation<loginScreenProps>()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const dispatch = useDispatch()

  return (
    <View className="flex-1 justify-center">
      <View className="p-6">
        <FloatingTextInput
          label="Email"
          placeholder="Enter Your Email"
          iconName="mail"
          onChangeText={(text) => {
            setEmail(text)
          }}
          value={email}
        />

        <FloatingTextInput
          label="Password"
          placeholder="Enter Your Password"
          iconName="lock"
          onChangeText={(text) => {
            setPassword(text)
          }}
          value={password}
        />

        <CommonButton
          text="Login"
          onPress={() => {
            dispatch(loginUser(email, password))
              .then((response) => {
                if (response?.success) {
                  navigation.navigate('BottomTabNavigator')
                }
              })
              .catch((error) => {
                console.log(error?.response?.data?.massage)
              })
          }}
        />
      </View>
    </View>
  )
}
export default Login
