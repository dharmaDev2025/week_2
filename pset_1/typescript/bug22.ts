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

app.get('/users/:id', async (req: Request, res: Response) => {
<<<<<<< HEAD
    const user: User = await getUserById(Number(req.params.id));
  res.json({ name: user.name });
});
app.listen(3000,()=>{
  console.log("server running");
})
=======
    const user: User = getUserById(Number(req.params.id));
  res.json({ name: user.name });
});
>>>>>>> 0c6780b830682c98483dc706af943986494c4a9b

export default app;