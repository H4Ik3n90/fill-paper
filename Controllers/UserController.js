const { prisma } = require('../model/UserModel.js');

const register = async (req,res) => {
    await prisma.user.create({
        data: {
            id: req.body.id,
            username: req.body.username,
            email: req.body.email,
            password: req.body.password
        }
    })
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