import React from 'react';

import Icon from 'react-native-vector-icons/Ionicons';

import { connect } from 'react-redux';

import * as TodoActions from '../../store/actions';

function Back({ navigation, dispatch, listSelected }) {
    function goBack(index) {
        dispatch(TodoActions.setList(index));
        dispatch(TodoActions.setNewList(false));
        dispatch(TodoActions.setConfig(false));
        navigation.navigate("ListTask");
    }

    return (
        <Icon
            name="ios-arrow-back"
            size={ 23 }
            color="#D50000"
            style={{ marginLeft: 15 }}
            onPress={ () => goBack(listSelected) }
        />
    );
}

export default connect (state => ({
    listSelected: state.listSelected
}))(Back);