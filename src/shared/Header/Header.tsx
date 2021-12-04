import React from 'react';
import styles from './header.css';
import { HomePage as Home } from './Sidebar/HomePage/HomePage'
import {NavBar} from './Sidebar/Sidebar';
import {Audio} from './Audio/Audio';
import {Button} from './Buttons/Buttons';
import {BrowserRouter  as Router, Routes, Route} from "react-router-dom";

export function Header() {
    return (
        <header className={styles.header}>
           <Router>
               <NavBar/>
               <Routes>
                   <Route path="/" element={<Home/>}/>
               </Routes>
           </Router>
            <Audio/>
            <Button/>
        </header>
    )
}
