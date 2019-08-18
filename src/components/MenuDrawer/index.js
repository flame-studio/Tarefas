import React from 'react';

import { connect } from 'react-redux';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { 
    Container, 
    HeaderContent, 
    HeaderFirstContent,
    HeaderSecondContent,
    Title, 
    Version,
    Content, 
    Item, 
    ItemActive, 
    ItemFisrtContent, 
    ItemSecondContent,
    ItemTitle, 
    ItemNumber,
    ButtonBorder,
    ListScroll
} from './styles';

import * as TodoActions from '../../store/actions';

function MenuDrawer({ lists, dispatch, navigation, listSelected, newListSelected, configSelected }) {
    function setList(index) {
        navigation.navigate("ListTask");
        navigation.closeDrawer();
        dispatch(TodoActions.setList(index));
        dispatch(TodoActions.setNewList(false));
        dispatch(TodoActions.setConfig(false));
    }

    function newList() {
        dispatch(TodoActions.setNewList(true));
        dispatch(TodoActions.setConfig(false));
        navigation.navigate("NewList");
    }   

    function config() {
        dispatch(TodoActions.setNewList(false));
        dispatch(TodoActions.setConfig(true));
        navigation.navigate("Config");
    }

    return (
        <Container>
            <HeaderContent>
                <HeaderFirstContent>
                    <FontAwesome 
                        name="check"
                        size={ 20 }
                        color="#D50000"
                    />
                    <Title>Tarefas</Title>
                </HeaderFirstContent>
                <HeaderSecondContent>
                    <Version>v1.016</Version>
                </HeaderSecondContent>
            </HeaderContent>
            <Content>
            {
                newListSelected || configSelected ? (
                    <Item
                        onPress={ () => setList(0) }
                    >
                        <ItemFisrtContent>
                            <MaterialCommunityIcons 
                                name="weather-sunny"
                                size={ 20 }
                                color="#D50000"
                                style={{ marginLeft: 15 }}
                            />
                            <ItemTitle>{ lists[0].name }</ItemTitle>
                        </ItemFisrtContent>
                        <ItemSecondContent>
                            <ItemNumber>{ lists[0].tasks.length }</ItemNumber>
                        </ItemSecondContent>
                    </Item>
                ) : listSelected === 0 ? (
                        <ItemActive
                            onPress={ () => setList(0) }
                        >
                            <ItemFisrtContent>
                                <MaterialCommunityIcons 
                                    name="weather-sunny"
                                    size={ 20 }
                                    color="#D50000"
                                    style={{ marginLeft: 15 }}
                                />
                                <ItemTitle>{ lists[0].name }</ItemTitle>
                            </ItemFisrtContent>
                            <ItemSecondContent>
                                <ItemNumber>{ lists[0].tasks.length }</ItemNumber>
                            </ItemSecondContent>
                        </ItemActive>
                    ) : (
                        <Item
                            onPress={ () => setList(0) }
                        >
                            <ItemFisrtContent>
                                <MaterialCommunityIcons 
                                    name="weather-sunny"
                                    size={ 20 }
                                    color="#D50000"
                                    style={{ marginLeft: 15 }}
                                />
                                <ItemTitle>{ lists[0].name }</ItemTitle>
                            </ItemFisrtContent>
                            <ItemSecondContent>
                                <ItemNumber>{ lists[0].tasks.length }</ItemNumber>
                            </ItemSecondContent>
                        </Item>
                    )
                }
                {
                    newListSelected || configSelected ? (
                        <Item
                            onPress={ () => setList(1) }
                        >
                            <ItemFisrtContent>
                                <MaterialCommunityIcons 
                                    name="star-outline"
                                    size={ 20 }
                                    color="#D50000"
                                    style={{ marginLeft: 15 }}
                                />
                                <ItemTitle>{ lists[1].name }</ItemTitle>
                            </ItemFisrtContent>
                            <ItemSecondContent>
                                <ItemNumber>{ lists[1].tasks.length }</ItemNumber>
                            </ItemSecondContent>
                        </Item>
                    ) : listSelected === 1 ? (
                            <ItemActive
                                onPress={ () => setList(1) }
                            >
                                <ItemFisrtContent>
                                    <MaterialCommunityIcons 
                                        name="star-outline"
                                        size={ 20 }
                                        color="#D50000"
                                        style={{ marginLeft: 15 }}
                                    />
                                    <ItemTitle>{ lists[1].name }</ItemTitle>
                                </ItemFisrtContent>
                                <ItemSecondContent>
                                    <ItemNumber>{ lists[1].tasks.length }</ItemNumber>
                                </ItemSecondContent>
                            </ItemActive>
                        ) : (
                            <Item
                                onPress={ () => setList(1) }
                            >
                                <ItemFisrtContent>
                                    <MaterialCommunityIcons 
                                        name="star-outline"
                                        size={ 20 }
                                        color="#D50000"
                                        style={{ marginLeft: 15 }}
                                    />
                                    <ItemTitle>{ lists[1].name }</ItemTitle>
                                </ItemFisrtContent>
                                <ItemSecondContent>
                                    <ItemNumber>{ lists[1].tasks.length }</ItemNumber>
                                </ItemSecondContent>
                            </Item>
                        )
                }
            </Content>
            <ButtonBorder>
                {
                    !newListSelected ? (
                        <Item
                            onPress={ () => newList() }
                        >
                            <ItemFisrtContent>
                                <MaterialCommunityIcons 
                                    name="plus"
                                    size={ 20 }
                                    color="#D50000"
                                    style={{ marginLeft: 15 }}
                                />
                                <ItemTitle>Criar nova lista</ItemTitle>
                            </ItemFisrtContent>
                        </Item>
                    ) : (
                        <ItemActive
                            onPress={ () => newList() }
                        >
                            <ItemFisrtContent>
                                <MaterialCommunityIcons 
                                    name="plus"
                                    size={ 20 }
                                    color="#D50000"
                                    style={{ marginLeft: 15 }}
                                />
                                <ItemTitle>Criar nova lista</ItemTitle>
                            </ItemFisrtContent>
                        </ItemActive>
                    )
                }                
            </ButtonBorder>
            <ListScroll>
                {
                    lists.map( (item, index) => {
                        if (!(index <= 1)) {
                            if (newListSelected || configSelected) {
                                return (
                                    <Item
                                        key={ index }
                                        onPress={ () => setList(index) }
                                    >
                                        <ItemFisrtContent>
                                            <MaterialCommunityIcons 
                                                name="format-list-bulleted"
                                                size={ 20 }
                                                color="#D50000"
                                                style={{ marginLeft: 15 }}
                                            />
                                            <ItemTitle>{ item.name }</ItemTitle>
                                        </ItemFisrtContent>
                                        <ItemSecondContent>
                                            <ItemNumber>{ item.tasks.length }</ItemNumber>
                                        </ItemSecondContent>
                                    </Item>
                                );
                            } else {
                                if (listSelected === index) {
                                    return (
                                        <ItemActive
                                            key={ index }
                                            onPress={ () => setList(index) }
                                        >
                                            <ItemFisrtContent>
                                                <MaterialCommunityIcons 
                                                    name="format-list-bulleted"
                                                    size={ 20 }
                                                    color="#D50000"
                                                    style={{ marginLeft: 15 }}
                                                />
                                                <ItemTitle>{ item.name }</ItemTitle>
                                            </ItemFisrtContent>
                                            <ItemSecondContent>
                                                <ItemNumber>{ item.tasks.length }</ItemNumber>
                                            </ItemSecondContent>
                                        </ItemActive>
                                    );
                                } else {
                                    return (
                                        <Item
                                            key={ index }
                                            onPress={ () => setList(index) }
                                        >
                                            <ItemFisrtContent>
                                                <MaterialCommunityIcons 
                                                    name="format-list-bulleted"
                                                    size={ 20 }
                                                    color="#D50000"
                                                    style={{ marginLeft: 15 }}
                                                />
                                                <ItemTitle>{ item.name }</ItemTitle>
                                            </ItemFisrtContent>
                                            <ItemSecondContent>
                                                <ItemNumber>{ item.tasks.length }</ItemNumber>
                                            </ItemSecondContent>
                                        </Item>
                                    );
                                }
                            }
                                
                        }
                    })
                }
            </ListScroll>
            <ButtonBorder>
            {
                    !configSelected ? (
                        <Item
                            onPress={ () => config() }
                        >
                            <ItemFisrtContent>
                                <MaterialCommunityIcons 
                                    name="settings-outline"
                                    size={ 20 }
                                    color="#D50000"
                                    style={{ marginLeft: 15 }}
                                />
                                <ItemTitle>Configurações</ItemTitle>
                            </ItemFisrtContent>
                        </Item>
                    ) : (
                        <ItemActive
                            onPress={ () => config() }
                        >
                            <ItemFisrtContent>
                                <MaterialCommunityIcons 
                                    name="settings-outline"
                                    size={ 20 }
                                    color="#D50000"
                                    style={{ marginLeft: 15 }}
                                />
                                <ItemTitle>Configurações</ItemTitle>
                            </ItemFisrtContent>
                        </ItemActive>
                    )
                }    
            </ButtonBorder>
        </Container>
    );
}

export default connect (state => ({
    lists: state.lists,
    listSelected: state.listSelected,
    newListSelected: state.newListSelected,
    configSelected: state.configSelected
}))(MenuDrawer);