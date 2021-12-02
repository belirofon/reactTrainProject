import React from 'react';
import styles from './header.css';

import {Sidebar} from './Sidebar/Sidebar';
import {Audio} from './Audio/audio';
import {Button} from './Buttons/Buttons';

export function Header() {
    return (
        <header className={styles.style}>
            <Sidebar/>
            <Audio/>
            <Button/>
        </header>
    )
}
