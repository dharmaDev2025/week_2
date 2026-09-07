const express = require('express');
const app = express();

<<<<<<< HEAD

=======
>>>>>>> 0c6780b830682c98483dc706af943986494c4a9b
app.get('/crash', (req, res) => {
  throw new Error('Something broke');
});

<<<<<<< HEAD
app.use((err, req, res,next) => {
  res.status(500).json({ error: err.message });
  next(err);
})
app.listen(3000,()=>{
  console.log("server is running");
})
=======
app.use((err, req, res) => {
  res.status(500).json({ error: err.message });
});
>>>>>>> 0c6780b830682c98483dc706af943986494c4a9b

module.exports = app;