const mysqlConnection = require("./../../config/database");


module.exports = {  
  createAdmin: (data, callBack) => {
    console.log(data);
    mysqlConnection.query(
      `insert into admin(email,password) 
                values(?,?)`,
      [
        data.email,
        data.password,
      ],
      (error, results, fields) => {
        console.log('results');
        console.log(results);
        if (error) {
          return callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
 
  getUserByUserEmail: (email, callBack) => {
    mysqlConnection.query(
      `select * from admin where email = ?`,
      [email],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results[0]);
      }
    );
  }}
  