import styled from 'styled-components/native';

import { StyleSheet } from 'react-native';

export const Container = styled.View`
    flex: 1;
    background-color: rgba(0, 0, 0, .5);
    align-items: center;
    justify-content: center;
`;

export const Content = styled.View`
    width: 240px;
    height: 240px;
    background-color: #FFFFFF;
    border-radius: 8px;
    align-items: center;
    justify-content: space-between;
`;

export const Title = styled.Text`
    font-family: "Product_Sans_Regular";
    font-size: 20px;
    color: #373737;
    margin-top: -10px;
`;

export const ButtonContent = styled.View`
    width: 100%;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 15px;
    flex-direction: row;
    padding-horizontal: 25px;
`;

export const ButtonDelete = styled.TouchableOpacity`
    width: 50px;
    height: 50px;
    background-color: #D50000;
    align-items: center;
    justify-content: center;
    border-radius: 100px;
`;

export const ButtonCancel = styled.TouchableOpacity`
    width: 50px;
    height: 50px;
    background-color: #424242;
    align-items: center;
    justify-content: center;
    border-radius: 100px;
`;