import React, { Component } from 'react';

import Icon from 'react-native-vector-icons/FontAwesome';

import { Container, Text } from './styles';

export default function HeaderTitle() {
    return (
        <Container>
            <Icon 
                name="check"
                size={ 20 }
                color="#D50000"
            />
            <Text>Tarefas</Text>
        </Container>
    );
}
