import './index.css'
import {useSelector} from 'react-redux'
import { store } from '../../store'
import { useParams } from 'react-router'
import axios from 'axios'
import { withRouter } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react'
import { formatDiagnosticsWithColorAndContext } from 'typescript'

interface userParams {
    id : string
}

interface userData {
    FIO: string
    created_at: Date
    email: string
    id: string
    login: string
    password: string
    phone: string
    role_id: string
    updated_at: Date
}

const UserPanel = () => {
    const user = useSelector((store:any)  => store.users.user)
    const userParams : userParams = useParams()
    const [userInfo,setUserInfo] = useState<userData | undefined>()
    const [notificationType, setNotificationType] = useState('');
    const [notificationMessage, setNotificationMessage] = useState('');
    const [email,setEmail] = useState('');
    const [currentPassword,setCurrentPassword] = useState('');
    const [newPassword,setNewPassword] = useState('');
    const [login,setLogin] = useState('');
    const [FIO,setFIO] = useState('');
    const [phone,setPhone] = useState('');
    
    const inputRef : any = useRef()
    const userId = parseInt(userParams.id)

    async function changeUserData(e:any) {
        
        e.preventDefault()
        let formData = new FormData()
        formData.set('login',login)
        formData.set('email',email)
        formData.set('phone',phone)
        formData.set('FIO',FIO)
        formData.set('newPassword',newPassword)
        formData.set('currentPassword',currentPassword)
        formData.set('avatar',inputRef.current.files[0])
        
        await axios.post(`http://localhost:8000/users/${userId}`,formData,{headers : {'Access-Control-Allow-Origin' : '*', 'Content-Type' : 'multipart/form-data'}})

    }
    useEffect(() => {
        
        if(user.id == userId && !userInfo) {
            axios.get(`http://localhost:8000/users/${userId}`,{headers : {'Access-Control-Allow-Origin' : '*'}}).then(({data}) => setUserInfo(data))
        }
    })
    return (
        <div className='user-panel'>
            <div> Информация о пользователе </div>
            <form method='POST' id='form' encType='multipart/form-data' onSubmit={changeUserData} className={'user-form'}>
                <label> Логин : {userInfo?.login}</label> <input value={login} onChange={(e) => setLogin(e.target.value)} type='text' name='login'></input>
                <label> E-mail : {userInfo?.email}</label> <input type='email' value={email} onChange={(e) => setEmail(e.target.value)} name='email'></input>
                <label> Номер телефона : {userInfo?.phone}</label> <input type='text' value={phone} onChange={(e) => setPhone(e.target.value)} name='phone'></input>
                <label> Ваше ФИО : {userInfo?.FIO}</label> <input value={FIO} onChange={(e) => setFIO(e.target.value)} type='text' name='FIO'></input>
                <label> Вы можете прикрепить новый аватар : </label> <input  type='file' id='avatar' name='avatar' ref={inputRef}></input>
                <img src={`/avatars/${user.id}.jpeg`} id={'user-avatar'}></img>
                <label> Новый пароль  : </label> <input type='password' value={newPassword} onChange={(e) => setNewPassword(e.target.value)} name='newPassword'></input>
                <label> Для изменения данных введите пароль</label> <input type='password' value={currentPassword} onChange={(e) => setCurrentPassword(e.target.value)} required name='currentPassword'></input>
                <button type='submit' id={'submit'}>Отправить </button>
            </form>   
        </div>
    )
}

export default withRouter(UserPanel)