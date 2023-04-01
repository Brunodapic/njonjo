import { memo } from "react"

import NavLink from "../NavLink";
import styles from './Navigation.module.css';

const Navigation = () => {
    return (
        <div className={styles.container}>
            <NavLink label="Home" to="/" />
            <NavLink label="Create" to="/create" />
        </div>
    )
}

export default memo(Navigation);