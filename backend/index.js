const express = require("express");
const cors = require("cors");

const { getUserByEmailAndPassword, getAllUsers } = require("./services");
const { generateToken, verifyToken } = require("./auth");

const app = express();
const port = 4000;

app.use(express.json());
app.use(cors());

app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const users = await getUserByEmailAndPassword(email, password);

  if (users.length === 1) {
    const [authenticatedUser] = users;

    delete authenticatedUser.password;
    const token = await generateToken(authenticatedUser);
    return res.status(200).json({ token });
  }

  return res.status(401).send();
});

app.get("/users", async (req, res) => {
  try {
    const token = req.headers.authorization.split(" ")[1];

    await verifyToken(token);

    const users = await getAllUsers();

    return res.status(200).send(users);
  } catch (err) {
    return res.status(401).send();
  }
});

app.listen(port, () => {
  console.log(`Authenticated app listening on port ${port}`);
});
