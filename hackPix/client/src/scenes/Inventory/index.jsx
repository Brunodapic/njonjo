import { memo, useEffect, useState } from "react";
import Button from "../../components/Button";
import Input from "../../components/Input";
import styles from './Inventory.module.css';
import axios from 'axios';

import { useNavigate } from "react-router-dom";


const Inventory = () => {
    const [robotLevel, setRobotLevel] = useState(1);
    const [cluodLevel, setCluodLevel] = useState(0);
    const [rainbowLevel, setRainbowLevel] = useState(0);
    const [time, setTime] = useState(0);
    const id = localStorage.getItem("id");

    const assets = [
        '/robot-1.svg',
        '/Cloudc.svg',
        '/Rainbowc.svg',
    ];

    const upgradeRobot = async () => {
        try {
            await axios.put('api/user/update/robot/' + id);
            setRobotLevel(robotLevel + 1);
        } catch (error) {
            console.log(error)
        }
    }
    const upgradeRainbow = async () => {
        try {
            await axios.put('api/user/update/rainbow/' + id);
            setRainbowLevel(rainbowLevel + 1);
        } catch (error) {
            console.log(error)
        }
    }
    const upgradeCloud = async () => {
        try {
            await axios.put('api/user/update/cloud/' + id);
            setCluodLevel(cluodLevel + 1);
        } catch (error) {
            console.log(error)
        }
    }
    const getAssets = async () =>{
        const user = await axios.get('api/user/' + id);
        console.log("user is ", user);
        setRobotLevel(user.data.robotLevel);
        setCluodLevel(user.data.cluodLevel);
        setRainbowLevel(user.data.rainbowLevel);
    }

    useEffect(() => {
        getAssets();
    }, [])
    
    return (
        <form className={styles.form}>
            <div className={styles.resourceContainer}>
                <div className={styles.inventoryHeader}>
                    Inventory
                </div>
                <div className={styles.asset}>
                    <img className={styles.robot} src={assets[0]}/>
                    <div>
                        <div>
                            Robot
                        </div>
                        <div>
                            Level {robotLevel}
                        </div>
                        <div>
                            <Button label="Upgrade" onClick={upgradeRobot}>Upgrade</Button>
                        </div>
                    </div>
                </div>
                <div className={styles.asset}>
                    <img className={styles.robot} src={assets[1]}/>
                    <div>
                        <div>
                            Cloud Converter
                        </div>
                        <div>
                            Level {cluodLevel}
                        </div>
                        <div>
                            <Button label="Upgrade" onClick={upgradeCloud}>Upgrade</Button>
                        </div>
                    </div>
                </div>
                <div className={styles.asset}>
                    <img className={styles.robot} src={assets[2]}/>
                    <div>
                        <div>
                            Rainbow Converter
                        </div>
                        <div>
                            Level {rainbowLevel}
                        </div>
                        <div>
                            <Button label="Upgrade" onClick={upgradeRainbow}>Upgrade</Button>
                        </div>
                    </div>
                </div>
            </div>

        </form>
    );
}

export default memo(Inventory);