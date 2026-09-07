const express = require('express');
const app = express();

<<<<<<< HEAD

=======
>>>>>>> 0c6780b830682c98483dc706af943986494c4a9b
function getUserById(id) {
  return new Promise((resolve) => {
    setTimeout(() => resolve({ id, name: 'Alice' }), 10);
  });
}

app.get('/users/:id', async (req, res) => {
<<<<<<< HEAD
  const user = await getUserById(Number(req.params.id));//add await
  res.json(user);
});
app.listen(3000,()=>{
  console.log("server running");
})
=======
  const user = getUserById(Number(req.params.id));
  res.json(user);
});
>>>>>>> 0c6780b830682c98483dc706af943986494c4a9b

module.exports = app;