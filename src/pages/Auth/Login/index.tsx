import '../index.css'
import {useState} from 'react'
import {log_in} from '../../../store/reducers/userReducer'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import UsersDashboard from '../../Dashboard/UsersDashboard'
const Login = () => {
    const [login,setLogin] = useState('')
    const [password,setPassword] = useState('')
    const user = useSelector((state:any) => state.users.user)
    console.log(user);
    
    const dispatch = useDispatch()

    async function authentificate(e:any) {
        e.preventDefault()
        let formData = new FormData()
        formData.set('login',login)
        formData.set('password',password)
        await axios.post('http://localhost:8000/login',formData,{headers: {'Access-Control-Allow-Origin': '*'}})
        .then(({data}) => dispatch(log_in(data)))
        .catch(e => console.log(e))
    }

    return (
        <div className={'auth-block'}>
            {!user.id && !user.login? <>
                <span> Войти </span>
                <form encType="multipart/form-data" onSubmit={authentificate}  className="auth-form" method='POST'>
                    <input type="text" name='login' value={login} onChange={(e) => setLogin(e.target.value)}  placeholder="Введите имя пользователя" required></input>
                    <input type="password" name='password' value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Введите пароль от аккаунта"required></input>
                    <button type="submit" > Войти </button>
                </form>
            </>
             :``}
        </div>
    )
}

export default Login