export function doneTrue(index) {
    return {
        type: "DONE_TRUE",
        payload: index
    }
};

export function doneFalse(index) {
    return {
        type: "DONE_FALSE",
        payload: index
    }
};

export function setList(index) {
    return {
        type: "SET_LIST",
        payload: index
    }
};

export function setTask(index) {
    return {
        type: "SET_TASK",
        payload: index
    }
};

export function setNewList(bool) {
    return {
        type: "SET_NEW_LIST",
        payload: bool
    }
};

export function setConfig(bool) {
    return {
        type: "SET_CONFIG",
        payload: bool
    }
};

export function setListName(listName) {
    return {
        type: "SET_LIST_NAME",
        payload: listName
    }
};

export function addList(listName) {
    return {
        type: "ADD_LIST",
        payload: {
            name: listName,
            tasks: []
        }
    }
};

export function setTaskName(taskName) {
    return {
        type: "SET_TASK_NAME",
        payload: taskName
    }
};

export function addTask(taskName) {
    return {
        type: "ADD_TASK",
        payload: {
            id: Math.random(),
            title: taskName,
            done: false
        }
    }
};

export function editTask(taskId, taskName) {
    return {
        type: "EDIT_TASK",
        payload: {
            title: taskName,
            id: taskId
        }
    }
};

export function deleteTask(taskId) {
    return {
        type: "DELETE_TASK",
        payload: taskId
    }
};

export function deleteList(index) {
    return {
        type: "DELETE_LIST",
        payload: index
    }
};