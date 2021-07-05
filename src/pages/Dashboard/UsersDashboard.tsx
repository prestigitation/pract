import {useEffect, useState,useCallback} from 'react'
import axios from 'axios'
import { DH_CHECK_P_NOT_SAFE_PRIME } from 'constants'

interface user {
    id : string,
    login : string,
    password : string,
    email : string,
    FIO : string,
    phone : string,
    created_at ?: Date,
    updated_at ?: Date,
    role_id : string
}

const UsersDashboard = () => {
    let [users,setUsers] = useState<user[]>([])
    const [search,setSearch] = useState('')
    const [foundedUser,setFoundedUser] = useState<user[]>([])
    useEffect(() => {
      axios.get<user[]>('http://localhost:8000/users').then(({data}) => {setUsers(Array.from(data)); console.log(data)}) 
    },[])

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
                {Object.keys(users).map((user : string,i) => {
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
                            <tr id='dashboard-user-data'>
                                <td> id : { foundedUser[0].id }</td> 
                                <td key={user}> Логин : { foundedUser[0].login }</td>
                                <td>E-Mail : { foundedUser[0].email }</td>
                                <td>ФИО : { foundedUser[0].FIO }</td>
                                <td>Номер телефона : { foundedUser[0].phone }</td>
                                <td>Роль : { foundedUser[0].role_id }</td>
                            </tr>
                        </div> 
                    })}
                </div> : 
            '' }
            

        </div>
    )
}

export default UsersDashboard