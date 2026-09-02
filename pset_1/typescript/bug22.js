import express from 'express';
const app = express();
function getUserById(id) {
    return new Promise((resolve) => {
        setTimeout(() => resolve({ id, name: 'Alice' }), 10);
    });
}
app.get('/users/:id', async (req, res) => {
    const user = await getUserById(Number(req.params.id));
    res.json({ name: user.name });
});
app.listen(3000, () => {
    console.log("server running");
});
export default app;
