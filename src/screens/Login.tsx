import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import React, { useState } from 'react'
import {
  View,
  Text,
  Pressable,
  ToastAndroid,
  Alert,
  TouchableOpacity,
} from 'react-native'
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
  const [loading, setLoading] = useState(false)
  const dispatch = useDispatch()

  const handleLogin = async () => {
    setLoading(true)
    try {
      const response = await dispatch(loginUser(email, password))
      console.log('Login successful:', response)
      navigation.navigate('BottomTabNavigator')
      setLoading(false)
    } catch (error) {
      console.error('Login failed:', error)
      ToastAndroid.show(`${error?.response?.data?.massage}`, ToastAndroid.SHORT)
      setLoading(false)
    }
  }

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
          loading={loading}
          onPress={() => {
            handleLogin()
          }}
        />
      </View>

      <View>
        {/* footer */}
        <View className="justify-end mt-10 mb-10">
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Register')
            }}
            className="mb-10 flex-row justify-center items-center"
          >
            <Text className="" style={{ fontFamily: 'Inter-Medium' }}>
              Don't have an account?
            </Text>
            <Text
              className="text-[#31A8FF]"
              style={{ fontFamily: 'Inter-Medium' }}
            >
              {'  '}SignUp here
            </Text>
          </TouchableOpacity>
        </View>
        {/* footer */}
      </View>
    </View>
  )
}
export default Login
