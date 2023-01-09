


const initialState = {
    users: [
        {
            user: 'luntic',
            id: 1
        },
        {
            user: 'neluntic',
            id: 2
        }
    ],
    usersCount: 2
}


export default (state = initialState, action) => {
    switch(action.type) {
        case "ADD": {
            return {
                ...state,
                users: [...state.users, {
                    user: action.user,
                    id: state.users[state.users.length -1].id + 1
                }],
                usersCount: state.usersCount + 1
            }
        }
        case "DELETE": {
            return {
                ...state,
                users: state.users.filter(item => {
                    return item.id !== action.id
                }),
                usersCount: state.usersCount - 1
            }
        }
        case "LIMIT": {
            return {
                ...state,
                users: state.users.filter(item => {
                    return item.id === 10
                })
            }
        }
        default: return state
    }
}


export const addUsers = (user) => {
    return (dispath) => {
        return dispath({type: "ADD", user: user})
    }
}

export const deleteUsers = (id) => {
    return (dispath) => {
        return dispath({type: "DELETE", id})
    }
}

export const limitUsers = (id) => {
    return (dispath) => {
        return dispath({type: "LIMIT", id})
    }
}