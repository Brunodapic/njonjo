import { memo } from "react"

import NavLink from "../NavLink";
import styles from './Navigation.module.css';

const Navigation = () => {
    return (
        <div className={styles.container}>
            <NavLink label="Home" to="/" />
            <NavLink label="Register" to="/register" />
            <NavLink label="Login" to="/login" />
            <NavLink label="Inventory" to="/inventory" />
        </div>
    )
}

export default memo(Navigation);