const express = require('express');
const app = express();

function requireAuth(req, res, next) {
  const token = req.headers.authorization;
  if (!token) {
    res.status(401);
  }
  next();
}

app.get('/protected', requireAuth, (req, res) => {
  res.json({ message: 'secret data' });
});
<<<<<<< HEAD
app.listen(3000,()=>{
  console.log("servver running");
})
=======
>>>>>>> 0c6780b830682c98483dc706af943986494c4a9b

module.exports = app;