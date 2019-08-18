import styled from 'styled-components/native';

import { StyleSheet } from 'react-native';

export const Container = styled.View`
    flex: 1;
    background-color: #FFFFFF;
`;

export const Item = styled.View`
    width: 100%;
    height: 50px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border-bottom-width: ${StyleSheet.hairlineWidth}px;
    border-bottom-color: rgba(0, 0, 0, .3);
`;

export const ItemContent = styled.View`
    flex-direction: row;
    align-items: center;
    margin-left: 20px;
`;

export const TextItem = styled.Text`
    font-family: "Product_Sans_Regular";
    color: #373737;
    margin-left: 20px;
`;

export const StatusItem = styled.Text`
    font-family: "Product_Sans_Regular";
    color: #FFFFFF;
    margin-left: 20px;
    background-color: #D50000;
    font-size: 11px;
    padding-vertical: 3px;
    padding-horizontal: 5px;
    border-radius: 8px;
`;

export const SwitchCpn = styled.Switch.attrs({
    trackColor: { 
        false: "#CCCCCC", 
        true: "#D50000"
    }
})`
    margin-right: 10px;
`;