import { memo } from "react";
import { Link } from "react-router-dom";

import styles from './NavLink.module.css';

const NavLink = (props) => {
    const { label, to } = props;

    return (
        <Link to={to} className={styles.label}>
            {label}
        </Link>
    )
}

export default memo(NavLink);