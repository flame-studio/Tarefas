import React from 'react';

import { Alert } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { connect } from 'react-redux';

import * as TodoActions from '../../store/actions';

function DeleteList({ dispatch, listSelected }) {
    function deleteList(index) {
        Alert.alert(
            'Cuidado',
            'Você tem certeza que deseja excluir essa lista?',
            [
                {
                    text: "Sim",
                    onPress: () => {
                        dispatch(TodoActions.setList(0));
                        dispatch(TodoActions.deleteList(index))
                    }
                }, {
                    text: "Não",
                    onPress: () => null
                }
            ], {
                cancelable: false
            },
        );
    }

    if (listSelected !== 0 && listSelected !== 1) {
        return (
            <Icon 
                name="trash-can-outline"
                size={ 23 }
                color="#373737"
                style={{ marginRight: 15 }}
                onPress={ () => deleteList(listSelected) }
            />
        );
    } else {
        return null;
    }
}

export default connect ((state) => ({
    listSelected: state.listSelected
}))(DeleteList);
