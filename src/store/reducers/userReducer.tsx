const defaultState = {
    user : {
        id : undefined,
        login : undefined
    }
}


const LOGIN = 'LOGIN'


export const log_in  = (user : any) => ({type:LOGIN, payload : user})


export default function userReducer(state = defaultState,action:any) {
    switch(action.type) {
        case LOGIN : {
            return {
                ...state,
                user : {
                    id : action.payload.id,
                    login : action.payload.login
                }
            }
        }
        default : {
            return state
        }
    }
}