const mysql = require("mysql");
const Promise = require("bluebird");

Promise.promisifyAll(require("mysql/lib/Connection").prototype);

const dbinfo = {
  host: "localhost",
  user: "root",
  password: "cdac",
  database: "project1",
};

async function connCheck(){
    
    const connection = mysql.createConnection(dbinfo);
    await connection.connectAsync();

    console.log("Connection Sucess");

    await  connection.endAsync();
}

async function addUser(user) {
    const connection = mysql.createConnection(dbinfo);
    await connection.connectAsync();
    console.log("Connection Sucess");

    let sql = `insert into user(username,password) values(?,?)`;
    await connection.queryAsync(sql,[user.username, user.password]); 
    await  connection.endAsync();
    console.log('record added');
 }

 const user ={
     username:'Pratik', password:'pratik090'
 }

//  addUser(user);

async function selectAllUser() {
    const connection = mysql.createConnection(dbinfo);
    await connection.connectAsync();
    console.log("Connection Sucess");

    let sql = `select * from user`;
   const list= await connection.queryAsync(sql,[]); 
    await  connection.endAsync();
    console.log('record selected');
    return list;
 }

//selectAllUser();

module.exports = { selectAllUser, addUser};
