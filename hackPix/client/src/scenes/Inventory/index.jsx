import { memo, useEffect, useState } from "react";
import Button from "../../components/Button";
import Input from "../../components/Input";
import styles from './Inventory.module.css';
import axios from 'axios';

import { useNavigate } from "react-router-dom";


const Inventory = () => {
    const [robotLevel, setRobotLevel] = useState(1);
    const [cloudLevel, setCloudLevel] = useState(0);
    const [rainbowLevel, setRainbowLevel] = useState(0);

    const id = localStorage.getItem("id");

    const assets = [
        '/robot-1.svg',
        '/Cloudc.svg',
        '/Rainbowc.svg',
    ];

    const getAssets = async () =>{
        const user = await axios.get('api/user/' + id);
        console.log("user is ", user);
        setRobotLevel(user.robotLevel);
        setCloudLevel(user.cloudLevel);
        setRainbowLevel(user.rainbowLevel);
    }
    
    return (
        <form className={styles.form}>
            <div className={styles.resourceContainer}>
                <div className={styles.inventoryHeader}>
                    Inventory
                </div>
                <div className={styles.asset}>
                    <img className={styles.robot} src={assets[0]}/>
                    <div>
                        Level {robotLevel}
                    </div>
                </div>
                <div className={styles.asset}>
                    <img className={styles.robot} src={assets[1]}/>
                    <div>
                        Level {cloudLevel}
                    </div>
                </div>
                <div className={styles.asset}>
                    <img className={styles.robot} src={assets[2]}/>
                    <div>
                        Level {rainbowLevel}
                    </div>
                </div>
            </div>

        </form>
    );
}

export default memo(Inventory);