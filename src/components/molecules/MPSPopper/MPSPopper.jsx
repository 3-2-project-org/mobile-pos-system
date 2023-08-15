import { View, Text } from 'react-native'
import React from 'react'
import { Popover } from "react-native-popper" 

const MPSPopper = ({
    children,
    open
}) => {
  return (
    <View>
      <Popover trigger={open}>
        {children}
      </Popover>
    </View>
  )
}

export default MPSPopper