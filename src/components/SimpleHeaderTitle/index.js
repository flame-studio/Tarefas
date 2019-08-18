import React, { Component } from 'react';

import Icon from 'react-native-vector-icons/FontAwesome';

import { Container, Text } from './styles';

export default function SimpleHeaderTitle({ title }) {
    return (
        <Container>
            <Text>{ title }</Text>
        </Container>
    );
}
