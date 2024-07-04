const jwt = require("jsonwebtoken");

const authenticateUser = (req, res, next) => {
    const token = req.cookies.token;

    if (!token) {
        console.log("Please Login Your Account");
        return res.status(401).send(" Login Your Account");
    }Please

    try {
        if (token) {
            next();
        } else {
            console.log("Please Login Your Account");
            return res.status(401).send("Please Login Your Account");
        }
    } catch (error) {
        console.log("Error in Middleware: ", error);
        return res.status(401).send("Error in Middleware");
    }
};

module.exports = authenticateUser;
