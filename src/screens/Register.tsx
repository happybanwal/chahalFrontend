import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import React, { useState } from 'react'
import {
  View,
  Text,
  Pressable,
  ToastAndroid,
  TouchableOpacity,
} from 'react-native'
import CommonButton from 'src/components/common/button/CommonButton'
import FloatingTextInput from 'src/components/common/textInput/FloatingTextInput'
import { RootStackParamList } from 'src/types/common'
import { useSelector, useDispatch } from 'react-redux'
import { registerUser } from 'src/redux/user/UserAction'

const Register = () => {
  type loginScreenProps = NativeStackNavigationProp<RootStackParamList, 'Login'>
  const navigation = useNavigation<loginScreenProps>()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  const [loading, setLoading] = useState(false)
  const dispatch = useDispatch()

  const handleRegister = async () => {
    setLoading(true)
    try {
      const response = await dispatch(registerUser(email, password, name))
      console.log('Register successful:', response)
      navigation.navigate('BottomTabNavigator')
      setLoading(false)
    } catch (error) {
      console.error('Register failed:', error)
      ToastAndroid.show(`${error?.response?.data?.massage}`, ToastAndroid.SHORT)
      setLoading(false)
    }
  }

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
            handleRegister()
          }}
        />
      </View>

      <View>
        {/* footer */}
        <View className="justify-end mt-10 mb-10">
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Login')
            }}
            className="mb-10 flex-row justify-center items-center"
          >
            <Text className="" style={{ fontFamily: 'Inter-Medium' }}>
              Already have an account?
            </Text>
            <Text
              className="text-[#31A8FF]"
              style={{ fontFamily: 'Inter-Medium' }}
            >
              {'  '}Login here
            </Text>
          </TouchableOpacity>
        </View>
        {/* footer */}
      </View>
    </View>
  )
}
export default Register
