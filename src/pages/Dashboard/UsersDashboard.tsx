import {useEffect, useState,useCallback} from 'react'
import axios from 'axios'
import Notification from '../Notification'
import {useDispatch} from 'react-redux'



interface user {
    id : string,
    login : string,
    password : string,
    email : string,
    FIO : string,
    phone : string,
    created_at ?: Date,
    updated_at ?: Date,
    role_id : string,
    name : string,
    r_name : string // наименование роли
}

interface role {
    id : number,
    name : string
}

const UsersDashboard = () => {
    const [users,setUsers] = useState<user[]>([])
    const [roles,setRoles] = useState<role[]>([])
    const [notificationMessage,setNotificationMessage] = useState('')
    const [notificationType,setNotificationType] = useState('')
    const [search,setSearch] = useState('')
    const [foundedUser,setFoundedUser] = useState<user[]>([])

    const dispatch = useDispatch()

    // Получаем данные с сервера
    useEffect(() => {
        /*let formData = new FormData()
        let user:any = dispatch(get_user())
        console.log(user)
        formData.set('user_id',user.id)*/
      axios.post('http://localhost:8000/users/role',{headers : {'Access-Control-Allow-Origin' : '*'}})  
      axios.get<role[]>('http://localhost:8000/roles',{headers : {'Access-Control-Allow-Origin' : '*'}})
           .then(({data}) => {setRoles(Array.from(data));console.log(data)})  
      axios.get<user[]>('http://localhost:8000/users',{headers : {'Access-Control-Allow-Origin' : '*'}})
           .then(({data}) => {setUsers(Array.from(data)); console.log(data)}) 
    },[])

    async function setUserRole(e:any) {
        e.preventDefault()
        let selector:any = document.getElementById('user-role-selector')
        let formData = new FormData()
        formData.set('user_id',foundedUser[0].id)
        formData.set('role_id',selector.value)
        await axios.post('http://localhost:8000/users/roles',formData,{headers : {'Access-Control-Allow-Origin': '*'}}).then(({data})=> {
            if(data) {
                setNotificationMessage('Роль была успешно обновлена!')
                setNotificationType('success')
            } else {
                setNotificationMessage('Не удалось привязать роль. Проверьте параметры запроса и загляните в консоль')
                setNotificationType('error')
            }
        })
    }

    async function searchUser(e:any) {
        e.preventDefault()
        let formData = new FormData()
        formData.set('search',search)
        await axios.post('http://localhost:8000/users/search',formData, {headers: {'Access-Control-Allow-Origin': '*'}}).then(({data}) => {setFoundedUser(data)})
    }
    
    return (
        <div className="dashboard">
            <table className='dashboard-table'>
                <tr>
                   <th> id</th>
                   <th>Логин</th> 
                   <th> E-Mail </th>
                   <th> ФИО </th>
                   <th> Номер телефона </th>
                </tr>
                {Object.keys(users).map((user : string) => {
                    return <tr>
                        <td> { users[parseInt(user)].id }</td> 
                        <td key={user}> { users[parseInt(user)].login }</td>
                        <td> { users[parseInt(user)].email }</td>
                        <td> { users[parseInt(user)].FIO }</td>
                        <td> { users[parseInt(user)].phone }</td>
                    </tr>
                })}
                
            </table>
            <div className="dashboard-search">
                <input value={search} onChange={(e:any) => {setSearch(e.target.value)}} type='text' placeholder='Введите логин пользователя'/>
                <button type='submit' id='search-submit' onClick={searchUser}> Поиск </button>
            </div>
            {foundedUser ? 
                <div className="dashboard-user">
                    {Object.keys(foundedUser).map((user : string) => {
                        return <div className='dashboard-table'>
                            <span> Информация о пользователе : </span>
                            {console.log(foundedUser)}
                            <tr id='dashboard-user-data'>
                                <td> id : { foundedUser[0].id }</td> 
                                <td key={user}> Логин : { foundedUser[0].login }</td>
                                <td>E-Mail : { foundedUser[0].email }</td>
                                <td>ФИО : { foundedUser[0].FIO }</td>
                                <td>Номер телефона : { foundedUser[0].phone }</td>
                                <td>Роль : { foundedUser[0].role_id }({ foundedUser[0].r_name })  </td>
                            </tr>
                            <div> 
                                <div> Вы можете установить роль пользователю :  </div>
                                <select id='user-role-selector'>
                                {
                                    Object.keys(roles).map(role => {
                                        return <option value={roles[parseInt(role)].id}>
                                            {roles[parseInt(role)].name}
                                        </option>
                                    })
                                }
                                </select>
                                <button id='search-submit' onClick={setUserRole} role='submit'>
                                    Отправить
                                </button>
                                {
                                    notificationType && notificationMessage ? <Notification message={notificationMessage} type={notificationType}>
                                    </Notification>
                                    : ``
                                }
                            </div>
                        </div> 
                    })}
                </div> : 
            '' }
            

        </div>
    )
}

export default UsersDashboard