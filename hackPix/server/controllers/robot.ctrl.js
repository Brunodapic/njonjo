import Robot from '../models/robot.model';

export const create = async (req, res) => {
    const { name, type } = req.body;

    const newRobot = new Robot({ name, type });
    await newRobot.save();

    res.sendStatus(204);
}

export const getAllRobots = async (req, res) => {
    const allRobots = await Robot.find();

    res.json(allRobots);
}