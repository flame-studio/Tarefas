import React, { Component } from 'react';

import Icon from 'react-native-vector-icons/FontAwesome';
import LottieView from 'lottie-react-native';
import { connect } from 'react-redux';

import { Container, ScrollContainer, Title, List, ButtonAdd, TextButtonAdd, NoTasksContent, NoTaskText, NoTaskSubText } from './styles';
import Office from '../../../assets/animations/office.json';

import Task from '../../components/Task';
import ModalAddTask from '../../components/ModalAddTask';
import ModalDeleteTask from '../../components/ModalDeleteTask';
import ModalEditTask from '../../components/ModalEditTask';

import * as TodoActions from '../../store/actions';

class ListTask extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      modalAddVisible: false,
      modalDeleteVisible: false,
      modalEditVisible: false
    }
  }

  render() {
    const { lists, dispatch, listSelected } = this.props;

    return (
      <>
        <Container>
            <Title>{ lists[listSelected].name }</Title>
            <List 
                data={ lists[listSelected].tasks }
                extraData={ this.props }
                keyExtractor={ item => item.id.toString() }
                renderItem={ ({ item }) => (
                  <Task 
                    done={ item.done }
                    onPress={ () => item.done ? dispatch(TodoActions.doneFalse(item.id)) : dispatch(TodoActions.doneTrue(item.id)) }
                    name={ item.title }
                    onSwipeFromLeft={ () => {
                      this.setState({ modalEditVisible: true });
                      dispatch(TodoActions.setTask(item.id));
                    }}
                    onSwipeFromRight={ () => {
                      this.setState({ modalDeleteVisible: true });
                      dispatch(TodoActions.setTask(item.id));
                    }}
                  />
                ) }
              />
        </Container>
        <ButtonAdd
          onPress={ () => this.setState({ modalAddVisible: true }) }
        >
          <Icon
            name="plus"
            size={ 20 }
            color="#FFFFFF"
          />
          <TextButtonAdd>Adicionar tarefa</TextButtonAdd>
        </ButtonAdd>
        <ModalDeleteTask
          visible={ this.state.modalDeleteVisible }
          setVisible={ (visible) => this.setState({ modalDeleteVisible: visible }) }
        ></ModalDeleteTask>
        <ModalEditTask
          visible={ this.state.modalEditVisible }
          setVisible={ (visible) => this.setState({ modalEditVisible: visible }) }
        ></ModalEditTask>
        <ModalAddTask
          visible={ this.state.modalAddVisible }
          setVisible={ (visible) => this.setState({ modalAddVisible: visible }) }
        ></ModalAddTask>
        {
          lists[listSelected].tasks.length === 0 ? (
            <NoTasksContent>
              <LottieView 
                source={ Office }
                style={{ width: 200 }}
              />
              <NoTaskText>Nenhuma tarefa criada</NoTaskText>
              <NoTaskSubText>Vamos começar?</NoTaskSubText>
            </NoTasksContent>
          ) : null
        }    
      </>
    );
  }
}

export default connect (state => ({
  lists: state.lists,
  listSelected: state.listSelected
}))(ListTask);