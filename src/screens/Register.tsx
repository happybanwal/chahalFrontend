import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import React, { useState } from 'react'
import { View, Text, Pressable } from 'react-native'
import CommonButton from 'src/components/common/button/CommonButton'
import FloatingTextInput from 'src/components/common/textInput/FloatingTextInput'
import { RootStackParamList } from 'src/types/common'

const Register = () => {
  type loginScreenProps = NativeStackNavigationProp<RootStackParamList, 'Login'>
  const navigation = useNavigation<loginScreenProps>()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')

  return (
    <View className="flex-1 justify-center">
      <View className="p-6">
        <FloatingTextInput
          label="Name"
          placeholder="Enter Your Name"
          iconName="account"
          onChangeText={(text) => {
            setName(text)
          }}
          value={name}
        />

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
          //   loading={loading}
          text="Sign Up"
          onPress={() => {
            // navigation.navigate('BottomTabNavigator')
            // handleSignUp()
          }}
        />
      </View>
    </View>
  )
}
export default Register
