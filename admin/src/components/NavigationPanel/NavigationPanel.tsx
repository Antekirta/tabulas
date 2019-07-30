import React, {useState, useEffect} from 'react'
import {Link} from "react-router-dom";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import {getMenuItems} from "../../providers/menuProvider";
import {IAdminMenuItem} from "../../providers/menuProvider";

function NavigationPanel() {
    const [menuItems, setMenuItems] = useState<Array<IAdminMenuItem>>([])

    useEffect(() => {
        getMenuItems()
            .then(menuItems => {
                setMenuItems(menuItems)
            })
    }, [])

    return (
        <section className="navigation-panel">
            <AppBar>
                <Toolbar>
                    {menuItems.map(menuItem => {
                        return (
                            <Link to={menuItem.link} key={menuItem.link}>{menuItem.name}</Link>
                        )
                    })}
                </Toolbar>
            </AppBar>
        </section>
    )
}

export {NavigationPanel}
