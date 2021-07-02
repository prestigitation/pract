import '../index.css'
import axios from 'axios'
import { useState } from 'react';
import Notification from '../../Notification'


const Register = () => {
    const [notificationType, setNotificationType] = useState('');
    const [notificationMessage, setNotificationMessage] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [login,setLogin] = useState('');
    const [FIO,setFIO] = useState('');
    const [phone,setPhone] = useState('');
    function handleEmailChange(e : any) {
        setEmail(e.target.value);
    }
    function handleLoginChange(e : any) {
        setLogin(e.target.value);
    }
    function handlePasswordChange(e : any) {
        setPassword(e.target.value);
    }
    function handleFIOChange(e : any) {
        setFIO(e.target.value)
    }
    function handlePhoneChange(e : any) {
        setPhone(e.target.value)
    }
    async function register(e:any) {
        e.preventDefault(); // предотвращаем перезагрузку страницы
        let formData = new FormData();
        formData.append('login',login);
        formData.append('password',password);
        formData.append('email',email);
        formData.append('phone',phone);
        formData.append('FIO',FIO)
        await axios.post('http://localhost:8000/register',formData,{headers: {'Access-Control-Allow-Origin': '*'}})
        .then(res => {
            setNotificationType('success')
            setNotificationMessage('Вы успешно зарегистрировались!')
        }).catch(e => {
            setNotificationType('error')
            setNotificationMessage('Не удалось зарегистрироваться! Проверьте параметры запроса.')
        })
    }
    return (
        <div className="auth-block">
            <span> Регистрация </span>
            {notificationType != 'success' ? 
            <form encType="multipart/form-data" onSubmit={register}  className="auth-form" method='POST'>
                <input type="text" name='login' value={login} onChange={(e) => setLogin(e.target.value)}  placeholder="Придумайте имя пользователя" required></input>
                <input type="email" name='email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Введите адрес электронной почты" required></input>
                <input type="password" name='password' value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Введите пароль(от 6 символов)"required></input>
                <input type="text" name='FIO' value={FIO} onChange={(e) => setFIO(e.target.value)} placeholder='Введите ваше ФИО' required></input>
                <input type="text" name='phone' value={phone} onChange={(e) => setPhone(e.target.value)} placeholder='Введите действительный номер телефона' required></input>
                <button type="submit" > Отправить </button>
            </form> : ``}

            <div className="notification">
                {notificationType && notificationMessage 
                ? <Notification message={notificationMessage} type={notificationType} /> 
                : ``}
            </div>
        </div>

    )
}

export default Register