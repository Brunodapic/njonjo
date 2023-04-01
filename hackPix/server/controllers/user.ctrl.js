import User from "../models/user.model";
import { robotUpgrade } from "../utils/upgradeTime.util";
import { Err } from "../utils/error.util";

export const getUserScoreboard = async (req, res) => {
  const allUsers = await User.find();
  const Scoreboard = [];
  console.log(allUsers);
  allUsers.forEach((user) => {
    Scoreboard.push({
      username: user.username,
      score: user.robotLevel + user.cluodLevel + user.rainbowLevel,
    });
  });
  console.log(Scoreboard);
  res.json(Scoreboard);
};

export const getUserInventory = async (req, res) => {
  const id = req.params.id;
  console.log(id);
  const findeUser = await User.findById({ _id: id });
  console.log(findeUser);
  if (!findeUser) {
    res.sendStatus(404);
  } else {
    const resData = {
      robotLevel: findeUser.robotLevel,
      cluodLevel: findeUser.cluodLevel,
      rainbowLevel: findeUser.rainbowLevel,
      upgradeEnd: findeUser.upgradeEnd,
    };
    res.json(resData);
  }
};

export const updateUserRobot = async (req, res) => {
  const id = req.params.id;
  const findeUser = await User.findById({ _id: id });
  console.log(findeUser);
  if (!findeUser) {
    res.sendStatus(404);
  } else {
    const now = Date.now();
    const addTime = robotUpgrade(
      findeUser.robotLevel + 1,
      findeUser.cluodLevel,
      findeUser.rainbowLevel
    );
    console.log(now, addTime, findeUser.upgradeEnd.getTime());
    const timeCheck=findeUser.upgradeEnd.getTime()<now+addTime
    if(timeCheck){

        const updateRobot = await User.findByIdAndUpdate(id, { robotLevel:findeUser.robotLevel + 1,upgradeEnd:now+addTime });
        console.log(updateRobot);
        res.sendStatus(200);

    }else{
        const error = new Err(400, "Upgrade cant happen");
        throw error;
    }

  }
};

export const updateUserCloud = async (req, res) => {
  const id = req.params.id;
  const findeUser = await User.findById({ _id: id });
  console.log(findeUser);
  if (!findeUser) {
    res.sendStatus(404);
  } else {
    const now = Date.now();
  }
  res.sendStatus(200);
};

export const updateUserRainbow = async (req, res) => {
  const { username } = req.body;

  if (username === "") {
    const error = new Err(400, "name is required");
    throw error;
  }

  const newUser = new User({
    username,
    robotLevel: 1,
    cluodLevel: 0,
    rainbowLevel: 0,
    upgradeEnd: Date.now(),
  });
  const reqUser = await newUser.save();
  console.log(reqUser);
  res.sendStatus(200);
};

export const loginUser = async (req, res) => {
  const { username } = req.body;

  if (username === "") {
    const error = new Err(400, "name is required");
    throw error;
  }
  const findeUser = await User.findOne({
    username,
  });
  console.log(findeUser._id);
  const resData = {
    id: findeUser._id,
    username: findeUser.username,
  };

  res.json(resData);
};
