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


    const assets = [
        '/robot-1.svg',
        '/Rainbowc.svg',
        '/Cloudc.svg'
    ];

    // const getAssets = async () =>{

    // }

    // useEffect(() => {
    //     getAssets();
    // })
    
    return (
        <form className={styles.form}>
            <div className={styles.resourceContainer}>
                <div className={styles.inventoryHeader}>
                    Inventory
                </div>
                <div className={styles.asset}>
                    <img className={styles.robot} src={assets[0]}/>
                </div>
                <div className={styles.asset}>
                    <img className={styles.robot} src={assets[2]}/>
                </div>
                <div className={styles.asset}>
                    <img className={styles.robot} src={assets[1]}/>
                </div>
            </div>

        </form>
    );
}

export default memo(Inventory);