const express = require('express');
const jwt = require('jsonwebtoken');
const app = express();

const SIGNING_SECRET = 'super-secret-key';

app.get('/token', (req, res) => {
  const token = jwt.sign({ userId: 1 }, SIGNING_SECRET);
  res.json({ token });
});

app.get('/protected', (req, res) => {
  const token = req.headers.authorization;
<<<<<<< HEAD
  console.log(token);
  try {
    const payload = jwt.verify(token, SIGNING_SECRET);
=======
  try {
    const payload = jwt.verify(token, 'wrong-secret-key');
>>>>>>> 0c6780b830682c98483dc706af943986494c4a9b
    res.json({ userId: payload.userId });
  } catch (err) {
    res.status(401).json({ error: 'Invalid token' });
  }
});
<<<<<<< HEAD
app.listen(3000,()=>{
  console.log("server running")
  

});

=======
>>>>>>> 0c6780b830682c98483dc706af943986494c4a9b

module.exports = app;