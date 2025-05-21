const add = (a, b) => {
  return a + b;
};

const err = () => {
  throw new Error("I am new error");
};

const arr = () => {
  return ["Anand"];
};

const promiseTest = (a, b) => {
  return new Promise((resolve, reject) => {
    if (a - b > 0) {
      resolve("+ve");
    } else {
      resolve("-ve");
    }
  });
};

const express = require("express");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/users", (req, res) => {
  res.status(200).json({
    users: [
      {
        name: "anand",
        email: "demo@gmail.com",
        password: "password@123",
      },
    ],
  });
});
app.listen(3000);

module.exports = {
  add,
  err,
  arr,
  promiseTest,
  app,
};
