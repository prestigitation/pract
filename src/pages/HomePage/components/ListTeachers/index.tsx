import React, { useEffect,useState } from "react";
import "./index.css";
import Teacher from "./components/People";
import images from "../../../../assets/image";
import axios from "axios";


let teachers = [
    {
        lastName: "Тягульская",
        firstName: "Людмила",
        secondName: "Анатольевна",
        status: "Заведующий кафедрой, кандидат экономических наук, доцент",
        img: images.tyagulska,
    }, {
        lastName: "Козак",
        firstName: "Людмила",
        secondName: "Ярославовна",
        status: "Доцент, кандидат технических наук",
        img: images.kozak,
    }, {
        lastName: "Балан",
        firstName: "Лилия",
        secondName: "Александровна",
        status: "Доцент, кандидат педагогических наук",
        img: images.balan,
    }, {
        lastName: "Глазов",
        firstName: "Анатолий",
        secondName: "Борисович",
        status: "Доцент ",
        img: images.glazov,
    },
    {
        lastName: "Тягульская",
        firstName: "Людмила",
        secondName: "Анатольевна",
        status: "Заведующий кафедрой, кандидат экономических наук, доцент",
        img: images.tyagulska,
    }, {
        lastName: "Козак",
        firstName: "Людмила",
        secondName: "Ярославовна",
        status: "Доцент, кандидат технических наук",
        img: images.kozak,
    }, {
        lastName: "Балан",
        firstName: "Лилия",
        secondName: "Александровна",
        status: "Доцент, кандидат педагогических наук",
        img: images.balan,
    }, {
        lastName: "Глазов",
        firstName: "Анатолий",
        secondName: "Борисович",
        status: "Доцент ",
        img: images.glazov,
    },
];

const ListTeachers = () => {
    let [test,setTest] = useState('')
    useEffect(() => {
        axios.get('http://localhost:8000/teachers', {headers: {'Access-Control-Allow-Origin': 'http://localhost:8000'}}).then(response => console.log(response) )
    })
    return (
        <div className={"list-teachers"}>
            <div className={"list-teachers-title"}>
                Список преподавателей
            </div>
            <div className={"list-teachers-grid"}>
                {teachers.map((teacher, index) => (
                    <Teacher
                        key={`${index}-${teacher.lastName}`}
                        item={teacher}
                    />
                ))}
                {test}
            </div>
        </div>
    );
};

export default ListTeachers;
