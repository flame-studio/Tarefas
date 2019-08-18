import styled from 'styled-components/native';

export const Container = styled.ScrollView`
    flex: 1;
`;

export const Title = styled.Text`
    font-size: 30px;
    color: #D50000;
    font-family: "Product_Sans_Regular";
    align-self: center;
    margin-top: 20px;
`;

export const NoTasksContent = styled.View`
    height: 100%;
    width: 100%;
    position: absolute;
    justify-content: center;
    align-items: center;
`;

export const NoTaskText = styled.Text`
    font-family: "Product_Sans_Regular";
    font-size: 20px;
    color: #373737;
    margin-top: 10px;
`;

export const NoTaskSubText = styled.Text`
    font-family: "Product_Sans_Regular";
    font-size: 14px;
    color: #CCCCCC;
    margin-top: 10px;
    margin-bottom: 50px;
`;

export const List = styled.FlatList`
    margin-top: 20px;
`;

export const ButtonAdd = styled.TouchableOpacity`
    position: absolute;
    bottom: 20px;
    background-color: #D50000;
    height: 40px;
    width: 170px;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    border-radius: 100px;
    align-self: center;
`;

export const TextButtonAdd = styled.Text`
    color: #FFFFFF;
    margin-left: 10px;
    font-family: "Product_Sans_Regular";
`;