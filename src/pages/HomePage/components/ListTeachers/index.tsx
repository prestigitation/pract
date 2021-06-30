import React from "react";
import "./index.css";
import Teacher from "./components/People";
import images from "../../../../assets/image";

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
            </div>
        </div>
    );
};

export default ListTeachers;
