import { memo, useState } from "react";

import Button from "../../components/Button";
import styles from './Create.module.css';

const Create = () => {
    const [currentRobot, setCurrentRobot] = useState(0);

    const robots = [
        '/robot-1.svg',
        '/robot-2.svg',
        '/robot-3.svg',
        '/robot-4.svg',
        '/robot-5.svg',
        '/robot-6.svg',
        '/robot-7.svg',
        '/robot-8.svg',
        '/robot-9.svg',
        '/robot-10.svg'
    ];

    return (
        <form className={styles.form}>
            <div className={styles.robotContainer}>
                <img className={styles.robot} src={robots[currentRobot]} alt="robot" />
            </div>
            <div className={styles.buttonContainer}>
                {
                    robots.map((url, index) => {
                        return <Button key={url} label={index + 1} onClick={() => setCurrentRobot(index)} />
                    })
                }
            </div>
            <input />
            <button type="submit">Submit</button>
        </form>
    );
}

export default memo(Create);