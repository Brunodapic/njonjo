import { memo, useState, useEffect } from "react";
import axios from "axios";
import Robot from "../../components/Robot";
import ScoreboardItem from "../../components/ScoreboardItem/ScoreboardItem";

const Home = () => {
  const [scoreBoard, setScoreboard] = useState([]);
  console.log(scoreBoard);
  const getScoreboard = async () => {
    const req = await axios.get("api/user/");
    console.log(req.data);
    const data=req.data.sort((a,b) => b.score - a.score); // b - a for reverse sort

    setScoreboard(data);
  };

  useEffect(() => {
    getScoreboard();
  }, []);

  return <div>
   {scoreBoard.map((scoreElement)=>{
    return <ScoreboardItem key={scoreElement.username} username={scoreElement.username} score={scoreElement.score}/>
   })}
  </div>;
};

export default memo(Home);
