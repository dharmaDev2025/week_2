const express = require('express');
const app = express();

function getUserName(id) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(`User${id}`), 10);
  });
}

app.get('/names', async (req, res) => {
  const ids = [1, 2, 3];
  const names = await Promise.all(ids.map(async (id) => await getUserName(id)));//solve here

  res.json({ names });
});
app.listen(3000,()=>{
  console.log("server running");
})

module.exports = app;