require("dotenv").config();

const { PrismaClient } = require('@prisma/client')
const bcrypt = require("bcryptjs");
const { User, validate } = require("../models/User");
const prisma = new PrismaClient()

const registerUser = async(req, res) => {
    try {

        const { error } = validate(req.body);

        const { name, email, role, password } = req.body;

        if(error) res.json({
            success: false,
            message: error.details[0].message
        });

        const user = await prisma.user.findOne();
    } catch(e) {
        console.log(e);
        res.status(500).json({
            success: false,
            message: "There was an error while registering the user"
        });
    }
};