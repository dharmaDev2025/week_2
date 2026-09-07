const express = require('express');
const app = express();

function findUser(id) {
  return new Promise((resolve, reject) => {
    if (id === 1) resolve({ id: 1, name: 'Alice' });
    else reject(new Error('User not found'));
  });
}

app.get('/users/:id', async (req, res) => {
  const user = await findUser(Number(req.params.id));
  res.json(user);
});
<<<<<<< HEAD
app.listen(3000,()=>{
  console.log("server running");
})
=======
>>>>>>> 0c6780b830682c98483dc706af943986494c4a9b

module.exports = app;