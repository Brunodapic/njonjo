import { memo, useState } from "react"

import styles from './Input.module.css';

const Input = (props) => {
    const { onChange } = props;
    const [value, setValue] = useState('');

    return (
        <input
            className={styles.input}
            value={value}
            onChange={(e) => {
                setValue(e.target.value);
                onChange(e.target.value);
            }}
        />
    )
}

export default memo(Input)