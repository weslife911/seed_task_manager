const mongoose = require("mongoose");
const Joi = require("joi");
const passwordComplexity = require("joi-password-complexity");

const userSchema = mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    role: {
        type: [String],
        enum: ["user", "admin"],
        default: "user"
    },
    password: { type: String, required: true }
});

const User = mongoose.model("User", userSchema);

const validate = async(data) => {
    const schema = Joi.object({
        name: Joi.string().required().label("Name"),
        email: Joi.string().email().required().label("Email"),
        password: passwordComplexity().string().required()
    });

    return await schema.validate(data);
};

module.exports = {
    validate,
    User
};