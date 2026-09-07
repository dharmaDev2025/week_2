import express, { Request, Response } from 'express';
const app = express();

interface User {
  id: number;
  name: string;
}

function getUserById(id: number): Promise<User> {
  return new Promise((resolve) => {
    setTimeout(() => resolve({ id, name: 'Alice' }), 10);
  });
}

<<<<<<< HEAD
async function loadUser(id: number): Promise<User> {
=======
async function loadUser(id: number): User {
>>>>>>> 0c6780b830682c98483dc706af943986494c4a9b
  const user = await getUserById(id);
  return user;
}

app.get('/users/:id', async (req: Request, res: Response) => {
  const user = await loadUser(Number(req.params.id));
  res.json(user);
});
<<<<<<< HEAD
app.listen(3000,()=>{
  console.log("server is running");
})
=======
>>>>>>> 0c6780b830682c98483dc706af943986494c4a9b

export default app;