import { useState, useEffect, useRef } from 'react'
import axios from 'axios'
import './index.css'
import Notification from '../Notification' 



interface teacher {
    id : number,
    position : string,
    surname : string,
    name : string
}

const TeachersDashboard = () => {
    const [teachers,setTeachers] = useState<teacher[]>([])
    const [search,setSearch] = useState('')
    const [teacher,setTeacher] = useState<any>()
    const [name,setName] = useState('')
    const [surname,setSurname] = useState('')
    const [position,setPosition] = useState('')
    const [newTeacherPosition,setNewTeacherPosition] = useState('')
    const [newTeacherSurname,setNewTeacherSurname] = useState('')
    const [newTeacherName,setNewTeacherName] = useState('')
    const [notificationType, setNotificationType] = useState('')
    const [notificationMessage, setNotificationMessage] = useState('')
    const inputRef:any = useRef()
    useEffect(() => {
        if(teachers.length == 0) {axios.get<teacher[]>('http://localhost:8000/teachers',{headers : {'Access-Control-Allow-Origin':'*'}}).then(({data})=> {
            setTeachers(Array.from(data))
        })}
        
    })
    async function showDeleteModal(e:any) {
        
        let deletedTeacherId = e.target.id.slice(String.prototype.lastIndexOf('-'))
        await axios.delete(`http://localhost:8000/teachers/${deletedTeacherId}`,{headers : {'Access-Control-Allow-Origin' : '*'}, data : {teacher_id : deletedTeacherId}}).then(()=> {
            setNotificationType('success')
            setNotificationMessage('Преподаватель был удален.')
        })
    }
    async function addNewTeacher() {
        let formData = new FormData()
        formData.append('surname',newTeacherSurname)
        formData.append('name',newTeacherName)
        formData.append('position',newTeacherPosition)
        await axios.post('http://localhost:8000/teachers/create',formData,{headers : {'Access-Control-Allow-Origin' : '*'}}).then(({data}) => {
                setNotificationType('success')
                setNotificationMessage('Преподаватель успешно добавлен')
        })
    }
    async function changeTeacherData() {
        let formData = new FormData()
        formData.set('teacher_id',teacher[0].id)
        formData.set('name',name)
        formData.set('surname',surname)
        formData.set('position',position)
        formData.set('avatar',inputRef.current.files[0])
        
        await axios.post('http://localhost:8000/teachers/update',formData,{headers : {'Access-Control-Allow-Origin' : '*'}})
    }

    async function searchTeacher(e:any) {
        e.preventDefault()
        let searchType:any = document.getElementById('teachers-criterion-selector')
        let formData = new FormData()
        formData.set('search',search)
        formData.set('searchType',searchType.value)
        await axios.post('http://localhost:8000/teachers/search',formData,{headers : {'Access-Control-Allow-Origin' : '*'}}).then(({data}) => {
            setTeacher(data)
        })
    }
    return (
        <div className={'dashboard'}>
            <div> Преподаватели </div>
            <table className='dashboard-table'>
            <tr>
                <th></th>
                <th> id</th>
                <th>Фамилия</th> 
                <th> Имя и отчество </th>
                <th> Должность </th>
            </tr>
            {Object.keys(teachers).map((teacher:any) => {
                return <tr>
                   <td> <img id={'dashboard-photo'} src={`/teachers/${teachers[parseInt(teacher)].id}.jpeg`}></img> </td>
                   <td> {teachers[parseInt(teacher)].id}  </td>
                   <td> {teachers[parseInt(teacher)].surname}  </td>
                   <td> {teachers[parseInt(teacher)].name}  </td>
                   <td> {teachers[parseInt(teacher)].position}  </td>
                   <td onClick={showDeleteModal}> 
                   <img src={`/static/delete.png`} width="50" height="40" id={`dashboard-delete-${teachers[parseInt(teacher)].id}`} />
                   </td>

                </tr>
            })}
            </table>
            <div className="dashboard-search">
                <input value={search} onChange={(e:any) => {setSearch(e.target.value)}} type='text' placeholder='Введите искомое значение'/>
                <div> Критерий поиска : </div>
                <select id={'teachers-criterion-selector'}>
                    <option value={'id'}>id </option>
                    <option value={'surname'}> Фамилия </option>
                    <option value={'name'}> Имя Отчество</option>
                </select>
                <button type='submit' id='search-submit' onClick={searchTeacher}> Поиск </button>
            </div>
            <div>
                {teacher ? <>
                    <div>
                    <span> Информация о преподавателе : </span>
                            <tr id='dashboard-user-data'>
                            <td id='dashboard-table-image'> 
                            <img id='dashboard-photo' src={`/teachers/${teacher[0].id}.jpeg`}></img>
                            <input type='file' name='teacher-image' ref={inputRef}></input> 
                            </td>
                            <td> id : { teacher[0].id }</td> 
                            <td key={teacher}> Фамилия : { teacher[0].surname } <input type='text' name='surname' value={surname} onChange={(e:any) => setSurname(e.target.value)}></input></td>
                            <td>Имя Отчество : { teacher[0].name } <input type='text' name='name' value={name} onChange={(e:any) => setName(e.target.value)} ></input></td> 
                            <td>Должность : { teacher[0].position } <input type='text' name='position' value={position} onChange={(e:any) => setPosition(e.target.value)}></input></td>
                        </tr>
                        <button id='submit-button' onClick={changeTeacherData}> Изменить данные </button>

                        
                    </div>  
                </>
                : <> 
                    <div>
                            <div> Вы также можете добавить нового преподавателя </div>
                            <div>
                                <label key={teacher}> 
                                    Фамилия :
                                    <input type='text' name='surname' value={newTeacherSurname} onChange={(e:any) => setNewTeacherSurname(e.target.value)}></input>
                                </label>
                                <label>
                                    Имя Отчество :
                                    <input type='text' name='name' value={newTeacherName} onChange={(e:any) => setNewTeacherName(e.target.value)} ></input>
                                </label> 
                                <label>
                                    Должность :
                                    <input type='text' name='position' value={newTeacherPosition} onChange={(e:any) => setNewTeacherPosition(e.target.value)}></input>
                                </label>
                                <button type='submit' onClick={addNewTeacher}> Добавить преподавателя </button>
                                {notificationType && notificationMessage ? <>
                                    <Notification message={notificationMessage} type={notificationType}/>
                                 </>:``}
                            </div>
                    </div>
                
                
                </>}

            </div>
        </div>
    )
}

export default TeachersDashboard
