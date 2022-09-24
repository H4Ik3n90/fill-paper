const { Sequelize, DataTypes } = require('sequelize');
const sequel = new Sequelize(
    'fill_paper',
    'devLearn',
    'daffakhayru@123',
    {
        host: 'localhost',
        dialect: 'mysql'
    }
);

sequel.authenticate()
    .then(() => {
        console.log("Database succesfully connected");
    })
    .catch((err) => {
        console.log("Error occured: ", err);
    });

const notesPaper = sequel.define("notes_paper", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
    },
    title: {
        type: DataTypes.STRING,
        allowNull: true
    },
    body: {
        type: DataTypes.STRING,
        allowNull: true  
    }
});

sequel.sync()
    .then(() => {
        console.log('Tables successfully created');
    })
    .catch((err) => {
        console.log("Unable to create tables: ",err);
    })

module.exports = {
    sequel,
    notesPaper  
}