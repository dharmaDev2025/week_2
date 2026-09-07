const express = require('express');
const app = express();

function requireApiKey(req, res, next) {
<<<<<<< HEAD
  console.log(req.headers);
=======
>>>>>>> 0c6780b830682c98483dc706af943986494c4a9b
  if (req.headers['x-api-key'] !== 'secret123') {
    return res.status(401).json({ error: 'Unauthorized' });
  }
  next();
}

app.use(requireApiKey);

app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

app.get('/private-data', (req, res) => {
  res.json({ secret: 'top secret info' });
});
<<<<<<< HEAD
app.listen(3000,()=>{
  console.log("server running");
})
=======

>>>>>>> 0c6780b830682c98483dc706af943986494c4a9b
module.exports = app;