//modules
import React from 'react'
import { useLocation, Link } from 'react-router-dom'

//files
import './Sidebar.scss'
import { SidebarData } from './SidebarData'

function Sidebar() {

    let location = useLocation()
    console.log(location)

    return (
        <div className="sidebar">
            <ul className="sidebar__items">
                {
                    SidebarData.map((val: any, key: any) => {
                        return(
                            <Link to={val.path} className="sidebar__link">
                                <li id={key} className={`sidebar__item ${location.pathname === val.path && "sidebar__active"}`}>
                                    {val.icon}
                                    <h2 className="sidebar__item-name">{val.title}</h2>
                                </li>
                            </Link>
                            
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default Sidebar
