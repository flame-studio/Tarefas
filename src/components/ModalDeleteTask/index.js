import React from 'react';

import { Modal, ToastAndroid } from 'react-native';

import { connect } from 'react-redux';

import LottieView from 'lottie-react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

import { Container, Content, Title, ButtonContent, ButtonDelete, ButtonCancel } from './styles';

import * as TodoActions from '../../store/actions';

import Trash from '../../../assets/animations/alert.json';

function ModalDeleteTask({ visible, setVisible, dispatch, taskSelected }) {
    function deleteTask() {
        dispatch(TodoActions.deleteTask(taskSelected));
        setVisible(false);     
        ToastAndroid.show('Tarefa excluída com sucesso!', ToastAndroid.LONG); 
    }

    function closeModal() {
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
                    <LottieView 
                        source={ Trash }
                        autoPlay={ true }
                        loop={ false }
                        style={{ width: 100 }}
                    />
                    <Title>Você tem certeza?</Title>
                    <ButtonContent>
                        <ButtonDelete
                            onPress={ () => deleteTask() }
                        >
                            <Icon 
                                name="trash"
                                size={ 25 }
                                color="#FFFFFF"
                            />
                        </ButtonDelete>
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
    taskName: state.taskName,
    taskSelected: state.taskSelected
}))(ModalDeleteTask);