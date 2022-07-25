pool = require("../connection").pool;

function checkUserPassWord(name) {
  pool.query(
    "Select * from users where name = $1",
    [name],
    (error, results) => {
       if (error) throw error;

      console.log(results);
    }
  );
}

// const request = { name: "George", error: false};

checkUserPassWord("George");