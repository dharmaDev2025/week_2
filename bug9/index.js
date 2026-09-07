const express = require('express');
const routes = require('./routes');

const app = express();

<<<<<<< HEAD
<<<<<<< HEAD
app.use(routes);
=======
app.get(routes);
>>>>>>> 3612025dadbe3a231cea097fed606d210c54883e
=======
app.get(routes);
>>>>>>> 0c6780b830682c98483dc706af943986494c4a9b

app.listen(3000, () => console.log('Server running on port 3000'));