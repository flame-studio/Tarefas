import { createStore } from "redux";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
    key: "root",
    storage
}

const persistedReducer =  persistReducer(persistConfig, reducer);

const INITIAL_STATE = {
    firstTimeOpen: true,
    saveData: false,
    listName: "",
    taskName: "",
    taskSelected: 0,
    listSelected: 0,
    newListSelected: false,
    configSelected: false,
    lists: [
        {
            name: "Meu dia",
            tasks: []
        }, {
            name: "Importantes",
            tasks: []
        }
    ],
    addTask: false,
    darkMode: false
}

function reducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case "DONE_TRUE": {
             return {
                 ...state,
                 lists: state.lists.map( (list, index) => {
                    if (index === state.listSelected) {
                        return {
                            ...list,
                            tasks: list.tasks.map(task => {
                                if (task.id === action.payload) {
                                    return {
                                        ...task,
                                        done: true
                                    };
                                } else {
                                    return task;
                                }
                            })
                        };
                    } else {
                        return list;
                    }
                })
             };
        }
        case "DONE_FALSE": {
            return {
                ...state,
                lists: state.lists.map( (list, index) => {
                   if (index === state.listSelected) {
                       return {
                           ...list,
                           tasks: list.tasks.map(task => {
                               if (task.id === action.payload) {
                                   return {
                                       ...task,
                                       done: false
                                   };
                               } else {
                                   return task;
                               }
                           })
                       };
                   } else {
                       return list;
                   }
               })
            };
        }
        case "SET_LIST": {
            return {
                ...state,
                listSelected: action.payload
            }
        }
        case "SET_TASK": {
            return {
                ...state,
                taskSelected: action.payload
            }
        }
        case "SET_NEW_LIST": {
            return {
                ...state,
                newListSelected: action.payload
            }
        }
        case "SET_CONFIG": {
            return {
                ...state,
                configSelected: action.payload
            }
        }
        case "SET_LIST_NAME": {
            return {
                ...state,
                listName: action.payload
            }
        }
        case "SET_TASK_NAME": {
            return {
                ...state,
                taskName: action.payload
            }
        }
        case "ADD_LIST": {
            return {
                ...state,
                lists: [
                    ...state.lists,
                    action.payload
                ]
            }
        }
        case "ADD_TASK": {
            return {
                ...state,
                lists: state.lists.map( (list, index) => {
                    if (index === state.listSelected) {
                        return {
                            ...list,
                            tasks: [
                                ...list.tasks,
                                action.payload
                            ]
                        };
                    } else {
                        return list;
                    }
                })
            }
        }
        case "EDIT_TASK": {
            return {
                ...state,
                lists: state.lists.map( (list, index) => {
                   if (index === state.listSelected) {
                       return {
                           ...list,
                           tasks: list.tasks.map(task => {
                               if (task.id === action.payload.id) {
                                   return {
                                       ...task,
                                       title: action.payload.title
                                   };
                               } else {
                                   return task;
                               }
                           })
                       };
                   } else {
                       return list;
                   }
               })
            };
        }
        case "DELETE_TASK": {
            return { 
                ...state,
                lists: state.lists.map( (list, index) => {
                    if (index === state.listSelected) {
                        return {
                            ...list,
                            tasks: list.tasks.filter( item => item.id != action.payload )
                        };
                    } else {
                        return list;
                    }
                })
            }
        }
        case "DELETE_LIST": {
            return {
                ...state,
                lists: state.lists.filter( (item, index) => index != action.payload )
            }
        }
    }

    return state;
}

const store = createStore(persistedReducer);
const persistor = persistStore(store)

export { store, persistor };