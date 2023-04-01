import { memo } from "react";

import styles from './Button.module.css';

const Button = (props) => {
    const { label, onClick } = props;
    return (
        <div
            onClick={onClick}
            className={styles.button}
        >
            {label}
        </div>
    );
}

export default memo(Button);