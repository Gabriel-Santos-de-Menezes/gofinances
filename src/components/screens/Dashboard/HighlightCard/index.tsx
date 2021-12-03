import React from 'react';

import { Amount, Container, Footer, LastTransaction, Title, Header, Icon} from './styles';
import { Props } from './types';

const icon = {
  up: 'arrow-up-circle',
  down: 'arrow-down-circle',
  total: 'dollar-sign',
}

export function HighlightCard ({ title, amount, lastTransaction, type }: Props){
  return (
    <Container type={type}>
      <Header>
        <Title type={type}>{title}</Title>
        <Icon name={icon[type]} type={type} />
      </Header>

      <Footer>
        <Amount type={type}>{title}</Amount>
        <LastTransaction type={type}>{lastTransaction}</LastTransaction>
      </Footer>
    </Container>
  );
}