const { prisma } = require('../model/UserModel.js');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const user_fill_paper = "FILL_PAPER_ACCESS"

const register = async (req,res) => {
    const {id,username,email,password} = req.body;
    
    const usernameReady = await prisma.user.findUnique({where: {username: username}});
    const emailReady = await prisma.user.findUnique({where: {email: email}});

    if(emailReady && usernameReady) {
        return res.status(400).json({message: "Email and username aleread taken"});
    } if(emailReady) {
        return res.status(400).json({message: "Email has already taken"});
    } if(usernameReady) {
        return res.status(400).json({message: "Username already taken"});
    }

    const hashPassword = await bcrypt.hash(password, 10);

    const signup = await prisma.user.create({
        data: {
            id: id,
            username: username,
            email: email,
            password: hashPassword
        }
    });

    const userToken = jwt.sign({id: signup.id, username: signup.username, email: signup.email, password: signup.password}, user_fill_paper);

    res.status(201).json({user: signup, token: userToken});
};

const getUser = async (req,res) => {
    const userData = await prisma.user.findMany();

    res.json(userData);
};

const postNote = () => {

};

const getAllNote = () => {

};

const updateNote = () => {

};

const deleteNote = () => {

};

module.exports = {
    register,
    getUser,
    getAllNote,
    postNote,
    updateNote,
    deleteNote
}