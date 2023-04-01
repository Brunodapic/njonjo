import User from "../models/user.model";

export const getUserInventory = async (req, res) => {
  const id = req.params.id;
  const findeUser = await User.findById(id);

  if (!findeUser) {
    res.sendStatus(404);
  } else {
    res.json({
      findeUser: robotLevel,
      findeUser: cluodLevel,
      findeUser: rainbowLevel,
    });
  }
};

export const updateUserInventory = async (req, res) => {
  const id = req.params.id;

  res.sendStatus(200);
};
export const registerUser = async (req, res) => {
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
    username
  });
  console.log(findeUser._id);
  const resData= {
    id:findeUser._id,
    username:findeUser.username
  }

  res.json(resData);
};
