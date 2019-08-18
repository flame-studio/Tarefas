import React from 'react';

import { Modal, ToastAndroid } from 'react-native';
import { connect } from 'react-redux';

import Icon from 'react-native-vector-icons/FontAwesome';

import { Container, Content, Title, Input, ButtonContent, ButtonAdd, ButtonCancel } from './styles';

import * as TodoActions from '../../store/actions';

function ModalAddTask({ visible, setVisible, taskName, dispatch }) {
    function addTask() {
        if (taskName.length > 0 && taskName.trim()) {
            if (taskName.length < 30) {
                dispatch(TodoActions.addTask(taskName));
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
                    <Title>Nova Tarefa</Title>
                    <Input 
                        onChangeText={ (text) => dispatch(TodoActions.setTaskName(text)) }
                        value={ taskName }
                    />
                    <ButtonContent>
                        <ButtonAdd
                            onPress={ () => addTask() }
                        >
                            <Icon 
                                name="plus"
                                size={ 25 }
                                color="#FFFFFF"
                            />
                        </ButtonAdd>
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
    taskName: state.taskName
}))(ModalAddTask);