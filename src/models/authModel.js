const mongoose = require("mongoose");
const { trim } = require("validator");

const authSchema = new mongoose.Schema(
    {
        firstName: { type: String, trim: true, required: true },
        email: {
            type: String, unique: true, trim: true,
            lowercase: true, required: true
        },
        password: { type: String, trim: true, minlength: 8, required: true },
        confirmPassword: { type: String, trim: true, minlength: 8, required: true }

    },

    { collection: "auth", versionKey: false }
);

const Auth = mongoose.model("auth", authSchema);

module.exports = Auth
