const express = require('express');
const app = express();


app.get('/crash', (req, res) => {
  throw new Error('Something broke');
});

app.use((err, req, res,next) => {
  res.status(500).json({ error: err.message });
  next(err);
})
app.listen(3000,()=>{
  console.log("server is running");
})

module.exports = app;