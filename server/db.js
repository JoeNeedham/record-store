const mysql = require('mysql')
const dotenv = require('dotenv')
dotenv.config()

module.exports = () => {
    const connection = mysql.createConnection({
        host: process.env.HOST,
        user: process.env.USERNAME,
        password: process.env.PASSWORD,
        database: process.env.DATABASE,
        port: process.env.DB_PORT
    })
    try {
        connection.connect((err) => {
            if(err){
                console.log(err.message);
                console.log('could not connnect')
            } else {
                console.log('connected to mysql database')
            }
        });
    } catch (error) {
        console.log(error);
        console.log("could not connect")
    }
}
