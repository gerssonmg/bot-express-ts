// const express = require('express');
import app from './app';

const PORT = process.env.PORT || 4040;

// const app = express();
// app.use(express.json());



app.listen(PORT, (err?: Error) => {
  if (err) {console.log(err);
    return;
  }
  console.log(`Server is running on port ${PORT}`);
});
