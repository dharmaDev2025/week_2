import express, { Request, Response, NextFunction } from 'express';
const app = express();

function logger(req: Request, res: Response, next: NextFunction) {
  console.log(`${req.method} ${req.url}`);
<<<<<<< HEAD
  next();
=======
>>>>>>> 0c6780b830682c98483dc706af943986494c4a9b
}

app.use(logger);

app.get('/ping', (req: Request, res: Response) => {
  res.json({ message: 'pong' });
});
<<<<<<< HEAD
app.listen(3000,()=>{
  console.log("server running");
})
=======
>>>>>>> 0c6780b830682c98483dc706af943986494c4a9b

export default app;