const bcrypt = require("bcryptjs");

const hashPassword = async (password) => {
    try {
        const hashedPassword = await bcrypt.hash(password, 8);
        return hashedPassword;
    } catch (error) {
        throw new Error('Error hashing password');
    }
};

module.exports = {
    hashPassword,
};
