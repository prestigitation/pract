import React from "react";
import "./index.css";
import images from "../../../../assets/image";
import Counter from "./components/Counter";

const FirstBlock = () => {
    return (
        <div className={'first-block'}>
            <div className={"first-block-wrapper"}>
                <div className={"first-block-left-content"}>
                    <div className={"first-block-content-wrapper"}>
                        <div className='first_block-title'>Кафедра ИиПИ</div>
                        <div className='first_block-name'>Информатика и программная инженерия</div>
                        <div className='first_block-name_of_university'>Рыбницкий филиал ПГУ им. Т.Г.Шевченко</div>
                    </div>
                    <button className={"first_block-about-department"}>О кафедре</button>
                </div>
                <img src={images.firstBlockImg} alt="firstBlockImg"/>
            </div>
            <div className={'first-block-counter-wrapper'}>
                <Counter label={"студентов"} countValue={298}/>
                <Counter label={"выпускников"} countValue={787}/>
                <Counter label={"публикации"} countValue={1894}/>
                <Counter label={"проект"} countValue={371}/>
            </div>
        </div>
<<<<<<< HEAD
=======

>>>>>>> fdb6be4f463a218af0ac46e8699d6513dc82d1bd
    );
};

export default FirstBlock;
