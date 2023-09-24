import React from 'react'
import { View } from 'react-native'
import { TextInput, DefaultTheme } from 'react-native-paper'

export type FI = {
  label: string
  iconName: string
  value: string | undefined
  placeholder: string
  iconColor?: string | undefined
  type?: string
  onChangeText: (text: string) => void
}

const FloatingTextInput = ({
  label,
  iconName,
  placeholder,
  onChangeText,
  value,
  iconColor,
  type,
}: FI) => {
  return (
    <View>
      <TextInput
        // @ts-ignore
        keyboardType={type ? type : 'default'}
        style={{
          fontFamily: 'Inter-Medium',
          marginBottom: 5,
        }}
        placeholder={placeholder}
        onChangeText={(text) => onChangeText(text)}
        mode={'outlined'}
        label={label}
        value={value}
        outlineColor={'#31A8FF'}
        activeOutlineColor={'#31A8FF'}
        theme={DefaultTheme}
        right={
          <TextInput.Icon
            icon={iconName}
            color={iconColor ? iconColor : 'lightgrey'}
          />
        }
      />
    </View>
  )
}
export default FloatingTextInput
