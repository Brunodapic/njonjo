import { memo } from "react";

import styles from './Button.module.css';

const Button = (props) => {
    const { label, onClick, asset } = props;
    return (
        <div
            onClick={onClick}
            asset={asset}
            className={styles.button}
        >
            {label}
        </div>
    );
}

export default memo(Button);