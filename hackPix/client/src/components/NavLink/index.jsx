import { memo } from "react";

import styles from './NavLink.module.css';

const NavLink = (props) => {
    const { label, to } = props;

    return (
        <div className={styles.label}>
            {label}
        </div>
    )
}

export default memo(NavLink);