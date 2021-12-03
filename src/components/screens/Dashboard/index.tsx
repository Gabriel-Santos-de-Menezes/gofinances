import React from 'react';
import { Text, View } from 'react-native';
import { HighlightCard } from './HighlightCard';


import { Container, Header, HighlightCards, Icon, Photo, User, UserGreeting, UserInfo, UserName, UserWrapper } from './styles';

export function Dashboard() {
  return (
    <Container>
      <Header>
        <UserWrapper>
          <UserInfo>
            <Photo source={{ uri: 'https://avatars.githubusercontent.com/u/46170283?v=4'}} />
            <User>
              <UserGreeting>Olá, </UserGreeting>
              <UserName>Gabriel</UserName>
            </User>
          </UserInfo>

          <Icon name="power" />
        </UserWrapper>
      </Header>

      <HighlightCards >
        <HighlightCard />
        <HighlightCard />
      </HighlightCards>
    </Container>
  )
}