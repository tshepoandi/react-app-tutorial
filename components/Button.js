import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

const Button = ({ onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text>hi</Text>
    </TouchableOpacity>
  );
};

export default Button;