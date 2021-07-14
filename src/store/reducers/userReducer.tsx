const defaultState = {
    user : {
        id : undefined,
        login : undefined,
        role_id : undefined
    }
}


const LOGIN = 'LOGIN'
const LOGOUT = 'LOGOUT'



export const log_in  = (user : any) => ({type:LOGIN, payload : user})
export const log_out = () => ({type:LOGOUT})



export default function userReducer(state = defaultState,action:any) {
    switch(action.type) {
        case LOGIN : {
            return {
                ...state,
                user : {
                    id : action.payload.id,
                    login : action.payload.login,
                    role_id : action.payload.role_id
                }
            }
        }

        case LOGOUT : {
            return {
                ...state,
                user : {
                    id : undefined,
                    login : undefined,
                    role_id : undefined
                }
            }
        }

        default : {
            return state
        }
    }
}