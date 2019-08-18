import React, { Component } from 'react';

import { connect } from 'react-redux';

import * as TodoActions from '../../store/actions';

import { Container, Input } from './styles';

class NewList extends Component {
    setText(text) {
        this.props.dispatch(TodoActions.setListName(text));
    }

    render() {
        return (
            <Container>
                <Input
                    onChangeText={ (text) => this.setText(text) }
                    value={ this.props.listName }
                />
            </Container>
        );
    }
}

export default connect (state => ({
    listName: state.listName
}))(NewList);