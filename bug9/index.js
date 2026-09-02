const express = require('express');
const routes = require('./routes');

const app = express();

<<<<<<< HEAD
app.use(routes);
=======
app.get(routes);
>>>>>>> 3612025dadbe3a231cea097fed606d210c54883e

app.listen(3000, () => console.log('Server running on port 3000'));