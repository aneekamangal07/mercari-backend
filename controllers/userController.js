const User = require('../models/User');

// Register or update user menstrual cycle data
exports.registerUser = async (req, res) => {
    const { name, email, startDate, cycleLength } = req.body;

    try {
        let user = await User.findOne({ email });

        if (user) {
            user.menstrualCycleData = { startDate, cycleLength, lastUpdated: Date.now() };
            await user.save();
            return res.status(200).json({ message: 'User data updated', user });
        }

        user = new User({
            name,
            email,
            menstrualCycleData: { startDate, cycleLength },
        });
        await user.save();
        res.status(201).json({ message: 'User registered', user });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};

// Get user data
exports.getUser = async (req, res) => {
    const { email } = req.params;

    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};
