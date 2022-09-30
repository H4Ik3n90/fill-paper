const jwt = require('jsonwebtoken');

const authUser = async (req,res,next) => {
    const auth = req.headers['authorization'];
};

module.exports = {
    authUser
}