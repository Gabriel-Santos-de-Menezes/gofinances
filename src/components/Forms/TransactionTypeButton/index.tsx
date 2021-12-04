import React from 'react';

import { Text } from 'react-native';

import { Props } from './types';
import { 
  Container,
  Icon,
  Title,
 } from './styles';

 const icons = {
   up: 'arrow-up-circle',
   down: 'arrow-down-circle',
 };

function TransactionTypeButton({title, type, isActive, ...rest}: Props) {
  return (
    <Container 
      {...rest} 
      isActive={isActive}
      type={type}
    >
      <Icon 
        name={icons[type]} 
        type={type}
      />
      <Title>{title}</Title>
    </Container>
  );
};

export default TransactionTypeButton;
