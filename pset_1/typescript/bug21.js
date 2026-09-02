import express from 'express';
const app = express();
function getUserById(id) {
    return new Promise((resolve) => {
        setTimeout(() => resolve({ id, name: 'Alice' }), 10);
    });
}
async function loadUser(id) {
    const user = await getUserById(id);
    return user;
}
app.get('/users/:id', async (req, res) => {
    const user = await loadUser(Number(req.params.id));
    res.json(user);
});
app.listen(3000, () => {
    console.log("server is running");
});
export default app;
