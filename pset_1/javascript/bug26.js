const express = require('express');
const app = express();

function checkBody(req, res, next) {
<<<<<<< HEAD
  
=======
>>>>>>> 0c6780b830682c98483dc706af943986494c4a9b
  if (!req.body || !req.body.name) {
    return next(new Error('Name is required'));
  }
  next();
}

app.use(express.json());

app.post('/users', checkBody, (req, res) => {
  res.status(201).json({ message: 'Created' });
});
<<<<<<< HEAD
app.listen(3000,()=>{
  console.log("server running");

})
=======
>>>>>>> 0c6780b830682c98483dc706af943986494c4a9b

module.exports = app;