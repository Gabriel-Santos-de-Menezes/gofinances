import React from 'react';

import { Text } from 'react-native';

import { Container } from './styles';
import { Props } from './types';

function Input({...rest}: Props) {
  return (
    <Container {...rest} />
  );
};

export default Input;
