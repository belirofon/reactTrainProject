import React, {useState} from "react";
import styles from "./sidebar.css";
import {Link} from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { SidebarData } from './SidebarData'

interface IMenuItemListProps {
    postId: string;
}


export function NavBar({ }) {
    const [sidebar, setSidebar] = useState(false);

    const showSidebar =() => setSidebar(!sidebar);
  return (
      <section>
          <div className={styles.navbar}>
              <Link to="#" className={styles.menu_bars}>
                  <FaIcons.FaBars onClick={showSidebar}/>
              </Link>
          </div>
          <nav className={styles.navbar ? 'nav-menu active' : 'nav-menu'}>
                <ul className={styles.nav_menu_items}>
                    <li className={styles.navbar_toggle}>
                        <Link to="#" className={styles.menu_bars}>
                            <AiIcons.AiOutlineClose/>
                        </Link>
                    </li>
                    {SidebarData.map((item, index) => {
                        return (
                            <li key={index} className={styles[item.cName]}>
                                <Link to={item.path}>
                                    {item.icon}
                                    <span>{item.title}</span>
                                </Link>
                            </li>
                        )
                    })}
                </ul>
          </nav>
      </section>

  );
}
