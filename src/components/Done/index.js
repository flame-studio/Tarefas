import React from 'react';

import { ToastAndroid } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons'

import { connect } from 'react-redux';

import * as TodoActions from '../../store/actions';

function Done({ navigation, listName, dispatch }) {
    function createList() {
        if (listName.length > 0 && listName.trim()) {
            if (listName.length < 20) {
                dispatch(TodoActions.addList(listName));
                dispatch(TodoActions.setListName(""));
                dispatch(TodoActions.setNewList(false));
                navigation.navigate("ListTask");
            } else {
                ToastAndroid.show('Máximo de 20 caracteres.', ToastAndroid.LONG);
            }    
        } else {
            ToastAndroid.show("Insira uma lista válida!", ToastAndroid.LONG);
        }
    }

    return (
        <Icon
            name="done"
            size={ 23 }
            color={ listName.length > 0 && listName.trim() && listName.length < 20 ? "#D50000" : "#FFFFFF"}
            style={{ marginRight: 15 }}
            onPress={ () => createList() }
        />
    );
}

export default connect (state => ({
    listName: state.listName
}))(Done);