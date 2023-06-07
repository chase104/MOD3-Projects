const express = require('express');

const app = express();

app.use(express.static('public'));

const users = [
    {
      id: 1,
      name: 'John',
      age: 25,
      email: 'john@example.com',
      points: 100
    },
    {
      id: 2,
      name: 'Jane',
      age: 30,
      email: 'jane@example.com',
      points: 150
    },
    {
      id: 3,
      name: 'Mark',
      age: 35,
      email: 'mark@example.com',
      points: 200
    }
  ];

app.get("/users", (req, res) => {
    res.send(users)
});
app.get('/users/points', (req, res) => {
    let goodUsers = users.filter((user) => {
        if (user.points < req.query.points) {
            return true
        }
    })

    console.log(goodUsers);
    res.send(goodUsers);
});

app.get("/users/:idOfUser", (req, res) => {
    let correctUser = users.find((user) => {
        if (user.id = req.params.idOfUser) {
            return true
        }
    })
    res.send(correctUser)
});




app.listen(3000, () => {
    console.log("sever listening on port ", 3000)
});


