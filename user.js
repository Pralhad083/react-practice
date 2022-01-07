const mysql = require("mysql2");
const procss = require("process");

const dbinfo = {
    host: "localhost",
    user: "root",
    password: "cdac",
    database: "registration",
};

const connection= mysql.createConnection(dbinfo);

connection.connect();

// let sql=`insert into loginDetails(username, password) values("pratik","Pratik89") `;
// let sql =`update loginDetails set username="Prashant" where id=3 `;

const user = { username: procss.argv[2], password: procss.argv[3] };
let sql = `INSERT INTO loginDetails (username, password) values ("${user.username}", "${user.password}")`;

connection.query(sql);

console.log("User Added");

connection.end();