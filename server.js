const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
 
app.get('/', (req, res) => {
  res.send('Hello World! My name is Yipeng Wang. I am here again!!!'); // redeploy!
});

module.exports = app;
// app.listen(port, () => {
//   console.log(`App listening on port ${port}`);
// });