import React from 'react';
import {Slider} from "./slider";
import {NewGameBtn} from "./NewGameBtn";


export function Context() {
    return (
        <section className="main-container">
            <h1 className="main__title">
                <p>Добро пожаловать, Охотник</p>
            </h1>
            <Slider/>
            <NewGameBtn/>
        </section>
    )
}