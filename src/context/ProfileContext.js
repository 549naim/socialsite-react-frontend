import React ,{createContext,useReducer} from 'react'

export const Context =createContext()

export const ProfileContext = ({reducer,initialState,children}) =>{
    return(
        <Context.Provider value={useReducer(reducer,initialState)}>
            {children}
        </Context.Provider>
    )
}
