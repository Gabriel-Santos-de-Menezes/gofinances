import React from 'react';
import { Text, View } from 'react-native';
import { getBottomSpace } from 'react-native-iphone-x-helper';
import { HighlightCard } from '../../components/HighlightCard';
import { TransactionCard } from '../../components/TransactionCard';


import {
  Container,
  Header,
  HighlightCards,
  Icon,
  Photo,
  User,
  UserGreeting,
  UserInfo,
  UserName,
  UserWrapper,
  Transaction,
  Title,
  TransactionList,
} from './styles';
import { DataListProps } from './types';

export function Dashboard() {
  const data: DataListProps[] = [
    {
    id: '1',
    type: 'positive',
    title: 'Desenvolvimento de site',
    amount:'R$ 12.000,00',
    category: {
      name: 'Vendas',
      icon: 'dollar-sign',
    },
    date: '03/12/2021'
  },
  {
    id: '2',
    type: 'negative',
    title: 'Pizza',
    amount:'R$ 59,00',
    category: {
      name: 'Vendas',
      icon: 'coffee',
    },
    date: '03/12/2021'
  },
  {
    id: '3',
    type: 'negative',
    title: 'Academia',
    amount:'R$ 1.200,00',
    category: {
      name: 'Casa',
      icon: 'shopping-bag',
    },
    date: '03/12/2021'
  },
]
  return (
    <Container>
      <Header>
        <UserWrapper>
          <UserInfo>
            <Photo source={{ uri: 'https://avatars.githubusercontent.com/u/46170283?v=4' }} />
            <User>
              <UserGreeting>Olá, </UserGreeting>
              <UserName>Gabriel</UserName>
            </User>
          </UserInfo>

          <Icon name="power" />
        </UserWrapper>
      </Header>

      <HighlightCards >
        <HighlightCard
          type='up'
          title='Entradas'
          amount='R$ 17.400,00'
          lastTransaction='Última entrada dia 13 de abril'
        />
        <HighlightCard
          type='down'
          title='Saídas'
          amount='R$ 1.259,00'
          lastTransaction='Última saída dia 13 de abril'
        />
        <HighlightCard
          type='total'
          title='Total'
          amount='R$ 16.141,00'
          lastTransaction='01 à 16 de abril'
        />
      </HighlightCards>

      <Transaction>
        <Title>
          Listagem

        </Title>
        <TransactionList
          data={data}
          keyExtractor={item => item.id}
          renderItem={({ item }) => <TransactionCard data={item} />}
        >
          
        </TransactionList>
      </Transaction>
    </Container>
  )
}