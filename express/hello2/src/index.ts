import express from 'express';

const port = 5000;
const app = express();

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.listen(port, () => {
  /* eslint-disable-next-line no-console */
  console.log(`Example app listening at http://localhost:${port}`);
});
