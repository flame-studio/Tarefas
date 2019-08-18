import styled from 'styled-components/native';

import { StyleSheet } from 'react-native';

export const Container = styled.View`
    flex: 1;
    background-color: #FFFFFF;
`;

export const HeaderContent = styled.View`
    flex-direction: row;
    width: 100%;
    height: 100px;
    align-items: center;
    justify-content: space-between;
`;

export const HeaderFirstContent = styled.View`
    margin-left: 20px;
    flex-direction: row;
    align-items: center;
`;

export const HeaderSecondContent = styled.View`
    margin-right: 15px;
    justify-content: center;
`;

export const Title = styled.Text`
    font-size: 20px;
    color: #373737;
    font-family: "Product_Sans_Regular";
    margin-left: 10px;
`;

export const Content = styled.View`
    width: 100%;
`;

export const Item = styled.TouchableOpacity`
    width: 100%;
    height: 60px;
    background-color: rgba(255, 255, 255, 1);
    border-left-width: 5px;
    border-left-color: #FFFFFF;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

export const Version = styled.Text`
    color: #CCCCCC;
    font-size: 12px;
    font-family: "Product_Sans_Regular";
`;

export const ItemActive = styled.TouchableOpacity`
    width: 100%;
    height: 60px;
    background-color: rgba(213, 0, 0, .1);
    border-left-width: 5px;
    border-left-color: #D50000;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

export const ItemFisrtContent = styled.View`
    flex-direction: row;
    align-items: center;
`;

export const ItemSecondContent = styled.View`
    align-items: center;
`;

export const ItemTitle = styled.Text`
    margin-left: 10px;
    font-size: 14px;
    color: #373737;
    font-family: "Product_Sans_Regular";
`;

export const ItemNumber = styled.Text`
    margin-right: 15px;
    font-size: 14px;
    color: #373737;
    font-family: "Product_Sans_Regular";
`;

export const ButtonBorder = styled.TouchableOpacity`
    border-top-width: ${StyleSheet.hairlineWidth}px;
    border-top-color: rgba(0, 0, 0, .2);
    border-bottom-width: ${StyleSheet.hairlineWidth}px;
    border-bottom-color: rgba(0, 0, 0, .2);
`;

export const ListScroll = styled.ScrollView`

`;