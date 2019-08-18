import React, { Component } from 'react';

import LottieView from 'lottie-react-native';

import Swipeable from 'react-native-gesture-handler/Swipeable';

import Icon from 'react-native-vector-icons/MaterialIcons';

import {
    ContentTask,
    TitleTask,
    EditContent,
    DeleteContent,
    ButtonIcon
} from './styles';

import Done from '../../../assets/animations/done.json';

export default class Task extends Component {
    play() {
        this.animation.play();
        this.props.onPress();
    }

    reset() {
        this.animation.reset();
        this.props.onPress();
    }

    leftActions() {
        return (
            <EditContent>
                <Icon 
                    name="mode-edit"
                    size={ 20 }
                    color="#FFFFFF"
                />
            </EditContent>
        );
    }

    rightActions() {
        return (
            <DeleteContent>
                <Icon 
                    name="delete"
                    size={ 20 }
                    color="#FFFFFF"
                />
            </DeleteContent>
        );
    }

    render() {
        const { name, done } = this.props;

        return (
            <Swipeable
                ref={ swipeable => {
                    this.swipeable = swipeable;
                } }
                renderLeftActions={ () => this.leftActions() }
                renderRightActions={ () => this.rightActions() }
                onSwipeableRightOpen={ () => this.swipeable.close() }
                onSwipeableLeftOpen={ () => this.swipeable.close() }
                onSwipeableRightWillOpen={ this.props.onSwipeFromRight }
                onSwipeableLeftWillOpen={ this.props.onSwipeFromLeft }
            >
                <ContentTask>
                    <ButtonIcon
                        onPress={ () => !done ? this.play() : this.reset() }
                    >
                        <LottieView 
                            ref={ animation => {
                                this.animation = animation;
                            }}
                            source={ Done }
                            loop={ false }
                            style={{ width: 80, height: 80 }}
                            progress={ done ? 1 : 0 }
                        />
                    </ButtonIcon>
                    <TitleTask
                        style={{ textDecorationLine: done ? "line-through" : "none" }}
                    >{ name }</TitleTask>
                </ContentTask>
            </Swipeable>
        );
    }
}