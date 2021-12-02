import React from 'react';
import styles from './sidebar.css';

export function Sidebar() {
  return (
      <section><input type="checkbox" id="side-checkbox"/>
        <div className="side-panel">
          <label className="side-button-2" htmlFor="side-checkbox">+</label>
          <div className="side-title">{}</div>
          <ul>
            <li/>
          </ul>
        </div>
        <div className="side-button-1-wr">
          <label className="side-button-1" htmlFor="side-checkbox">
            <div className="side-b side-open">{}</div>
          </label>
        </div>
      </section>

  );
}
