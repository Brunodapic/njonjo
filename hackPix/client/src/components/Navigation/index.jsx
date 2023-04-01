import { memo } from "react"

import NavLink from "../NavLink";
import styles from './Navigation.module.css';

const Navigation = () => {
    return (
        <div className={styles.container}>
            <NavLink label="Home" to="/" />
            <NavLink label="Inventory" to="/inventory" />
            <NavLink label="Register" to="/register" />
            <NavLink label="Login" to="/login" />
        </div>
    )
}

export default memo(Navigation);