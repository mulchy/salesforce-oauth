const express = require('express');
const app = express();

app.get('/*', function(req, res) {
  console.log(req.params);
  res.send(200)
});

app.listen(process.env.PORT);
