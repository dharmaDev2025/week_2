const express = require('express');
const app = express();

function logger(req, res, next) {
  console.log(`${req.method} ${req.url}`);
<<<<<<< HEAD
  next();// call next();
  
=======
>>>>>>> 0c6780b830682c98483dc706af943986494c4a9b
}

app.use(logger);

app.get('/ping', (req, res) => {
  res.json({ message: 'pong' });
});
<<<<<<< HEAD
app.listen(3000,()=>{
  console.log("server running");
})
=======
>>>>>>> 0c6780b830682c98483dc706af943986494c4a9b

module.exports = app;