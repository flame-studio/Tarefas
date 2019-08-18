import React from 'react';
import { 
    createDrawerNavigator, 
    createAppContainer, 
    createStackNavigator 
} from 'react-navigation';

import { 
    Dimensions, 
    StyleSheet 
} from 'react-native';

import HeaderTitle from './components/HeaderTitle';
import MenuHeader from './components/MenuHeader';
import DeleteList from './components/DeleteList';
import MenuDrawer from './components/MenuDrawer';
import Back from './components/Back';
import SimpleHeaderTitle from './components/SimpleHeaderTitle';
import Done from './components/Done';
import RightIcon from './components/RightIcon';

import ListTask from './pages/ListTask';
import NewList from './pages/NewList';
import Config from './pages/Config';

const options = {
    defaultNavigationOptions: {
        headerStyle: { 
            backgroundColor: "#FFFFFF", 
            borderBottomColor: "rgba(0, 0, 0, .3)", 
            borderBottomWidth: StyleSheet.hairlineWidth },
        headerTintColor: "#FFFFFF",
    }
}

const ListTaskStack = createStackNavigator({
    ListTask: {
        screen: ListTask,
        navigationOptions: ({ navigation }) => ({
            headerTitle: (
                <HeaderTitle />
              ),
              headerLeft: (
                  <MenuHeader 
                    navigation={ navigation }
                  />
              ),
              headerRight: (
                  <DeleteList />
              )
        })
    }
}, options);

const NewListStack = createStackNavigator({
    NewList: {
        screen: NewList,
        navigationOptions: ({ navigation }) => ({
            headerTitle: (
                <SimpleHeaderTitle  
                    title="Criar uma nova lista"
                />
            ),
            headerLeft: (
                <Back 
                    navigation={ navigation }
                />
            ),
            headerRight: (
                <Done 
                    navigation={ navigation }
                />
            )
        })
    }
}, options);

const ConfigStack = createStackNavigator({
    Config: {
        screen: Config,
        navigationOptions: ({ navigation }) => ({
            headerTitle: (
                <SimpleHeaderTitle 
                    title="Configurações"
                />
            ),
            headerLeft: (
                <Back 
                    navigation={ navigation }
                />
            ),
            headerRight: (
                <RightIcon />
            )
        })
    }
}, options);

const AppDrawerNavigator = createDrawerNavigator({
    ListTask: ListTaskStack,
    NewList: NewListStack,
    Config: ConfigStack
}, {
    drawerWidth: Dimensions.get("window").width * 0.8,
    contentComponent: ({ navigation }) => {
        return (
            <MenuDrawer 
                navigation={ navigation }
            />
        );
    }
}); 

export default createAppContainer(AppDrawerNavigator);