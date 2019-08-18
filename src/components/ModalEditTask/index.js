import React from 'react';

import { Modal, ToastAndroid } from 'react-native';
import { connect } from 'react-redux';

import Icon from 'react-native-vector-icons/FontAwesome';

import { Container, Content, Title, Input, ButtonContent, ButtonEdit, ButtonCancel } from './styles';

import * as TodoActions from '../../store/actions';

function ModalEditTask({ visible, setVisible, taskName, taskSelected, dispatch }) {
    function editTask() {
        if (taskName.length > 0 && taskName.trim()) {
            if (taskName.length < 30) {
                dispatch(TodoActions.editTask(taskSelected, taskName));
                dispatch(TodoActions.setTaskName(""));
                setVisible(false);
            } else {
                ToastAndroid.show('Máximo de 30 caracteres.', ToastAndroid.LONG);
            }      
        } else {
            ToastAndroid.show('Insira uma tarefa válida!', ToastAndroid.LONG);
        }              
    }

    function closeModal() {
        dispatch(TodoActions.setTaskName(""));
        setVisible(false);
    }

    return (
        <Modal
            transparent
            visible={ visible }
            animationType={ 'fade' }
        >
            <Container>
                <Content>
                    <Title>Editar tarefa</Title>
                    <Input 
                        onChangeText={ (text) => dispatch(TodoActions.setTaskName(text)) }
                        value={ taskName }
                    />
                    <ButtonContent>
                        <ButtonEdit
                            onPress={ () => editTask() }
                        >
                            <Icon 
                                name="pencil"
                                size={ 25 }
                                color="#FFFFFF"
                            />
                        </ButtonEdit>
                        <ButtonCancel
                            onPress={ () => closeModal() }
                        >
                            <Icon 
                                name="close"
                                size={ 25 }
                                color="#FFFFFF"
                            />
                        </ButtonCancel>
                    </ButtonContent>
                </Content>
            </Container>
        </Modal>
    );
}

export default connect ( state => ({
    lists: state.lists,
    taskName: state.taskName,
    taskSelected: state.taskSelected,
    listSelected: state.listSelected
}))(ModalEditTask);