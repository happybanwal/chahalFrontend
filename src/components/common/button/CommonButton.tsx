import React from 'react'
import { View, Text } from 'react-native'
import { Button as PaperButton } from 'react-native-paper'

export type FI = {
  loading?: boolean
  text: string
  onPress: () => void
}

const CommonButton = ({ onPress, text, loading }: FI) => {
  return (
    <View>
      <PaperButton
        loading={loading}
        disabled={loading}
        contentStyle={{ width: '100%', height: 50 }}
        className=" bg-[#31A8FF] font-[Inter-Bold]"
        mode="contained"
        onPress={onPress}
        uppercase={false}
      >
        {text}
      </PaperButton>
    </View>
  )
}

export default CommonButton
