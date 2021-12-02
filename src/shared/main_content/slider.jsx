import React from 'react';

// const sliderItem = document.querySelectorAll('.slider-item');
const sliderItems = {
        itemOne: `В 2019 году, по миру начало расспространяться смертельно опасное
                    заболевание,
                    получившие
                    название - "КоронаВирус".<br>
                        В 2020 количество зараженных привысело 75 млн человек. Заражение вирусом пошло на спад, но никто
                        не
                        подозревал,
                        что это только начало...`,
        itemTwo: `В 2021 болезнь получила неизвестную мутацию, которая в считанные
                    дни
                    заразила
                    миллионны коров по всему миру,<br> вирус
                        получил название "COWid-21". За несколько недель появилась новая форма вируса, которая привела к
                        появлению
                        новой
                        формы жизни на земле,<br> или не жизни - зомби.`,
        itemThree: `Первые переносчики - коровы, начали изменяться только через
                    несколько
                    недель, к тому
                    моменту,<br> литры зараженного молока и киллограмы говядины, были в сотнях мест по всему миру.<br>
                        Человечество было обреченно,
                        заразу не удалось выявить вовремя, и зомби эпидемия охватила мир.`,
        itemFour: `Сейчас 2030 год, небольшие поселения еще сопротивляются атакам
                    зомби,<br> но
                        так
                        продолжаться
                        дальше не может. <br>Твоя задача помочь людям перебраться в более спокойное место. <br>Дерзай,
                            Охотник.`,
}


export function Slider() {
    return (
        <div className="slider-container">
            <div className="slider-wrapper">
                <div className="slider-item subscribe">{sliderItems.itemOne}</div>
                <div className="slider-item subscribe">{sliderItems.itemTwo}</div>
                <div className="slider-item subscribe">{sliderItems.itemThree}</div>
                <div className="slider-item subscribe">{sliderItems.itemFour}</div>
            </div>
            <div className="slider-pagination"/>

            <div className="slider-button-prev btn-prev"/>
            <div className="slider-button-next btn-next"/>

            <div className="slider-scrollbar"/>
        </div>
)
}