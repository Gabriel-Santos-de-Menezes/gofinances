import React, { useState } from 'react';

import { Text } from 'react-native';
import Button from '../../components/Forms/Button';
import Input from '../../components/Forms/Input';
import TransactionTypeButton from '../../components/Forms/TransactionTypeButton';

import { 
  Container,
   Header,
   Title,
   Form,
   Fields,
   TransactionsTypes
  } from './styles';

function Register() {
  const [transactionType, setTransactionTYpe] = useState('');

  const handleTransactionTypeSelect = (type: 'up' | 'down') => {
    setTransactionTYpe(type);
  }
  return (
    <Container>
      <Header>
      <Title>Cadastro</Title>

      </Header>

    <Form>
        <Fields>
          <Input
            placeholder='Nome'
          />
          <Input
            placeholder='Preço'
          />

          <TransactionsTypes>
            <TransactionTypeButton 
              type='up'
              title="Income"
              onPress={() => handleTransactionTypeSelect('up')}
              isActive={transactionType === 'up' }
            />
            <TransactionTypeButton 
              type='down'
              title="Outcome"
              onPress={() => handleTransactionTypeSelect('down')}
              isActive={transactionType === 'down' }
            />
          </TransactionsTypes>
        </Fields>

        <Button title="Enviar" />
    </Form>
    </Container>
  );
};

export default Register;
