import styled from 'styled-components/native';

import { StyleSheet } from 'react-native';

export const ContentTask = styled.View`
    width: 100%; 
    height: 65px;
    flex-direction: row;
    align-items: center;
    background-color: #FFFFFF;
    border-bottom-width: ${StyleSheet.hairlineWidth}px;
    border-bottom-color: rgba(0, 0, 0, .2);
`;

export const ButtonIcon = styled.TouchableOpacity``;

export const TitleTask = styled.Text`
    font-size: 15px;
    color: #000;
`;

export const EditContent = styled.View`
    background-color: #0D47A1;
    justify-content: center;
    flex: 1;
    padding-left: 30px;
`;

export const DeleteContent = styled.View`
    background-color: #b71c1c;
    justify-content: center;
    align-items: flex-end;
    flex: 1;
    padding-right: 30px;
`;