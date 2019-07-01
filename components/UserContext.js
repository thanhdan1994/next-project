import React, { useReducer } from 'react';
import { useCookies } from 'react-cookie';

const UserConText = React.createContext();

function reducer(state, action) {
    switch (action.type) {
        case 'login':
            return {...state, isLogin: action.isLogin, name: action.name, email: action.email}
        case 'logout':
            return {...state, isLogin: false}
        default:
            return [...state];
    }
}

function UserProvider(props) {
    // new
    const [cookies] = useCookies();
    const initialState = {
        isLogin: cookies['infoUser'] ? true : false,
        name: cookies['infoUser'] ? cookies['infoUser'].name : '',
        email: cookies['infoUser'] ? cookies['infoUser'].email : ''
    }
    const [user, dispatch] = useReducer(reducer, initialState);
    return (
        // new
        <UserConText.Provider value={{ user, dispatch }}>
            {props.children}
        </UserConText.Provider>
    );
}

export {UserConText, UserProvider}