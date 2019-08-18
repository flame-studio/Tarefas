import styled from 'styled-components/native';

import { StyleSheet } from 'react-native';

export const Container = styled.View`
    flex: 1;
    background-color: #FFFFFF;
`;

export const Input = styled.TextInput.attrs({
    autoCorrect: false,
    placeholder: "Digite o título da nova lista..."
})`
    width: 100%;
    height: 50px;
    font-family: "Product_Sans_Regular";
    background-color: #FFFFFF;
    border-bottom-width: ${StyleSheet.hairlineWidth}px;
    border-bottom-color: rgba(0, 0, 0, .3);
    padding-horizontal: 15px;
`;
