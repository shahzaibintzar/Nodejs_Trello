const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser")
const Auth = require("../models/authModel");
const { hashPassword } = require("../services/hashService");

async function handleLogin(req, res) {
    const user = await Auth.findOne({ email: req.body.email });
    console.log("user : ", user);

    if (!user) {
        return res.status(404).json({ message: "Authentication email failed" });
    }

    const passwordMatched = await bcrypt.compare(
        req.body.password,
        user.password
    );

    console.log("passwordMatched : ", passwordMatched);

    if (!passwordMatched) {
        return res.status(404).json({ message: "Authentication password failed" });
    }

    const token = jwt.sign(
        {
            id: user._id,
            admin: false,
            email: user.email,
            firstName: user.firstName
        },
        process.env.SECRET_KEY,
        { expiresIn: '1h' }
    );

    res.cookie("token", token, { httpOnly: true });

    return res.status(200).json({ message: "User logged in!", token });
}

async function handleSignUp(req, res) {
    const { firstName, email, password, confirmPassword } = req.body;

    // // Check if passwords match before hashing
    if (password !== confirmPassword) {
        return res.status(400).json({ message: "Passwords do not match" });
    }

    try {
        const hashedPassword = await hashPassword(password);
        const hashedConfirmPassword = await hashPassword(confirmPassword);

        const userData = new Auth({
            firstName,
            email,
            password: hashedPassword,
            confirmPassword: hashedConfirmPassword,
        });

        const user = await userData.save();
        res.status(201).json({ message: "User registered successfully!", user });
    } catch (error) {
        res.status(400).json({ message: "Erorr in SignUp API" });
    }
}


// async function handleSignUp(req, res) {


//     if (req.body.password !== req.body.confirmPassword) {
//         console.log("Your password not equal to confirm password")
//     }


//     const hashedPassword = await hashPassword(password);
//     const hashedConfirmPassword = await hashPassword(confirmPassword);


//     const userData = new Auth({
//         firstName: req.body.firstName,
//         email: req.body.email,
//         password: hashedPassword,
//         confirmPassword: hashedConfirmPassword,
//     });

//     try {
//         const user = await userData.save();
//         res.status(201).json({ message: "User registered successfuly!", user });
//     } catch (error) {
//         res.status(400).json({ message: error.message });
//     }
// }

async function handleUpdateProfile(req, res) {
    try {
        const token = req.cookies.token;
        const decoded = jwt.verify(token, process.env.SECRET_KEY);
        const userEmail = decoded.email;

        const user = await Auth.findOne({ email: userEmail });
        console.log('user', user)
        if (!user) {
            return res.status(404).json({ message: "User profile not found" });
        }

        user.firstName = req.body.firstName || user.firstName;
        // user.email = req.body.email || user.email;

        const updatedProfile = await user.save();

        return res.json({ message: "User profile updated successfully!", updatedProfile });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}
async function handleResetPassword(req, res) {
    try {
        const token = req.cookies.token;
        const decoded = jwt.verify(token, process.env.SECRET_KEY);
        const userEmail = decoded.email;

        const user = await Auth.findOne({ email: userEmail });

        if (!user) {
            return res.status(404).json({ message: "User profile not found" });
        }

        if (req.body.password !== req.body.confirmPassword) {
            console.log("Your password not equal to confirm password")
        }

        const oldPasswordMatched = await bcrypt.compare(req.body.oldPassword, user.password);

        if (!oldPasswordMatched) {
            return res.status(404).json({ message: "Old password not matched" });
        }

        const hashedPassword = await bcrypt.hash(req.body.password, 8);


        user.password = hashedPassword || user.password;

        const updatedProfile = await user.save();

        return res.json({ message: "Reset Password successfully!", updatedProfile });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}
async function handleDeleteAccount(req, res) {
    const token = req.cookies.token;
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    const userId = decoded.id;

    try {
        console.log(req.params);
        const deletedAccount = await Auth.findByIdAndDelete(userId);
        console.log("DeleteAccount : ", deletedAccount);

        if (!deletedAccount) {
            return res.status(404).json({ message: "User Account not found!" });
        }
        res.clearCookie("token");
        return res.json({ message: "User account deleted successfuly!" });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}
async function handleProtected(req, res) {
    const token = req.cookies.token;

    if (!token) {
        return res.status(401).json({ message: "Unauthorized: No token provided" });
    }

    try {
        const decoded = jwt.verify(token, process.env.SECRET_KEY);
        res.status(200).json({ message: "Authenticated!", user: decoded });
    } catch (error) {
        return res.status(401).json({ message: "Unauthorized: Invalid token" });
    }
}
async function handleLogout(req, res) {
    res.clearCookie("token");
    res.status(200).json({ message: "User logged out successfully!" });
}

module.exports = {
    handleLogin,
    handleSignUp,
    handleUpdateProfile,
    handleResetPassword,
    handleDeleteAccount,
    handleProtected,
    handleLogout,
};
