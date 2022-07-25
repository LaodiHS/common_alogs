const pool = require("./connection").pool;
const { crypt } = require("../crypt/crypt");
const getUsers = (request, response) => {
  pool.query("SELECT * FROM users ORDER BY id ASC", (error, results) => {
    if (error) {
      throw error;
    }
    console.log("results first::", results.rows);
    response.status(200).json(results.rows);
  });
};

const getUserById = (request, response) => {
  const id = parseInt(request.params.id);

  pool.query("SELECT * FROM users WHERE id = $1", [id], (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};

const createUser = (request, response) => {
  const { name, email, password } = request.body;

  const { hash, salt } = crypt.saltHashPassword(password);

  pool.query(
    "INSERT INTO users (name, email, password, passwordsalt) VALUES ($1, $2, $3, $4)",
    [name, email, hash, salt],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(201).send(`User added with ID: ${result.insertId}`);
    }
  );
};

const updateUser = (request, response) => {
  const id = parseInt(request.params.id);
  const { name, email } = request.body;

  pool.query(
    "UPDATE users SET name = $1, email = $2 WHERE id = $3",
    [name, email, id],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).send(`User modified with ID: ${id}`);
    }
  );
};

const deleteUser = (request, response) => {
  const id = parseInt(request.params.id);

  pool.query("DELETE FROM users WHERE id = $1", [id], (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).send(`User deleted with ID: ${id}`);
  });
};

const loginUser = (request, response) => {
  
  const { name } = request.query;
  const unsaltedPassword = request.password;
  pool.query(
    "Select  btrim(password) as password , btrim(passwordsalt) as passwordsalt from users where name = $1",
    [name],
    (error, results) => {
      if (error) {
        throw error;
      }
      if (
        !crypt.isValid(
          results.rows[0].password,
          request.query.password,
          results.rows[0].passwordsalt
        )
      ) {
        const value = [{ response: "unathorized" }];

        response.sendStatus(401)
      } else {
        response.status(200).json(results.rows);
      }
    }
  );
};

module.exports = {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  loginUser
};
