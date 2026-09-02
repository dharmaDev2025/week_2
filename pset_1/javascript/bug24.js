const express = require('express');
const app = express();

function logger(req, res, next) {
  console.log(`${req.method} ${req.url}`);
  next();// call next();
  
}

app.use(logger);

app.get('/ping', (req, res) => {
  res.json({ message: 'pong' });
});
app.listen(3000,()=>{
  console.log("server running");
})

module.exports = app;