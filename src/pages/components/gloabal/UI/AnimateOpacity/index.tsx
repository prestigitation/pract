import React, {useState} from "react";
import clsx from "clsx";
import './index.css'

// Свойства компонента загрузчика
export interface AnimateOpacityProps {
    children: React.ReactNode
    count?: number
}

/**
 * Компонент вывода анимации загрузки
 */
const AnimateOpacity = (props: AnimateOpacityProps) => {

    const {count = 1, children} = props;
    const [on, setOn] = useState(false);

    /**
     * Высчитываем скорость отрисовки взависимости от переданного значения
     * count
     */
    const speed = () => {
        return 30 * (count * 5) > 500 ? 500 : 30 * (count * 5)
    };

    /**
     * Включение Анимации
     */
    setTimeout(() => {
        setOn(true)

        return () => {
            setOn(false)
        }
    }, speed());

    return <>
        <div className={clsx('default-animate-opacity', {'on': on})}>
            {children}
        </div>
    </>

};

export default AnimateOpacity
