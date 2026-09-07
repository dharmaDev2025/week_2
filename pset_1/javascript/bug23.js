const express = require('express');
const app = express();

function getUserName(id) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(`User${id}`), 10);
  });
}

app.get('/names', async (req, res) => {
  const ids = [1, 2, 3];
<<<<<<< HEAD
  const names = await Promise.all(ids.map(async (id) => await getUserName(id)));//solve here

  res.json({ names });
});
app.listen(3000,()=>{
  console.log("server running");
})
=======
  const names = ids.map(async (id) => await getUserName(id));
  res.json({ names });
});
>>>>>>> 0c6780b830682c98483dc706af943986494c4a9b

module.exports = app;