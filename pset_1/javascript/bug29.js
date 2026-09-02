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
  console.log(token);
  try {
    const payload = jwt.verify(token, SIGNING_SECRET);
    res.json({ userId: payload.userId });
  } catch (err) {
    res.status(401).json({ error: 'Invalid token' });
  }
});
app.listen(3000,()=>{
  console.log("server running")
  

});


module.exports = app;