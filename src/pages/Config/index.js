import React, { Component } from 'react';

import Icon from 'react-native-vector-icons/Feather';

import { Container, ItemContent, Item, TextItem, SwitchCpn, StatusItem } from './styles';

export default class Config extends Component {
  constructor(props) {
    super(props);
    this.state = {
      darkMode: false,
      notifications: false
    }
  }

  render() {
    return (
      <Container>
        <Item>
          <ItemContent>
            <Icon 
              name="moon"
              size={20}
              color="#FF0000"
            />
            <TextItem>Tema escuro</TextItem>
            <StatusItem>Em breve</StatusItem>
          </ItemContent>
          <SwitchCpn
            onValueChange={ (value) => this.setState({ darkMode: value }) }
            value={ this.state.darkMode }
            disabled={ true }
          />
        </Item>
        <Item>
          <ItemContent>
            <Icon 
              name="bell"
              size={20}
              color="#FF0000"
            />
            <TextItem>Notificações</TextItem>
            <StatusItem>Em breve</StatusItem>
          </ItemContent>
          <SwitchCpn 
            onValueChange={ (value) => this.setState({ notifications: value }) }
            value={ this.state.notifications }
            disabled={ true }
          />
        </Item>
      </Container>
    );
  }
}