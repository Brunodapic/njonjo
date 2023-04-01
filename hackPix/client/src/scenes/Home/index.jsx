import { memo, useState } from "react";

import Robot from "../../components/Robot";

const Home = () => {
    const [scoreBoard, setScoreboard] = useState('');

    

    return (
        <div>
            {robots.map((robot) => <Robot name={`${robot._id}: ${robot.name}`} type={robot.type} key={robot._id} />)}
        </div>
    );
}

export default memo(Home);